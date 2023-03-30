import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 70px 60px 30px 60px;;
  background: white;
  position: absolute;
  top: 1470px;
  bottom: 0;
  width: 100%;
  height: 430px;
  display: relative;
  
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
  @media screen and (min-width: 1400px) {
    top: 1490px;
  }
  @media screen and (min-width: 1600px) {
    top: 1760px;
  }
`;

export const SubscribeText = styled.h1`
  color: black;
  width: 600px;
  text-align: center; 
  margin-top: -50px;
  margin-left: 400px;
  font-weight: 500;
  font-family: 'Noto Serif JP', serif;

  @media screen and (min-width: 1400px) {
    margin-left: 400px;
  }
  @media screen and (min-width: 1600px) {
      margin-left: 587px;
  }
 
`

export const Subscribe = styled.input`
    width: 620px;
    height: 30px;
    border: 0;
    background-color: #E7E7E7;
    font-size: 15px;
    display: absolute;
    padding: 4px;
    margin-top: 35px;
    margin-bottom: 35px;
    margin-left: 15px;


    @media screen and (min-width: 1400px) {
    }
    @media screen and (min-width: 1600px) {
    }
`

export const SubscribeBtn = styled.button`
  height: 39px;
  width: 90px;
  padding: 4px;
  background-color: black;
  color: white;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const CurrencyList = styled.select`
    background-color: #E7E7E7;
    width: 60px;
    padding: 4px;
    height: 40px;
    border-radius: 6px;
    border: 0px;
    `
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 0px;
  margin-right: 90px;
`;
   
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  }
`;
   
export const FooterLink = styled.a`
  color: black;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #B9B9B9;
  margin-bottom: 40px;
  font-weight: bold;
`;
