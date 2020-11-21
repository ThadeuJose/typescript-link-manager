import Database from "./database";
import { Link, data } from "./data";

export function main(): void {
  let db = new Database(data);
  let links: Link[] = db.getAllLinks();
  const containerId = 'link-box';
  const app = getElementById(containerId);

  links.forEach((element) => {
    app?.appendChild(createLink(element));
  });

  console.log(db.getAllLinks());
}

function getElementById(id: string): HTMLElement {
  return document.getElementById(id);
}

function createLink(link: Link): HTMLElement {

  const resp: HTMLElement = createElement('a', 'link');
  const linkBox: HTMLElement = createElement('div', 'link-box');
  const title: HTMLElement = createElement('p', 'link-box__title');
  const description: HTMLElement = createElement('p', 'link-box__description');

  setupStructure({ resp, linkBox, title, description });

  setText(title, link.title);
  setText(description, link.description);

  return resp;
}

function createElement(tag:string, className:string): HTMLElement {
  let resp = document.createElement(tag);
  resp.className = className;
  return resp;
}

function setupStructure({ resp, linkBox, title, description }:any): void {
  resp.appendChild(linkBox);
  linkBox.appendChild(title);
  linkBox.appendChild(description);
}

function setText(element:HTMLElement, text: string): void {
  element.textContent = text;
}
