import { useEffect, useState } from "react";
import styled from "styled-components";

const FooterContainer = ({ className }) => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=0f69d1fdccc992232293c878d090a877"
    )
      .then((res) => res.json())
      .then(({ name, main, weather }) => {
        setCity(name);
        setTemperature(Math.round(main.temp));
        setWeather(weather[0].description);
      });
  }, []);

  return (
    <div className={className}>
      <div>
        <div>Блог веб-разработчика</div>
        <div>web@devolaper.com</div>
      </div>
      <div>

        <p>Город: {city}, {new Date().toLocaleString('ru', {day: 'numeric', month: 'long'})}</p>
        <p>Температура: {temperature}°C</p>
        <p>Погода: {weather}</p>
      </div>
    </div>
  );
};

export const Footer = styled(FooterContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0, 0, 0) 0px 3px 11px;
  font-weight: bold;
`;
