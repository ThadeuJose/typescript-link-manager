import Database from "./database";
import { Link, data, tag } from "./data";

export function main(): void {
  let db = new Database(data);

  let links: Link[] = db.getAllLinks();

  const containerId = 'link-box';

  createList(containerId, links, createLink);

  const tagBoxId = 'tag-box';

  createList(tagBoxId, tag, createTag);

}

function createList(containerId: string, list: Array<any>, createFunction: (element: any) => HTMLElement) {
  const container = getElementById(containerId);
  list.forEach((element) => {
    container?.appendChild(createFunction(element));
  });
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

function createTag(tag: string): HTMLElement {
  const categoryBox: HTMLElement = createElement('div', 'category_box flex');
  const circleIcon: HTMLElement = createCircleIcon();
  const title: HTMLElement = createElement('p', 'category_box__title');
  const trashIcon: HTMLElement = createTrashIcon();

  setupStructure2({ categoryBox, circleIcon, title, trashIcon });

  setText(title, tag);

  return categoryBox;
}

function createCircleIcon(): HTMLElement{
  return createIcon('icon icon_circle color_red', 'fas fa-circle');
}

function createTrashIcon(): HTMLElement{
  return createIcon('icon icon_trash', 'fas fa-trash-alt');
}

function createIcon(classnamesDiv:string, classnamesIcon:string): HTMLElement {
  const iconBox: HTMLElement = createElement('div', classnamesDiv);
  const icon: HTMLElement = createElement('i', classnamesIcon);
  iconBox.appendChild(icon);
  return iconBox;
}

function createElement(tag:string, classNames:string): HTMLElement {
  let resp = document.createElement(tag);
  resp.className = classNames;
  return resp;
}

function setupStructure({ resp, linkBox, title, description }:any): void {
  resp.appendChild(linkBox);
  linkBox.appendChild(title);
  linkBox.appendChild(description);
}

function setupStructure2({ categoryBox, circleIcon, title, trashIcon }:any): void {
  categoryBox.appendChild(circleIcon);
  categoryBox.appendChild(title);
  categoryBox.appendChild(trashIcon);
}

function setText(element:HTMLElement, text: string): void {
  element.textContent = text;
}
