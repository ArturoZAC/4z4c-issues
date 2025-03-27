export const sleep = (miliseconds: number) => {
  return new Promise((resolve, reject) => {
    if (miliseconds < 0) {
      reject("Miliseconds must be greather than zero.");
      return;
    }

    setTimeout(() => {
      resolve(true);
    }, miliseconds);
  });
};
