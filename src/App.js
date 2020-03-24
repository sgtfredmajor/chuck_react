import React from "react";
import Header from "./components/title";
import Quote from "./components/quote";
import Quote_button from "./components/button";
import Category from "./components/input_form"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Chuck 2020</h1>
      
      <Header />

      <Quote />

      <Quote_button />

      <Category />

    </div>
  );
}
