import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />

      <style jsx>{`
        main {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: calc(100vh - 108px);
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
