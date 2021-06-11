import Axios from "axios";

type serverData = {};

export class RestDataSource {
  private BASE_URL;
  constructor(base_url: string) {
    this.BASE_URL = base_url;
  }
  GetData(callback: (data: any) => void, errcbk?: (err: any) => void) {
    this.SendRequest("get", this.BASE_URL, callback, errcbk);
  }

  async SendRequest(
    method: "get",
    url: string,
    callback: (data: any) => void,
    errcbk?: (err: any) => void
  ) {
    await Axios.request<serverData>({
      method: method,
      url: url,
      timeout: 100000,
    })
      .then(({ data }) => callback(data))
      .catch((ex) => {
        const err =
          ex.code === "ECONNABORTED"
            ? "A timeout has occurred"
            : ex.response?.status === 404
            ? "Resource not found"
            : "An unexpected error has occurred";
        if (errcbk) {
          errcbk(err);
        } else {
          console.log(err);
        }
      });
  }

  static async GetMany(urls: Array<string>, callback: (data: any) => void) {
    let requestArr: any[] = [];
    if (urls) {
      urls.forEach((url) => {
        requestArr.push(Axios.get(url));
      });
      Axios.all(requestArr).then(
        Axios.spread((...response) => {
          let data = response.map((obj) => obj.data);
          callback(data);
        })
      );
    }
  }
}
