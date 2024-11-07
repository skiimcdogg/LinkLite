import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import useToggleSidebar from "../../hooks/useToggleSidebar";
import "./Layout.css";


function Layout({ children }: {children: React.ReactNode}) {
    const { isSidebarOpen, toggleSidebar } = useToggleSidebar();
    const location = useLocation();

    const showHeaderAndSidebar = location.pathname !== '/verify-email';

  return (
    <div className="App">
        { showHeaderAndSidebar && (
          <>
          <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          {/* Barre grise collée sous le header */}
          <div className="layout__grey-bar"></div>
      </>
        )}
        <div className="layout__container">
          { showHeaderAndSidebar && <Sidebar isSidebarOpen={isSidebarOpen} /> }
          <div
          className={`layout__container--is-expanded ${isSidebarOpen ? 'layout__container--expanded' : 'layout__container--hidden'}`}
          >
            {children}
          </div>
        </div>
      </div>
  );
};

export default Layout;


