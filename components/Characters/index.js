import { useEffect, useState } from "react";

export default function Characters() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setInfo(data));
  }, []);

  return <>{info.info && <label>total characters {info.info.count}</label>}</>;
}
