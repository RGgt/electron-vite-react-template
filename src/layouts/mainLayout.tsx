import './mainLayout.css';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
export interface props {
  children?: React.ReactNode;
}
function MainLayout({ children }: props) {
  console.log('rendering main layout');
  return (
    <>
      <div id="sidebar">
        <h1>Electron-Vite-React Template</h1>
        <nav>
          <strong>Links</strong>
          <ul>
            <li>
              <Link to={`/clicksCounter`}>Clicks Counter</Link>
            </li>
            <li>
              <Link to={`/demonstrators`}>Basic Demonstrators</Link>
            </li>
            <li>
              <Link to={`/imageViewer`}>Basic Image Viewer</Link>
            </li>
            <li>
              <Link to={`/imageSecureViewer`}>Secure Image Viewer</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">{children ?? <Outlet />}</div>
    </>
  );
}

export { MainLayout };
