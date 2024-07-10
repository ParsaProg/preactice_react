import { useContext } from "react";
import DataContext from "../context/dataContext";

const Home = () => {
  const data = useContext(DataContext);
  return (
    <div className="name-container centred">
      <h1>اطلاعات کاربری شما</h1>
      <h3>نام: {data.name}</h3>
      <h3>ایمیل: {data.email}</h3>
      <h3>پسورد: {data.password}</h3>
      <h3>بیوگرافی: {data.bio}</h3>
      <h4>تغییرات: {data.bio}</h4>
    </div>
  );
};

export default Home;
