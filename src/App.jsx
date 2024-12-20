import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./components/List/List";
import Detail from "./components/Detail/Detail";
import axios from "axios";

const Restaurants = async () => {
  const response = await axios.get("/restaurant.json");
  return response.data;
};

const restaurantDetails = async ({ params }) => {
  const response = await axios.get("/restaurant.json");
  const data = response.data;
  return data.find((restaurant) => restaurant.id === params.restaurantId);
};



const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
    loader: Restaurants,
  },
  {
    path: "/restaurant/:restaurantId",
    element: <Detail />,
    loader: restaurantDetails,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
