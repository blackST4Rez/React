import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <>
        <nav className="flex items-center justify-between bg-slate-800 px-8 py-4 text-white shadow-md">
          <h2 className="text-2xl font-bold">
            ReactRouter
          </h2>

          <div className="flex items-center gap-6 text-lg">
            <Link
              to="/"
              className="transition-colors hover:text-blue-400"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="transition-colors hover:text-blue-400"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="transition-colors hover:text-blue-400"
            >
              Contact
            </Link>
          </div>
        </nav>

          <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

          </Routes>
      </>
    </div>
  )
}

export default App
