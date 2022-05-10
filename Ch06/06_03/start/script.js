const trackcovid = () => {
  fetch("https://api.covidtracking.com/v1/us/current.json").then((res) =>
    res.json().then(console.log)
  );
};

trackcovid().then((data) => console.log(data));
