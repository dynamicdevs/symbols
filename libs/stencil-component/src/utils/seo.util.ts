export const addSeoToSvg = (name:string, svgContent: string) => {

  const parser = new DOMParser();

  const svgElement = parser.parseFromString(svgContent, 'image/svg+xml');
  
  svgElement.documentElement.setAttribute('role', 'img');
  svgElement.documentElement.setAttribute('aria-label', name);
  
  const titleElement = document.createElement('title');
  titleElement.innerText = name;

  svgElement.documentElement.appendChild(titleElement);

  return svgElement.documentElement.outerHTML;

}