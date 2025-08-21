"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  const getData = async () => {
    await fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => console.log("Error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  if (data.length < 1) {
    return <div>loading ...</div>;
  }

  return (
    <div>
      <div className="header">
        <h1>All countries</h1>
        <input className="input" placeholder="shearch here" />
      </div>

      <div class="container">
        {data.map((country) => {
          return (
            <div className="countrie_card">
              <h2>
                {country.name.common} {country.flag}
              </h2>

              <p>capital: {country.capital[0]}</p>
              <p>population: {country.population} </p>
              <p>area: {country.area}km²</p>

              <img src={country.flags.png}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
