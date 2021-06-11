import { Component } from "react";
import Table from "../../components/Table/Table";
import { RestDataSource } from "../../data/dataSource";
import { characterType, filmType } from "../../data/type";

interface Props {
  url: string;
  singleFilmData: Partial<filmType>;
}
interface State {
  singleFilmData: Partial<filmType>;
  characterDataList: Array<characterType>;
}

class CharacterTable extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      singleFilmData: {
        opening_crawl: "",
        characters: [],
      },
      characterDataList: [],
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
          this.setState({ characterDataList: characterDataList });
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
      this.getCharacterData(urls);
    }
  }

  render() {
    return (
      <>
        <h1>Character Table</h1>
        <Table characterData={this.state.characterDataList} />
      </>
    );
  }
}

export default CharacterTable;
