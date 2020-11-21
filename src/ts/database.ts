import { Link } from "./data";

export default class Database {
  data: Link[];

  constructor(data: Link[]) {
    this.data = data;
  }

  getAllLinks(): Link[] {
    return this.data;
  }

  getFavorites(): Link[] {
    return this.data.filter((elem: Link) => elem.isFavorite);
  }

  getElemWithTags(tag: string[]): Link[]{
    let resp: Link[] = []
    resp = this.data.filter((elem: Link) => {
      return tag.some(t => elem.tag.includes(t));
    });
    return resp;
  }

}
