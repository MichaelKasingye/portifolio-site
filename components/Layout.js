import Nav from "./Nav";
import Meta from "./Meta";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
