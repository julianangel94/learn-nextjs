import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Result from "../components/Result/index";
import Link from "next/link";

export default function Home() {
  const [values, setValue] = useState({
    num1: 0,
    num2: 0,
    result: 0,
    operation: "",
  });

  const handleClick = (e) => {
    if (values.operation !== "") {
      if (values.operation === "sum") {
        setValue({ ...values, result: values.num1 + values.num2 });
      } else if (values.operation === "rest") {
        setValue({ ...values, result: values.num1 - values.num2 });
      } else if (values.operation === "div") {
        setValue({ ...values, result: values.num1 / values.num2 });
      } else if (values.operation === "mult") {
        setValue({ ...values, result: values.num1 * values.num2 });
      }
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    if (name === "select") {
      setValue({ ...values, operation: value });
    } else if (name === "num1") {
      setValue({ ...values, num1: Number(value) });
    } else if (name === "num2") {
      setValue({ ...values, num2: Number(value) });
    }
  };

  return (
    <>
      <h1 className="title">This is a form to do mathematical operations</h1>
      <div>
        <select className="form" name="select" onChange={handleChange}>
          <option value="">Select operation</option>
          <option value="sum">Sum</option>
          <option value="rest">Rest</option>
          <option value="div">divide</option>
          <option value="mult">multiplication</option>
        </select>
        <input
          type="text"
          name="num1"
          value={values.num1}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="num2"
          value={values.num2}
          onChange={handleChange}
        ></input>
        <button onClick={handleClick}>Do operation</button>
      </div>

      <p>
        The result between operation {values.num1} and {values.num2}
      </p>
      <Result result={values.result}></Result>

      <Link href="/characters">
        <a>Characters of Rick and Morty</a>
      </Link>

      <style jsx>{`
        .title {
          text-align: center;
        }
        input {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
