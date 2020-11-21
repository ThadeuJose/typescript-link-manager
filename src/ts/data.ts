export interface Link {
  title: string,
  description: string,
  url: string,
  isFavorite: boolean,
  tag: string[]
}

export let data: Link[] = [
  {
    "title":"FreeCodeCamp",
    "description":"Test",
    "url":"https://medium.freecodecamp.org/",
    "isFavorite":true,
    "tag":["Technology","Web"]
  },
  {
    "title":"Tableless",
    "description":"",
    "url":"https://tableless.com.br/",
    "isFavorite":false,
    "tag":["Technology","Web"]
  },
];

export let tag: string[] = ["Technology","Web"];
