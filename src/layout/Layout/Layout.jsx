import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <>
      <Header />

      <main className="layout">{children}</main>
    </>
  );
}

export default Layout;
