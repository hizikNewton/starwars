import styled from "styled-components";

export const CrawlContainer = styled.div`
  position: relative;
  border: 10px solid green;
  max-width: 50%;
  max-height: 100%;
  @media (max-width: 600px) {
    order: 1;
    max-width: 100vw;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(180deg, #504f4f 20%, rgba(20, 20, 20, 0) 50%);
  }
`;

export const Crawl = styled.div`
  max-height: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 36px;
  overflow: hidden;
  opacity: 1;
  perspective: 450px;
  .title {
    text-transform: uppercase;
  }

  p {
    margin: 50% 0 0 0;
    color: #ffc909;
    font-size: 0.8em;
    line-height: 1.5em;
    font-weight: bold;
    text-align: justify;
    position: relative;
    animation: scroll 30s linear forwards;

    animation-iteration-count: infinite;
    @keyframes scroll {
      from {
        top: 0px;
        transform: translateZ(0) rotateX(60deg);
      }
      to {
        top: -800px;
        transform: translateZ(-1000px) rotateX(21deg);
      }
    }
  }
`;
