import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { PlusCircle, Trash2, Edit2 } from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TodoForm {
  title: string;
  description: string;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState<TodoForm>({
    title: "",
    description: "",
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<TodoForm>({
    title: "",
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (): void => {
    if (newTodo.title.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: newTodo.title,
          description: newTodo.description,
          completed: false,
        },
      ]);
      setNewTodo({ title: "", description: "" });
    }
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (todo: Todo): void => {
    setEditingId(todo.id);
    setEditForm({ title: todo.title, description: todo.description });
  };

  const saveEdit = (id: number): void => {
    if (editForm.title.trim()) {
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, ...editForm } : todo))
      );
      setEditingId(null);
    }
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addTodo();
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <div className="m-10">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Todo List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Add Todo Form */}
              <div className="flex flex-col space-y-2">
                <Input
                  placeholder="Enter todo title"
                  value={newTodo.title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNewTodo({ ...newTodo, title: e.target.value })
                  }
                  onKeyPress={handleKeyPress}
                />
                <Textarea
                  placeholder="Enter description (optional)"
                  value={newTodo.description}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setNewTodo({ ...newTodo, description: e.target.value })
                  }
                  onKeyPress={handleKeyPress}
                />
                <Button onClick={addTodo} className="w-full">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Todo
                </Button>
              </div>

              {/* Todo List */}
              <div className="space-y-2">
                {todos.length === 0 ? (
                  <Alert>
                    <AlertDescription>
                      No todos yet. Add some tasks to get started!
                    </AlertDescription>
                  </Alert>
                ) : (
                  todos.map((todo: Todo) => (
                    <Card
                      key={todo.id}
                      className={`p-4 ${todo.completed ? "bg-gray-50" : ""}`}
                    >
                      {editingId === todo.id ? (
                        <div className="space-y-2">
                          <Input
                            value={editForm.title}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              setEditForm({
                                ...editForm,
                                title: e.target.value,
                              })
                            }
                          />
                          <Textarea
                            value={editForm.description}
                            onChange={(
                              e: React.ChangeEvent<HTMLTextAreaElement>
                            ) =>
                              setEditForm({
                                ...editForm,
                                description: e.target.value,
                              })
                            }
                          />
                          <div className="flex justify-end space-x-2">
                            <Button
                              variant="outline"
                              onClick={() => setEditingId(null)}
                            >
                              Cancel
                            </Button>
                            <Button onClick={() => saveEdit(todo.id)}>
                              Save
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id={`todo-${todo.id}`}
                              checked={todo.completed}
                              onCheckedChange={() => toggleTodo(todo.id)}
                              className="w-5 h-5 border-2 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            />
                            <div
                              className={`${
                                todo.completed
                                  ? "line-through text-gray-500"
                                  : ""
                              }`}
                            >
                              <h3 className="font-medium">{todo.title}</h3>
                              {todo.description && (
                                <p className="text-sm text-gray-600">
                                  {todo.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => startEditing(todo)}
                            >
                              <Edit2 className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => deleteTodo(todo.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))
                )}
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default TodoApp;
