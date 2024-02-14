import styled from 'styled-components'

export const DivContainer = styled.div`
  background-color: #24263c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export const PasswordContainer = styled.div`
  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 20px;

  @media screen and (min-width: 576px) {
    padding: 30px;
    height: 45vh;
    width: 55vw;
  }
`

export const HeadingEle = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
  margin-bottom: 0px;
  @media screen and (min-width: 576px) {
    font-size: 35px;
  }
`
export const ParaEle = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 9px;
  margin: 10px @media screen and (min-width: 576px) {
    font-size: 12px;
  }
`
export const InputEle = styled.input`
  background-color: #edeeff;
  width: 250px;
  height: 40px;
  margin: 15px;

  @media screen and (min-width: 576px) {
    padding: 10px;
    height: 20%;
    width: 80%;
  }
`

export const ErrorPara = styled.p`
  color: #ef4444;
  font-size: 10px;
  font-family: 'Roboto';
  margin: 0px;
`
