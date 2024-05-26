// function inside function example
function app() {
    const muFunc = () => {
      console.log("hello!");
    };
    const addNum = (num1, num2) => {
      return num1 + num2;
    };
    const mulNum = (num1, num2) => {
      return num1 * num2;
    };
    muFunc();
    console.log(addNum(2, 3));
    console.log(mulNum(2, 3));
  }
  app();
  