import "animate.css";
import { useEffect, useState } from "react";

import useForm from "../hooks/useForm";
import { ShowInfo } from "./ShowInfo";

export const WeatherForm = () => {
  const [datos, setDatos] = useState("");
  const { onInputChange, latitud, longitud } = useForm({
    latitud: "",
    longitud: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&timezone=auto&current_weather=true`;

    const resp = await fetch(url);
    const data = await resp.json();

    setDatos(data);
  };

  return (
    <form onSubmit={onSubmit} className="animate__animated animate__backInDown text-center">
      <input
        type="text"
        name="latitud"
        value={latitud}
        placeholder="Latitud"
        onChange={onInputChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
      />
      <input
        type="text"
        name="longitud"
        value={longitud}
        placeholder="Longitud"
        onChange={onInputChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
      {datos === "" ? "" : <ShowInfo datos={datos} />}
    </form>
  );
};
