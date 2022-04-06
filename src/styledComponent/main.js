import styled from "styled-components";

const Main = styled.div`
  width: 599px;
  height: 900px;
  top: 0px;
  .account {
    position: relative;
    left: 40%;
    width: 351px;
    height: 54px;
    top: 30px;
    font-family: Open Sans;
    font-style: normal;
  }
  .question {
    position: absolute;
    height: 19px;
    left: 0%;
    right: 56.98%;
    top: 3%;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: #01befe;
  }
  .form-btn {
    position: absolute;
    width: 170px;
    height: 54px;
    right: 0%;
    background: #ffffff;
    box-shadow: 0px 2px 12px rgba(74, 106, 149, 0.2);
    font-weight: 600;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    text-align: center;
    color: #3db2ff;
    &:hover {
      border: 2px solid #0077b6;
    }
  }
  .inputForm {
    position: relative;
    width: 380px;
    height: 358px;
    top: 10%;
    left: 15%;
    font-family: Open Sans;
    font-style: normal;
  }
  .form-greeting {
    height: 40px;
    left: 0%;
    right: 50.26%;
    /* top: calc(50% - 40px / 2 - 159px); */
    font-weight: 600;
    font-size: 26px;
    line-height: 40px;
    color: #000000;
  }
  .formDiv {
    position: absolute;
    width: 380px;
    top: 20%;
    > input {
      display: flex;
      flex-direction: column;
      color: #333;
      padding: 0.5rem;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      border-radius: 0.2rem;
      background-color: rgb(255, 255, 255);
      border: 1px solid #01befe;
      width: 100%;
      transition: all 0.3s;
      outline: none;
    }
  }
  .loginButton {
    bottom: 0;
    width: 130px;
    height: 50px;
    font-family: Rosario;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    background: #01befe;
    border-radius: 3px;
    color: #ffffff;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
    &:hover {
      border: 2px solid #fff;
    }
  }
`;

export default Main;
