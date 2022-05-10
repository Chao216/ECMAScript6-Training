const delay = (seconds) =>
  new Promise((resolves) =>
    // eslint-disable-next-line no-promise-executor-return
    setTimeout(resolves, seconds * 1000)
  );

const countToFive = async () => {
  console.log("zero seconds");
  await delay(1);
  console.log("one second");
  await delay(2);
  console.log("two seconds");
  await delay(3);
  console.log("three seconds");
};

countToFive();
