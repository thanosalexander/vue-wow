# vue-wow

## Features

* Ispire by wow.js Reveal CSS animation as you scroll down a page
* Easy to migrate from wow.js to vue-wow.
* Fast execution and lightweight code
* Works with Animate.css

## Install & basic usage

```bash
# install
$ npm install  v-wow
```

```js 
import vWow from 'v-wow'
Vue.use(vWow);
```

## Parameters

### Directive with parameters

```html
<div class="holder" v-wow="{ 'animation-name': 'fadeInUp','animation-duration': '1s'}"></div>
```

| Parameters           | Description                  | Default value  |
| -------------------- | ---------------------------- | ---------------|
| animation-name       | Name of css animation        | -              |
| animation-duration   | Duration of this animation   | -              |
| animation-delay      | Animation Delay              | -              |

### Directive + Data Attributes
```html
<div class="fadeInUp" v-wow data-wow-delay="0.2s" data-wow-duration="2s"></div>
```

| Attribute           | Description                     | Default value  |
| ------------------- |---------------------------------| -              |
| data-wow-duration   | Duration of this animation      | -              |
| data-wow-delay      | Animation Delay                 | -              |


## Example of Animation

```css
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 30%, 0);
    -ms-transform: translate3d(0, 30%, 0);
    transform: translate3d(0, 30%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInUp {
  animation-name: fadeInUp;
  animation-timing-function: ease-out;
}
```
