import React, { Component } from "react";
import DropDown from "../../components/DropDownSelect/DropDown";
import { RestDataSource } from "../../data/dataSource";
import { DataType, filmType } from "../../data/type";
import CharacterTable from "./CharacterTable";
import * as S from "./styles";
import { filmsType } from "./types";

interface Props {}

export interface State {
  selectedTitle: string;
  selectedUrl: string;
  films: filmsType;
  loading: boolean;
  singleFilmData: filmType;
}

export const MovieCtx =
  React.createContext<{
    setUrlAndTitle: (title: string, url: string) => void;
  } | null>(null);

class Hero extends Component<Props, State> {
  static contextType = MovieCtx;
  private dataSource;
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false,
      selectedTitle: "choose a movie title",
      selectedUrl: "",
      films: [
        {
          title: "",
          url: "",
        },
      ],
      singleFilmData: {} as filmType,
    };
    const filmUrl = `${process.env.REACT_APP_BASE_URL}/films`;
    this.dataSource = new RestDataSource(filmUrl!);
  }

  updateTitle = (title: string, url: string) => {
    this.setState(
      {
        selectedTitle: title,
        selectedUrl: url,
      },
      async () => {
        await this.fetchUrlData();
      }
    );
  };

  fetchUrlData = () => {
    const ds = new RestDataSource(this.state.selectedUrl);

    ds.GetData(({ characters, opening_crawl, title, url }: filmType) => {
      this.setState({
        singleFilmData: {
          characters,
          opening_crawl,
          title,
          url,
        },
      });
    });
  };

  componentDidMount() {
    this.dataSource.GetData((data: DataType) => {
      const films: filmsType = data.results
        .map(({ title, url, release_date }) => ({
          title,
          url,
          release_date,
        }))
        .sort(
          (a, b) => Date.parse(a.release_date!) - Date.parse(b.release_date!)
        );
      this.setState({ films: films });
    });
  }
  render() {
    const { selectedTitle, selectedUrl, films, singleFilmData } = this.state;
    const showMovieInfo =
      selectedTitle === "choose a movie title" ? false : true;
    return (
      <MovieCtx.Provider value={{ setUrlAndTitle: this.updateTitle }}>
        <DropDown text={selectedTitle} data={films} />
        <S.HeroContainer setBackground={showMovieInfo}>
          <CharacterTable
            showMovieInfo={showMovieInfo}
            url={selectedUrl}
            singleFilmData={singleFilmData}
            selectedTitle={selectedTitle}
          />
        </S.HeroContainer>
      </MovieCtx.Provider>
    );
  }
}

export default Hero;
