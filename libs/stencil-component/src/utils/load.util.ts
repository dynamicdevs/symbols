const REQUESTS = new Map<string, Promise<string | void>>();
export const ICONS_CONTENT = new Map<string, string>();

export const getSVGContent = (url: string) => {
  let request = REQUESTS.get(url);

  if (!request) {
    request = fetch(url).then((response: Response) => {
      if (response.ok) {
        return response.text().then((svgContent: string) => {
          ICONS_CONTENT.set(url, svgContent || '');
        });
      }
      ICONS_CONTENT.set(url, '');
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
