import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ImageTextBox } from "./screens/ImageTextBox";
import { ImageTextBoxScreen } from "./screens/ImageTextBoxScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ImageTextBox />,
  },
  {
    path: "/imageu47textu45boxu47mobileu95360",
    element: <ImageTextBox />,
  },
  {
    path: "/imageu47textu45boxu47mobileu953602",
    element: <ImageTextBoxScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
