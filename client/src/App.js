import React, { useEffect ,useRef  } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Login, Logout } from './Pages';
import EmployeeRegistration from './Pages/EmployeeRegistration';
import Layout from './Components/Layout';
import AllEmployees from './Pages/AllEmployees';
import EmployeeDetail from './Pages/EmployeeDetail';
import UpdateEmployee from './Pages/UpdateEmployee';
import Break from './Pages/Break';
import EmployeeAttendance from './Pages/MonthlyAttendeOfEmployee';
import AllTodayLeaves from './Pages/AllTodayLeaves';
import AllTodayPresent from './Pages/AllTodayPresent';
import { logLocalStorageAndExpiry } from './utils/localStorageWithExpiry';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      logLocalStorageAndExpiry(); // Call the function only once
      isFirstRender.current = false; // Set to false after first call
    }
  }, []);
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/employee-registration" element={<EmployeeRegistration />} />
                <Route path="/all-employees" element={<AllEmployees />} />
                <Route path="/update-employee/:id" element={<UpdateEmployee />} />
                <Route path="/employee-detail/:id" element={<EmployeeDetail />} />
                <Route path="/break" element={<Break />} />
                <Route path="/attendance/employee/:id" element={<EmployeeAttendance />} />
                <Route path="/all-today-leaves" element={<AllTodayLeaves />} />
                <Route path="/all-today-present" element={<AllTodayPresent />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
