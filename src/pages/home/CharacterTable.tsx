import { Component } from "react";
import Table from "../../components/Table/Table";
import { RestDataSource } from "../../data/dataSource";
import { characterType, filmType } from "../../data/type";
import { OpeningCrawl } from "../../components/OpeningCrawl/OpeningCrawl";
import * as S from "./styles";

interface Props {
  url: string;
  singleFilmData: Partial<filmType>;
}
interface State {
  singleFilmData: Partial<filmType>;
  characterDataList: Array<characterType>;
  loading: boolean;
}

class CharacterTable extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      singleFilmData: {
        opening_crawl: "",
        characters: [],
        title: "",
      },
      characterDataList: [],
      loading: false,
    };
  }

  getCharacterData = async (charactersUrl: Array<string> = []) => {
    await RestDataSource.GetMany(
      charactersUrl,
      (characterData: Array<characterType>) => {
        if (characterData) {
          let characterDataList = characterData.map(
            ({ name, height, gender }) => ({
              name,
              height,
              gender,
            })
          );
          this.setState({
            characterDataList: characterDataList,
            loading: false,
          });
        }
      }
    );
  };

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.singleFilmData.characters !==
      this.props.singleFilmData.characters
    ) {
      const urls = this.props.singleFilmData.characters;
      const { opening_crawl, title } = this.props.singleFilmData;
      this.getCharacterData(urls);
      this.setState({
        loading: true,
        singleFilmData: { opening_crawl: opening_crawl, title: title },
      });
    }
  }

  render() {
    const {
      characterDataList,
      loading,
      singleFilmData: { opening_crawl, title },
    } = this.state;
    return (
      <S.CharacterTable>
        <Table characterData={characterDataList} loading={loading} />
        <OpeningCrawl opening_crawl={opening_crawl!} title={title!} />
      </S.CharacterTable>
    );
  }
}

export default CharacterTable;
