import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Workspace from "./pages/Workspace";

import LoginPage from "./pages/auth/Login";
import GithubCallback from "./pages/auth/GithubCallback";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth pages: standalone */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/callback" element={<GithubCallback />} />

        {/* Pages with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          {/* Protected pages */}
          <Route
            path="/workspace"
            element={
              <ProtectedRoute>
                <Workspace />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
