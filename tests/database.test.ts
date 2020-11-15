import { expect } from 'chai';
import Database from '../src/ts/database';
import { Link } from '../src/ts/data'

describe('getAllLinks', function() {
  it('Result should be a array of link', function() {
    let links: Link[] = [
      {
        title:"Test",
        description:"Test",
        url:"https://test.org/",
        tag:["Test1","Test2"]
      },
    ]
    let database = new Database(links);
    let result: Link[] = database.getAllLinks();
    expect(result).to.be.an('array');
    expect(result).to.deep.equal(links);
  });


});
