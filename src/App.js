import "./App.css";
import Form from "./components/Form";
import UserProfile from "./components/UserProfile";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

function App() {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const isLoggedIn = useSelector((state) => state.ui.isLoggedIn);
  const userName = JSON.parse(localStorage.getItem('userData'))

  return (
    <div className="App">
      <header>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contacts</li>
            {isLoggedIn ? <li>{userName.gmail}</li> : (
              <Link to="/form" style={{ color: "white" }}>
                Sign in
              </Link>
            )}
        </ul>
      </header>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
      {isLoading && <CircularProgress color="inherit" />}
    </div>
  );
}

export default App;
