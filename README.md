# ThreeJS and RequireJS

Organising [ThreeJS](http://threejs.org) dependencies with RequireJS, in order to make scene building and object adding easier.

Although the final scene is simply an adaptation from the introduction tutorial at ThreeJS's website, thus it has only a scene, a light and a sphere, this intends to demonstrate how to do it in more complex settings.

This is a work in progress.

### Runing the project

Install nodeJS, then run, from the root directory:

    npm start

Navigate to http://localhost:8000. Your browser must support canvas and WebGL.

## Testing

To run the unit tests:

    karma start
    
## Deploying

Asset minification and optimisation is not covered by this project, but you can find around the web plenty of examples on how to minify RequireJS apps.