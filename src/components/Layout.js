import { Outlet } from "react-router-dom";
import AdminNavBar from "./admin/adminNav/AdminNavBar";
import AdminSidebar from "./admin/adminNav/AdminSideBar";

const Layout = () => {
  return (
    <main className="main-layout">
      <AdminNavBar />
      <div className="layout-bottom-content">
        <AdminSidebar />
        <div className="content-section">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
