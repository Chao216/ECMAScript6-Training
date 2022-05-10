const a = 8;

const bigorsmall = new Promise((resolve, reject) => {
  if (a < 4) {
    resolve(console.log("it is small, you win !"));
  } else {
    reject(console.log("no, it is big, you lose idiot"));
  }
});

const func1 = () => {
  bigorsmall
    .then((ok) => console.log(ok))
    .catch((err) => {
      console.error(err);
    });
};

func1();
