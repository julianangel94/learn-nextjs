export default function NavBar(props) {
  return (
    <>
      <nav>
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </nav>

      <style jsx>{`
        nav {
          background-color: #0088cc;
          height: 3.5rem;
        }

        nav a {
          float: left;
          color: #f2f2f2;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
        }

        a {
          height: 100%;
        }

        nav a:hover {
          background-color: #ddd;
          color: black;
        }

        nav a.active {
          background-color: #04aa6d;
          color: white;
        }
      `}</style>
    </>
  );
}
