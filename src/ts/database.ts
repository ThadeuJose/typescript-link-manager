import { Link, data as preDefinedData } from "./data";

export default class Database {
  data: Link[];

  constructor(data?: Link[]) {
    this.data = data || preDefinedData;
  }

  getAllLinks(): Link[] {
      return this.data;
  }; 

}
