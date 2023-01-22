import Nav from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
// https://www.youtube.com/watch?v=mTz0GXj8NN0 ---> 46:49
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={`${styles.main} ${inter.className}`}>
          <Header />
          {children}
          </main>
      </div>
    </>
  );
};

export default Layout;
