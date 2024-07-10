import MainComponent from "./components/mainComponent";
import Home from "./components/home";
import DataContext from "./context/dataContext";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext, useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
  });
  return (
    <DataContext.Provider value={data}>
      <Routes>
        <Route path="/" element={<Navigate to={"/auth/login"} />} />
        <Route
          path="/auth/login"
          element={<MainComponent data={data} setData={setData} />}
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </DataContext.Provider>
  );
}

export default App;
