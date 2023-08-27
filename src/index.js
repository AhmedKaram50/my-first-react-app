import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Greeting from "./Greeting";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const data = [
  "Ahmed Is Here 11 React",
  "Ahmed Is Here 12 React",
  "Ahmed Is Here 13 React",
  "Ahmed Is Here 14 React",
  "Ahmed Is Here 15 React",
  "Ahmed Is Here 16 React",
];

const titles = data.map((title) => {
  return <Greeting title={title} pText="This is ss 33" key={title}></Greeting>;
});

const buttonClicked = (e) => {
  console.log(e)
}

root.render(
  <div>
    <button onClick={buttonClicked}>
      Click
    </button>
    <Greeting title="Ahmed Is Here Learning React" pText="This is Paragraph 33">
      <h1>Children Like Slots In Vue.js</h1>
      <h1>Children Like Slots In Vue.js</h1>
    </Greeting>
    {titles}
    {data.map((title) => {
      return <Greeting title={title} pText="This is ss 33" key={title}></Greeting>;
    })}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
