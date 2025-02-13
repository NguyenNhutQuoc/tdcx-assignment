import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

// Define the form values interface
interface FormValues {
  name: string;
  email: string;
  password: string;
}

// Initial form values
const initialValues: FormValues = {
  name: "",
  email: "",
  password: "",
};

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const LoginForm: React.FC = () => {
  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form values:", values);

      // Reset form
      resetForm();
      // Dismiss loading toast and show success
      toast.success("Form submitted successfully!", {
        description: `Welcome ${values.name}!`,
      });
    } catch (error) {
      // Show error toast
      toast.error("Failed to submit form", {
        description: "Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Sign Up
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full p-2 border rounded-md ${
                    errors.name && touched.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  } focus:outline-none focus:ring-2`}
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full p-2 border rounded-md ${
                    errors.email && touched.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  } focus:outline-none focus:ring-2`}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className={`w-full p-2 border rounded-md ${
                    errors.password && touched.password
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  } focus:outline-none focus:ring-2`}
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md 
                  ${!isSubmitting && "hover:bg-blue-600"} 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 
                  focus:ring-offset-2 transition-colors
                  ${isSubmitting && "opacity-50 cursor-not-allowed"}`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
