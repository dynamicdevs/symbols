const fs = require('fs');

const main = () => {
  fs.readdir('./src/assets/icons/solid', (err, files: string[]) => {
    if (err) throw err;

    files.map((file) => {
      const iconName = file.replace('.svg', '').replace(/_/g, '-');

      let path: string = `./src/components/icon/icons/${iconName}-svg.tsx`;
      let template: string = getTemplate(file, iconName);

      fs.writeFile(path, template, (err) => {
        if (err) throw err;
      });
    });
  });
};

const getTemplate = (iconPath: string, iconName: string) => {
  const template = `import { Component, h, Prop, Host } from '@stencil/core';
import { StyleType } from '../../../types';

import svgSolidIcon from '../../../assets/icons/solid/${iconPath}';
import svgOutlineIcon from '../../../assets/icons/outline/${iconPath}';

/** @internal **/
@Component({
  tag: '${iconName}-svg',
  shadow: false,
})
export class Icon${toPascalCase(iconName.split('-'))}Svg {
  @Prop() iconClass?: string;
  @Prop() type: StyleType = 'solid';

  render() {
    return (
      <Host
        class={\`\${this.iconClass} symbol-icon-container\`}
        innerHTML={this.type === 'solid' ? svgSolidIcon : svgOutlineIcon}
      ></Host>
    );
  }
}
`;

  return template;
};

const toPascalCase = (words: string[]) => {
  if (words[0] === 'ic') words.shift();

  const wordArray = words.map((word) => {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  });

  return wordArray.join('');
};

main();
