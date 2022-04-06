import styled from "styled-components";

const Bird = styled.div`
  > img {
    width: 500px;
    height: 700px;
    @media screen and (max-width: 1600px) {
      width: 400px;
      height: 600px;
      margin-left: 5rem;
    }
  }

  @media screen and (max-width: 1420px) {
    display: none;
  }
`;
export default Bird;
