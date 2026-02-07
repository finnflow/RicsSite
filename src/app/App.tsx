import { RouterProvider } from "react-router";
import { router } from "@/app/routes";
import { Suspense } from "react";

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-gray-600">Lädt...</div>
    </div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}