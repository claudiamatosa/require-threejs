/**
 * # Sample scene
 *
 * Setting up a scene, adding the items and rendering
 */

define([
    'THREE',
    'lights/pointLight',
    'cameras/defaultCamera',
    'meshes/sphereMesh'
], function (
    THREE,
    pointLight,
    defaultCamera,
    sphereMesh
) {
    function Scene(camera) {
        this.camera = defaultCamera;
        
        this.scene = new THREE.Scene();
        
        this.items = {
            sphere: sphereMesh,
            light: pointLight
        };
    };
    
    Scene.prototype = {
        /**
         * Add items to be rendered in this scene, and assign them
         * to a value under the items object, so they can be manipulated later
         */
        addItems: function () {
            var scene = this.scene,
                object,
                key,
                Item;

            for (key in this.items) {
                if (this.items.hasOwnProperty(key)) {
                    Item = this.items[key];
                    
                    this.items[key] = new Item();

                    scene.add(this.items[key]);
                }
            };
        },

        /*
         * Rotate the sphere in the x and y axis, creating an organic motion
         */
        rotateSphere: function () {
            this.items.sphere.rotation.x += 0.1;
            this.items.sphere.rotation.y += 0.1;
        },

        /**
         * This function is called continuously with a requestAnimationFrame,
         * when rendering
         */
        update: function () {
            this.rotateSphere();
        }
    }
    
    return Scene;
});