import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={"container-fluid"}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
