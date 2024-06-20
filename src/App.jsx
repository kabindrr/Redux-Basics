import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { setUser } from "./redux/slice/userSlice";

const userObj = {
  firstName: "Kabs",
  lastName: "Rans",
  phone: 12345678,
  email: "email@email.com",
  role: "admin",
};
const App = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userInfo);
  console.log(user);

  const handleOnButtonClick = () => {
    dispatch(setUser(userObj));
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <h1>Hello from Redux</h1>
        <button onClick={handleOnButtonClick}>Dispatch Me</button>
      </div>
    </>
  );
};

export default App;
