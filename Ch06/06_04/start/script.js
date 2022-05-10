const lagging = (sec) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(resolve, sec * 1000));

const stopwatch = async () => {
  await lagging(2);
  console.log("did you miss me?");
  await lagging(3);
  console.log("Mr Serlock Holmes");
  await lagging(4);
  console.log("I am Moriarty");
};

stopwatch();
