import { useState } from "react";

export default function NavBar() {
  const [active, setActive] = useState("home");

  const handleClick = (e) => {
    setActive(e.target.name);
  };

  return (
    <>
      <nav>
        <a
          className={active === "home" ? "active" : ""}
          name='home'
          href='#home'
          onClick={handleClick}
        >
          Home
        </a>
        <a
          className={active === "news" ? "active" : ""}
          name='news'
          href='#news'
          onClick={handleClick}
        >
          News
        </a>
        <a
          className={active === "contact" ? "active" : ""}
          name='contact'
          href='#contact'
          onClick={handleClick}
        >
          Contact
        </a>
        <a
          className={active === "about" ? "active" : ""}
          href='#about'
          name='about'
          onClick={handleClick}
        >
          About
        </a>
      </nav>

      <style jsx>{`
        nav {
          background-color: #0088cc;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        a {
          color: #f2f2f2;
          padding: 1rem;
          text-decoration: none;
          font-size: 17px;
        }

        a:hover {
          background-color: #ddd;
          color: black;
        }

        a.active {
          background-color: red;
          color: white;
        }
      `}</style>
    </>
  );
}
