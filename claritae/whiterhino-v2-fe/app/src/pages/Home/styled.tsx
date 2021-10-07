import styled from "styled-components";

export const HomeHeaderPanel = styled.div``;

export const HomeHeaderTopPanel = styled.div`
  height: 360px;
  margin: 0 -120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 750px) {
    margin: 0 -18px;
  }

  .home__top__title {
    color: #ffffff;
    font-size: 36px;
    padding-top: 49px;

    @media (max-width: 750px) {
      font-size: 24px;
      padding-top: 45px;
    }
  }

  .home__top__search {
    height: 38px;
    width: 600px;
    padding-top: 25px;

    @media (max-width: 750px) {
      width: calc(100% - 36px);
      padding-top: 21px;
    }
  }
`;
