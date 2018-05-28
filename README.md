# browserutils

Basic helper functions HTML5 web apps in the browser such as client-side templates, localization and DOM manipulation.

## Installation

```
npm install @ekliptor/browserutils
```

## Usage

This package adds 2 global variables to the browse scope (window object):
```
window.AppF;
window.Hlp;
```

If you are using TypeScript (for example with WebPack) you should add the
following lines at the top of your source file:
```
declare var any: AppFunc, Hlp: any;
```

Typings are still work in progress.