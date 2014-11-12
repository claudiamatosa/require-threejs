/**
 * # Stage
 * 
 * Setting up a scene, adding the items and rendering
 */

define([
    'THREE',
    'app/settings',
    'scenes/sampleScene'
], function(
    THREE,
    settings,
    sampleScene
) {
    
    function Stage () {
        this.scene = new sampleScene();
        this.renderer = new THREE.WebGLRenderer();
        this.container = document.getElementById(settings.containerId);
    };
    
    Stage.prototype = {
        configureRenderer: function () { 
            this.renderer.setSize(settings.width, settings.height);

            this.container.appendChild(this.renderer.domElement);
            
            this.render();
        },

        /**
         * Render loop - calls the render function continuously
         * and updates the canvas
         */
        render: function () {
            window.requestAnimationFrame(this.render.bind(this));

            // Each scene must have an update loop in its prototype, which
            // will run the required actions
            this.scene.update();

            this.renderer.render(
                this.scene.scene,
                this.scene.camera
            );
        },

        /**
         * Initialiser
         */
        build: function () {
            if (typeof this.scene !== undefined) {
                this.scene.addItems();
            } else {
                throw new Error('The scene can\'t be undefined.');
            }
            
            this.configureRenderer();
        }
    };
    
    return Stage;
});