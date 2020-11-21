import { expect } from 'chai';
import Database from '../src/ts/database';
import { Link } from '../src/ts/data'

describe('getAllLinks', function() {

  it('Result should be a array of link', function() {
    let input: Link[] = [
      {
        title:"Test",
        description:"Test",
        url:"https://test.org/",
        isFavorite: true,
        tag:["Test1","Test2"]
      },
    ];
    let database = new Database(input);
    let result: Link[] = database.getAllLinks();
    expect(result).to.be.an('array');
    expect(result).to.deep.equal(input);
  });

  it('Get all favorites', function() {
    let input: Link[] = [
      {
        title:"Test",
        description:"Test",
        url:"https://test.org/",
        isFavorite: true,
        tag:["Test1","Test2"]
      },
      {
        title:"Test",
        description:"Test",
        url:"https://test.org/",
        isFavorite: false,
        tag:["Test1","Test2"]
      },
    ];
    let output: Link[] = [
      {
        title:"Test",
        description:"Test",
        url:"https://test.org/",
        isFavorite: true,
        tag:["Test1","Test2"]
      }
    ];
    let database = new Database(input);
    let result: Link[] = database.getFavorites();
    expect(result).to.deep.equal(output);
  });

  it('Get link with one tag', function() {
    let input: Link[] = [
      {
        title:"Test",
        description:"Test",
        url:"https://test.org/",
        isFavorite: true,
        tag:["Test1","Test2"]
      },
      {
        title:"Test",
        description:"Test",
        url:"https://test.org/",
        isFavorite: false,
        tag:["Test2"]
      },
    ];
    let output: Link[] = [
      {
        title:"Test",
        description:"Test",
        url:"https://test.org/",
        isFavorite: true,
        tag:["Test1","Test2"]
      }
    ];
    let database = new Database(input);
    let result: Link[] = database.getElemWithTags(['Test1']);
    expect(result).to.deep.equal(output);
  });

  it('Get link with two tags', function() {
    let input: Link[] = [
      {
        title:"Test",
        description:"Test",
        url:"https://test.org/",
        isFavorite: true,
        tag:["Test1","Test2"]
      },
      {
        title:"Test",
        description:"Test",
        url:"https://test.org/",
        isFavorite: false,
        tag:["Test2"]
      },
      {
        title:"Test",
        description:"Test",
        url:"https://test.org/",
        isFavorite: false,
        tag:["Test1"]
      },
      {
        title:"Test",
        description:"Test",
        url:"https://test.org/",
        isFavorite: false,
        tag:["Test3"]
      },
    ];
    let output: Link[] = [
      {
        title:"Test",
        description:"Test",
        url:"https://test.org/",
        isFavorite: true,
        tag:["Test1","Test2"]
      },
      {
        title:"Test",
        description:"Test",
        url:"https://test.org/",
        isFavorite: false,
        tag:["Test2"]
      },
      {
        title:"Test",
        description:"Test",
        url:"https://test.org/",
        isFavorite: false,
        tag:["Test1"]
      },
    ];
    let database = new Database(input);
    let result: Link[] = database.getElemWithTags(['Test1','Test2']);
    expect(result).to.deep.equal(output);
  });

});
