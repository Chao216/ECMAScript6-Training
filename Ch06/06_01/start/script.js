const yanwu = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

yanwu(13).then(() => console.log("13 secs 延误了"));

const delay = (seconds) => {
  new Promise((resolve, reject) => {
    if (seconds >= 30) {
      reject(new Error("please insert less than 30 seconds"));
    }

    setTimeout(resolve, seconds * 1000);
  });
};

delay(20).then(() => console.log("delayed response"));

const beat = (value1) => {
  new Promise((right, wrong) => {
    if (value1 > 10) {
      wrong(new Error("the number your put is big!!!"));
    } else {
      right(console.log("the time you select is ", value1));
    }
  });
};

beat(110);

console.log("hello");
