import styled from 'styled-components';
   
export const HeroBox = styled.div`
  background-image: url("https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 1px -120px;
  position: relative;
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 1590px;
  height: 910px;
   
  @media (max-width: 1000px) {
    height: 1000px;
  }
  @media screen and (min-width: 1600px) {
    background-size: cover;
    height: 970px;
    left: 160px;
    background-position: bottom;
    height: 920px;


}
`;
   
export const HeroContainer = styled.div`
    position: absolute;
    height: 400px;
    width: 700px;
    top: 200px;
    left: 700px;
    padding: 5px;
    font-size: 35px;
    font-weight: 800;
    border-radius: 2%;
`

export const DownButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 5px solid #819CB7;
  position: absolute;
  left: 640px;
  cursor: pointer;
  top: 460px;
   
  @media (max-width: 1000px) {
  }

  @media screen and (min-width: 1600px) {


}
`
