import { useState, useEffect } from "react";

function Counter({ setCount }) {
  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return null;
}

export { Counter };
