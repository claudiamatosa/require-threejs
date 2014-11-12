var tests = [];

var testRegExp = /-test\.js$/;

for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (testRegExp.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    baseUrl: '/base/scripts',

    paths: {
        THREE: '../vendor/threejs/build/three',
        text: '../vendor/requirejs-text/text'
    },
    
    shim: {
        THREE: {
            exports: 'THREE'
        }
    },

    deps: tests,

    callback: window.__karma__.start
});