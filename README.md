# react-static-plugin-yandex-metrica
React Static plugin for Yandex Metrica

A [React-Static](https://react-static.js.org) plugin that integrates [Yandex Metrica](https://metrika.yandex.ru/list?)

## Installation

- Install the plugin:

```bash
$ npm i react-static-plugin-yandex-metrica
```

- Add the plugin to your `static.config.js`:

```javascript
export default {
  plugins: [
    ['react-static-plugin-yandex-metrica', {id: YOUR_METRICA_COUNTER_ID}],
  ]
}
```
