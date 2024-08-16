import React, { useState } from "react";
import animagif from "../assets/animation.gif"
import { Button } from "antd";

function App() {
  const [yesSize, setYesSize] = useState(100); // Initial size of Yes button
  const [showGif, setShowGif] = useState(false);
  const [showNoButton, setShowNoButton] = useState(true);
  
  const questions = [
    "",
    "ahhaaa, nadikathaa",
    "poi poiii, nadikatha",
    "romba kochikatha bby,",
    "ohooooooo, avlo kovamaaaaa",
    "kovam nalathuku ila bbyma",
    "pathukoooooo","pathukoooooooooo","ketutea irukeeeennnnnnn","aprom option thara maten","apdiyaaaaa","sariii sariiii!!","ithuku mela panatha","venaaaaaaa sona kelu bby, lol","apom poh, ini unku option kadaiyathu😂😂😂😂"

  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNoClick = () => {
    setYesSize(yesSize + 20); // Increase Yes button size by 20px
    setShowGif(false); // Hide GIF if visible
  };

  const handleYesClick = () => {
    setShowGif(true); 
    setCurrentQuestionIndex(null)
    setShowNoButton(false);
  };

 

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      handleNoClick()
    }
  };

  return (

    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div>
    <span> kochikitiya????? </span>
  </div>
      <Button
        onClick={handleYesClick}
        style={{
          width: `${yesSize}px`,
          height: `${yesSize}px`,
          fontSize: "16px",
          marginRight: "20px",
        }}
      >
        ama
      </Button>
      <div>
      <p>{questions[currentQuestionIndex]}</p>
      {showNoButton  && currentQuestionIndex < questions.length - 1 && (
        <Button style={{ fontSize: "16px", height: "50px" }} onClick={handleNextQuestion}>ila</Button>
      
      )}
    </div>
     
      {showGif && (
        <div style={{ marginTop: "20px" }}>
          <span> SARI KOCHIKATHA , UMMMUUKUCCCHHUUUUUUU💋 </span>
          <img
            src={animagif}
            alt="GIF"
            width="300"
          />
        </div>
      )}
    </div>
  );
};

export default App;
