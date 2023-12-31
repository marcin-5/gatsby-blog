import styled from "styled-components"
import { colors } from "styles/GlobalStyles"

export const BannerWrapper = styled.div`
  margin: 20px 0 0 0;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin-left: -200px;
  height: 100%;

  h2 {
    color: ${colors.myColor2};
    font-size: 1.5rem;
    text-align: center;
    margin: 20px;

    @media screen and (min-width: 768) {
      font-size: 2.8rem;
    }
  }

  button {
    font-family: "Nunito Black";
    font-size: 1rem;
    color: ${colors.myColor3};
    text-transform: uppercase;
    background: transparent;
    border: 0;
    border-bottom: 4px solid ${colors.myColor2};
    padding: 5px 0;
    transition: all 0.3s ease;
    :hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`
