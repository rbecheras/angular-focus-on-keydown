# angular-focus-on-keydown

An Angular.js module that provide a directive to focus an input on a configurable keydown combination.

## Installation

    bower install angular-focus-on-keydown --save

## Usage

```html
<html>
  <head>
    <script src="bower_components/angular/angular.min.js"></script>
    <script src="bower_components/angular-focus-on-keydown/dist/angular-focus-on-keydown.min.js"></script>
    <script>
      var app = angular.module('app',['focusOnKeydown']);
    </script>
  </head>
  <body ng-app="app">

    <h2>
      Type CTRL+F to get focus on searchbar input
    </h2>

    <div class="searchbar">
      <input type="text" ng-model="search" focus-on-keydown="Ctrl+F"></input>
    </div>

    <pre>
      You are searching {{search}} ...
    </pre>

  </body>
</html>
```

## Directive possible values

The directive `focus-on-keydown` take a value that can be :

- a simple letter (example: `focus-on-keydown="S"`)
- or one of the two kinds of combination:
 - `CTRL` and a letter (example: `focus-on-keydown="Ctrl+S"`)
 - `SHIFT` and a letter (example: `focus-on-keydown="Shift+S"`)

## LICENSE

The MIT License (MIT)

Copyright (c) 2015 Rémi Becheras <rbecheras@sirap.fr> (https://github.com/rbecheras)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
