# INTRO TO RAILS
This is an Intro to Rails course, intended for eventual inclusion in the Girl Develop It Core Curriculum. All material by Cheri Allen, inspired by Railsbridge.

The course is meant to be taught in four two-hour workshops. Each of the slides and practice files are customizable according to the needs of a given class or audience.

Cheri's slides can be viewed [here](http://cherimarie.github.io/gdi-core-rails/#/).

## Theme customization

You can change theme colors by changing the theme css to any of the following options:
```html
  <link rel="stylesheet" href="css/theme/gdidefault.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdilight.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdisunny.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdicool.css" id="theme">
```
You can change the text editor theme by changing the highlight.js css to the following options:
```html
  <link rel="stylesheet" href="lib/css/dark.css">
  <link rel="stylesheet" href="lib/css/light.css">
```
You can change transition by changing the reveal transition property in Reveal.initialize
```javascript
  Reveal.initialize({
  				transition:  'default', // default/cube/page/concave/zoom/linear/none
  			});
```
