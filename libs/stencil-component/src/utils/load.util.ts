import { StyleType } from "../types";

const REQUESTS = new Map<string, Promise<string | void>>();
export const ICONS_CONTENT = new Map<string, string>();

export const ICONS_SOLID_CONTENT = new Map<string, string>();
export const ICONS_OUTLINE_CONTENT = new Map<string, string>();

export const getIconContent = (name: string, type: StyleType) => {
  const url: string = `https://symbol.blob.core.windows.net/symbols/icons/${type}/ic_${name}.svg`
  let request = REQUESTS.get(url);
  if (!request) {
    request = fetch(url).then((response: Response) => {
      if (response.ok) {
        return response.text().then((svgContent: string) => {
          if (type === 'solid') {
            ICONS_SOLID_CONTENT.set(name, svgContent || '');
          } else {
            ICONS_OUTLINE_CONTENT.set(name, svgContent || '');
          }
        });
      }
    })
  }
  return request;
};

export const getIconList = (url: string) => {
  let request = REQUESTS.get(url);

  if (!request) {
    request = fetch(url).then((response: Response) => {
      if (response.ok) {
        return response.json();
      }
      ICONS_CONTENT.set(url, '');
    })
  }
  return request;
};
