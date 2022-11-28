import "animate.css";

import { WeatherForm } from "./components/WeatherForm";

export const WeatherApp = () => {
  return (
    <>
      <div className="flex sm:flex-row  flex-col justify-center text-center">
        <div className="text-3xl font-bold mt-7 mx-auto animate__animated animate__backInDown">
          Climas del Mundo
          <img
            src="../public/cloud.gif"
            alt="sun"
            className="animate__animated animate__backInDown w-28 mx-auto"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <WeatherForm />
      </div>
    </>
  );
};
