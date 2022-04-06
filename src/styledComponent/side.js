import styled from "styled-components";
import bgImg from "../assets/side-login-background.jpg";

const Side = styled.div`
  position: relative;
  width: 500px;
  height: 1000px;
  left: 0px;
  top: 0px;
  background-image: linear-gradient(
      180deg,
      rgba(60, 179, 113, 0.3),
      rgba(60, 179, 113, 0.3)
    ),
    url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .messenger {
    position: absolute;
    width: 269px;
    height: 186px;
    left: 12%;
    top: 20%;
    > img {
      width: 67px;
      height: 67px;
      margin-left: 40%;
      border-radius: 50%;
    }
    > p {
      height: 80px;
      left: 0%;
      right: 0%;
      top: calc(50% - 80px / 2 + 53px);
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 26px;
      line-height: 40px;
      /* or 154% */

      text-align: center;

      color: #004346;
    }
  }

  @media (max-width: 1420px) {
    display: none;
  }
`;
export default Side;
