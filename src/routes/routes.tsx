// src/routes/routes.tsx
import { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import SearchFilter from "../components/SearchFilter";
import { Item } from "../types";
import TodoApp from "../components/TodoApp";
import NavbarDemo from "../components/NavbarDemo";
import BlogPosts from "../components/BlogPost";
import { Counter } from "../components/Counter";
import Card from "../components/CardCustom/CardCustom";
import LoginForm from "../components/LoginForm/LoginForm";

export const sampleItems: Item[] = [
  { id: 1, name: "iPhone 12", category: "Electronics", price: "$999" },
  { id: 2, name: "MacBook Pro", category: "Electronics", price: "$1299" },
  { id: 3, name: "Coffee Maker", category: "Appliances", price: "$79" },
  { id: 4, name: "Running Shoes", category: "Sports", price: "$129" },
  {
    id: 5,
    name: "Wireless Headphones",
    category: "Electronics",
    price: "$199",
  },
];

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/todo" replace />,
  },
  {
    path: "/search",
    element: (
      <SearchFilter
        items={sampleItems}
        searchKeys={["name", "category", "price"]}
      />
    ),
  },
  {
    path: "/todo",
    element: <TodoApp />,
  },
  {
    path: "/navbar",
    element: <NavbarDemo />,
  },
  {
    path: "api",
    element: <BlogPosts />,
  },
  {
    path: "counter",
    element: <Counter />,
  },
  {
    path: "card",
    element: (
      <Card
        title="Your Card"
        imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        description="Your description here"
        showReadMore={true}
      />
    ),
  },
  {
    path: "form",
    element: <LoginForm />,
  },
  {
    path: "*",
    element: <Navigate to="/search" replace />,
  },
];
