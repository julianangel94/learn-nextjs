export default function Footer() {
  return (
    <>
      <footer>
        <a name='about'>Developed by Julian</a>
      </footer>

      <style jsx>{`
        footer {
          background-color: midnightblue;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        a {
          color: #f2f2f2;
          padding: 1rem;
          text-decoration: none;
          font-size: 17px;
        }
      `}</style>
    </>
  );
}
