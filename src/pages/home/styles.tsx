import { styled } from "../../globalStyles";
import StarWar from "../../assets/img/Star_Wars_Logo.svg";

export const HeroContainer = styled.div<{ setBackground: boolean }>`
  background-image: url(${(props) => (props.setBackground ? "" : StarWar)});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 80vh;
  width: 100vw;
  margin: auto;
  display: flex;
  border: 10px solid white;
`;

export const CharacterTable = styled.div`
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    flex-direction: row;
  }
`;
