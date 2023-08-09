import { Pets } from "./components/Pets";
import React from "react";
import "./index.css";

const App: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl text-center font-bold text-green-400 bg-slate-600">
          Pets
        </h1>
        <Pets />
      </div>
    </>
  );
};

export default App;
