import Signup from "./Components/User/Signup/Signup";
import Signin from "./Components/User/Signin/Signin";
import Home from "./Components/User/Home/Home";
import Feedback from "./Components/User/Feedback/Feedback";
import Upload from "./Components/User/Upload/Upload";
import Download from "./Components/User/Download/Download";
import UserAccount from "./Components/Admin/UserAccount/UserAccount";
import FeedbackCheck from "./Components/Admin/FeedbackCheck/FeedbackCheck";
import ViewFeedback from "./Components/Admin/ViewFeedback/ViewFeedback";
import CompliantCheck from "./Components/Admin/CompliantCheck/CompliantCheck";
import Report from "./Components/User/Report/Report";
import AppManagement from "./Components/Admin/AppManagement/AppManagement";
import App from "./Components/User/Apps/App";
import Games from "./Components/User/Games/Games";
import UserRoutes from "./Routes/UserRoutes"
import AdminRoutes from "./Routes/AdminRoutes"
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
  <Route path="/*" element={<UserRoutes/>}/>
  <Route path="/admin/*" element={<AdminRoutes/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
