const api = "https://api.aoikujira.com/tenki/week.php?fmt=json&city=319";
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const today = new Date();
const month = today.getMonth() + 1;
title.innerHTML = `東京の天気予報(${month}月)`
const getData = async () => {
  const data = await fetch(api);
  return (result = await data.json());
};
const showResult = async () => {
  let htmlText = "";
  const weatherInfo = await getData();
  const tokyoWeather = weatherInfo[319];
  console.log(tokyoWeather);
  for (let i = 0; i < tokyoWeather.length; i++) {
    htmlText += `
    <h2>${tokyoWeather[i].date}</h2>
    <ul>
      <li>${tokyoWeather[i].forecast}</li>
      <li>最低気温：${tokyoWeather[i].mintemp}℃</li>
      <li>最高気温：${tokyoWeather[i].maxtemp}℃</li>
      <li>降水確率：${tokyoWeather[i].pop}%</li>
    </ul>
    `;
  }
  container.innerHTML = htmlText;
};
showResult();
