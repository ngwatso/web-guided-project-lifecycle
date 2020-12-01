import React, { useState, useEffect } from "react";

const AppFunc = () => {
  const [name, setName] = useState("Warren");
  console.log("AppFunc: State setup.");

  const handleClick = () => {
    setName("Allison");
  };
  
  useEffect(()=>{
    console.log("AppFunc: Component has mounted.");
  }, []);

  useEffect(()=>{
    console.log("AppFunc: Component has updated.");
  });

  console.log("AppFunc: Component has rendered.");
  return (
    <div>
      <h1>Hello {name}!</h1>
      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;
