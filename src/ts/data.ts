export interface Link {
  title: string,
  description: string,
  url: string,
  tag?: string[]
}

export let data: Link[] = [
  {
    "title":"FreeCodeCamp",
    "description":"Test",
    "url":"https://medium.freecodecamp.org/",
    "tag":["Technology","Web"]
  },
  {
    "title":"Tableless",
    "description":"",
    "url":"https://tableless.com.br/",
    "tag":["Technology","Web"]
  },
  {
    "title":"Hacker News",
    "description":"",
    "url":"https://hackernoon.com/",
    "tag":["Technology","Web"],
  },
  {
    "title":"CSS Tricks",
    "description":"",
    "url":"https://css-tricks.com/",
    "tag":[]
  },
  {
    "title":"Tech Crunch",
    "description":"",
    "url":"https://techcrunch.com/"
  },
  {
    "title":"Ponyfoo",
    "description":"Javascript Articles",
    "url":"https://ponyfoo.com/"
  },
  {
    "title":"Codepen",
    "description":"",
    "url":"https://codepen.io/#"
  },
  {
    "title":"Viva o Linux",
    "description":"",
    "url":"https://www.vivaolinux.com.br/"
  },
  {
    "title":"Elemar Jr",
    "description":"Ignore a parte de .Net",
    "url":"http://www.elemarjr.com/pt/blog/"
  },
  {
    "title":"Designer Lynx",
    "description":" Design Inspirational Stuff",
    "url":"https://www.designerlynx.co/"
  },
  {
    "title":"Front End Blog",
    "description":"",
    "url":"https://willianjusten.com.br/"
  },
  {
    "title":"Joel Software",
    "description":"",
    "url":"https://www.joelonsoftware.com/"
  },
  {
    "title":"How to Node",
    "description":"",
    "url":"http://howtonode.org/"
  },
  {
    "title":"Blog do Matheus Castiglioni",
    "description":"",
    "url":"https://blog.matheuscastiglioni.com.br/"
  }


];

export let tag: string[] = ["Technology","Web"];
