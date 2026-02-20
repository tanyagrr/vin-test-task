import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <>
      <Header />

      <div className="layout">{children}</div>
    </>
  );
}

export default Layout;
