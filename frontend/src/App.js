import Registration from "./Pages/User/Registration";
import LoginPage from "./Pages/User/LoginPage";
import HomePage from "./Pages/User/HomePage";
import ApplicationPage from "./Pages/User/ApplicationPage";
import GamePage from "./Pages/User/GamePage";
import DownloadPage from "./Pages/User/DownloadPage";
import FeedbackPage from "./Pages/User/FeedbackPage";
import UploadPage from "./Pages/User/UploadPage";
import ReportPage from "./Pages/User/ReportPage";
import LibraryPage from "./Pages/User/LibraryPage";
import AdminAppManagementPage from "./Pages/Admin/AdminAppManagementPage";
import AdminCompliantPage from "./Pages/Admin/AdminCompliantPage";
import AdminFeedbackCheckPage from "./Pages/Admin/AdminFeedbackCheckPage";
import AdminUserAccountPage from "./Pages/Admin/AdminUserAccountPage";
import AdminViewFeedbackPage from "./Pages/Admin/AdminViewFeedbackPage";
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
