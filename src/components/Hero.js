import React from "react";

import {
  HeroBox,
  HeroContainer,
  DownButton,
} from "./HeroStyles";
  
const Hero = () => {
  return (
    <HeroBox>
      <HeroContainer>
        <h1 style={{ color: "#485666",
        textTransform:"capitalize",
        fontFamily:"  font-family: 'Noto Serif JP', serif;",
        fontSize: "62px",
        textAlign: "center",
        padding: "6px" }}><span style={{ color: "#B69A00" }}>Beautiful</span> furniture for every room.<br></br>
         Explore our collection.</h1>
         <DownButton><i className="fa-solid fa-arrow-down fa-fade fa-2xl"></i></DownButton>

      </HeroContainer>
    </HeroBox>
  );
};
export default Hero;
