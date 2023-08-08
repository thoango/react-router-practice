// Challenge / Exercise

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventsRootLayout from "./pages/EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "events",
        element: <EventsRootLayout></EventsRootLayout>,
        children: [
          { index: true, element: <EventsPage></EventsPage> },
          { path: ":id", element: <EventDetailPage></EventDetailPage> },
          { path: "new", element: <NewEventPage></NewEventPage> },
          { path: ":id/edit", element: <EditEventPage></EditEventPage> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
