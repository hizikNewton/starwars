import React from "react";
import * as S from "./styles";

interface Props {
  opening_crawl: string;
  title: string;
}

export const OpeningCrawl = ({ opening_crawl }: Props) => {
  return (
    <S.CrawlContainer>
      <S.Crawl id="crawl">
        <p className={"scroll-text"}>{opening_crawl}</p>
      </S.Crawl>
    </S.CrawlContainer>
  );
};
