import { useState, useEffect } from "react";

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => {
      return clearInterval(interval);
    };
  }, [forwards]);

  return counter;
};

export default useCounter;

/*
The function name should always be start with 'use', filename can be anything so to tell React that
it is a custom hook and it should follow the rules of a custom hooks

Why we use custom Hooks -> If we find the duplication of code and that is using react inbuilt hooks
we can switch to custom hooks where we can store the common code with capabilities to use react
inbuilt hooks

The function which is calling it will be sharing the logic of the function means it get like the 
instance of it where we can access the stuff of the functions like we using the counter variable
in the calling function check this part once !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/
