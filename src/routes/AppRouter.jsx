import { createBrowserRouter, Navigate, RouterProvider, Routes, Route } from 'react-router-dom';
import Beer from '../Beer';
import Contacto from '../Contacto';
import Home from '../Home';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/contacto"
          element={<Contacto />}
        />
        <Route
          path="/beer/:id"
          element={<Beer />}
        />
        <Route
          path="/*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </>
  );
};
