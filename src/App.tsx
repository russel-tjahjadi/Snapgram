import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";
import "./globals.css";
import { Routes, Route, Router } from "react-router-dom";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout />}>
          {/* Additional Pages that is going to appear there! */}
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
        {/* Private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;

// Notes:
// Public routes: the routes that everyone can see: the sign in / sign up page
// Private routes: the routes only when you sign in: the content page
// currently on: 20:13
