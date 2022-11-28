import "animate.css";

export const ShowInfo = ({ datos }) => {
  const { timezone } = datos;

  return (
    <>
      <div className="mt-5 animate__animated animate__backInDown flex sm:flex-row flex-col">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-5">
          <p className="mb-3">
            Temperatura:
            <span className="font-bold">
              {datos.current_weather.temperature} °C
            </span>
          </p>
          <img
            src="../../flower.gif"
            alt="flower-gif"
            className="mx-auto"
          />
        </div>

        <div className="mt-10 max-w-sm rounded overflow-hidden shadow-lg mx-5">
          <p className="mb-3">
            Zona: <span className="font-bold">{timezone}</span>
          </p>
          <img
            src="../../location.gif"
            alt="location-gif"
            className="mx-auto"
          />
        </div>

        <div className="mt-10 max-w-sm rounded overflow-hidden shadow-lg mx-5">
          <p className="mb-3 mx-5">
            Velocidad del Viento:
            <span className="font-bold">
              {datos.current_weather.windspeed} KM/H
            </span>
          </p>
          <img
            src="../../wind.gif"
            alt="location-gif"
            className="mx-auto"
          />
        </div>
      </div>
    </>
  );
};
