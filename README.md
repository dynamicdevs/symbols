<br>
<div align="center"> 
<a href="https://symbols.dynamicdevs.io/">
<img src="https://assets.dynamicdevs.io/engineering/symbols-logo-regular.svg" alt="Symbols logo" height="60"/>
</a>
</div>

<br>

<p align="center">
<a href="https://symbols.dynamicdevs.io/">symbols.dynamicdevs.io</a>
</p>
<br>
<div align="center">

[![Symbols Pipeline](https://github.com/dynamicdevs/symbols/actions/workflows/pipeline.yml/badge.svg?branch=develop)](https://github.com/dynamicdevs/symbols/actions/workflows/pipeline.yml)

</div>

## About The Project

Symbols is an icon library designed and developed by [Dynamic Devs][dynamicdevs] which are being used in our projects and available for the community.

## Build With

- [Nx][nx]
- [Stencil][stencil]
- [React][react]
- [Angular][angular]
- [TypeScript][typescript]
- [EsLint][eslint]

## Getting Started

This is a [Node][node.js] module available through the [npm registry][npm]. Installation is done using the npm install command.
### React Projects

- Install npm package

  ```
  npm install --save @dynamic-devs/symbol-react
  ```

- Import module in the path where you're working.

  ```
  import { SymbolIcon } from '@dynamic-devs/symbol-react';
  ```

- Add this for use the icons on your project. 

  ```
  <SymbolIcon name="symbol" iconClass="symbol-xl" type="solid" />
  ```

### Angular Projects

- Install npm package

  ```
  npm install --save @dynamic-devs/symbol-angular
  ```

- Import module on `app.module.ts`

  ```
  import { SymbolsModule } from '@dynamic-devs/symbol-angular'

  @NgModule({
    imports: [
      SymbolsModule
    ],
  })
  ```

- Add this for use the icons on your project. 

  ```
  <symbol-icon name="symbol" icon-class="symbol-xl" type="solid"></symbol-icon>
  ```

For more imformation about the available icons, visit the website [Symbols][symbols].

## Documentation

| Prop        | Default     | Description          | Values             |
| ----------- | ----------- | -------------------- | ------------------ |
| name        |             | `string` Icon name   | Values can be found in [Symbols][symbols] |
| iconClass   |             | `string` Icon size   | `16px` symbol-sm  <br> `24px` symbol-md  <br> `32px` symbol-lg <br> `40px` symbol-xl <br> `64px` symbol-2xl <br> `96px` symbol-3xl |
| type        | 'solid'     | `string` Icon style  | solid <br> outline |

## Contributors

<br>

<a href="https://github.com/dynamicdevs/symbols/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dynamicdevs/symbols" />
</a>

## Community

Join to the conversation and help the community.

- [Youtube][youtube]
- [Spotity][spotify]
- [Twitch][twitch]

## Contact

Dynamic Devs - business@dynamicdevs.io


<br>

***

<p align="center">
<a href="https://ko-fi.com/D1D6C947W">
<img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Kofi button"/>
</a>
</p>

[dynamicdevs]: https://www.dynamicdevs.io/
[symbols]:https://symbols.dynamicdevs.io/
[nx]: https://nx.dev/
[stencil]:https://stenciljs.com/
[react]: https://es.reactjs.org/
[angular]:https://angular.io/
[typescript]:https://www.typescriptlang.org/
[eslint]:https://eslint.org/
[node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/get-npm
[youtube]: https://www.youtube.com/channel/UCD2cpIbELBfK_-9p8PoCGWg
[spotify]: https://open.spotify.com/show/4fvKHii2mWHkX8mz28klz8?si=d95553238ea04ec4
[twitch]: https://www.twitch.tv/dynamicdevs
