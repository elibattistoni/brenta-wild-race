import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>ZERO</li>
          <li>UNO</li>
          <li>DUE</li>
          <li>TRE</li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
