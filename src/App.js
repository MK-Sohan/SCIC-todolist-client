import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./componants/Home/Home";
import StandardNavMenu from "./componants/StandardNavMenu";
import Footer from "./componants/footer/Footer";
import Maintodo from "./componants/MainTodo/Maintodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CompletedTasks from "./componants/CompletedTasks/CompletedTasks";
import EditTodo from "./componants/EditTodo/EditTodo";
import FourOFour from "./componants/FouroFour/FourOFour";
function App() {
  return (
    <div className=" bg-slate-200 back overflow-x-hidden">
      <StandardNavMenu></StandardNavMenu>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/todo" element={<Maintodo></Maintodo>} />
        <Route
          path="/completetask"
          element={<CompletedTasks></CompletedTasks>}
        />
        <Route path="/edittodo/:todoid" element={<EditTodo></EditTodo>} />

        <Route path="*" element={<FourOFour></FourOFour>} />
      </Routes>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
