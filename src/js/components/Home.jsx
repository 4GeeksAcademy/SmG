import React, {useState, useEffect} from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [activeLight, setActiveLight] = useState("red");
useEffect(() => {
const interval = setInterval(() => {
  setActiveLight((prevLight) => {
    if (prevLight === "red")return  "yellow"
    if (prevLight === "yellow")return  "green"
   return "red";
  })
}, 2000);
return () => clearInterval(interval);

}, []);




	return (
		<div className="d-flex flex-column align-items-center mt-5">
      <div className="traffic-light bg-dark p-3 rounded d-flex flex-column">
        <div
          className={`light bg-danger rounded-circle ${activeLight === "red" ? "shadow-lg" : "opacity-50"}`}
          onClick={() => setActiveLight("red")}
        ></div>
        <div
          className={`light bg-warning rounded-circle my-2 ${activeLight === "yellow" ? "shadow-lg" : "opacity-50"}`}
          onClick={() => setActiveLight("yellow")}
        ></div>
        <div
          className={`light bg-success rounded-circle ${activeLight === "green" ? "shadow-lg" : "opacity-50"}`}
          onClick={() => setActiveLight("green")}
        ></div>
      </div>
    </div>
	);
  };

export default Home;