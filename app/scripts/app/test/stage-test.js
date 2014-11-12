define([
    'app/stage',
    'app/settings',
    'text!app/test/container-fixture.html'
], function(Stage, settings, containerFixture) {
    
    describe('the stage', function() {
        var fixtureContainer = document.createElement('section');
        document.body.appendChild(fixtureContainer);
    
        beforeEach (function () {
            fixtureContainer.innerHTML = containerFixture;
        });
        
        describe('the constructor', function () {
            it('should be defined', function () {
                expect(Stage).toBeDefined();
            });

            it('should return a constructor function', function () {
                var instanceOfStage = function () {
                    return new Stage();
                };

                expect(instanceOfStage).not.toThrow();
                expect(instanceOfStage() instanceof Stage).toBe(true);
            });
        });
        
        
        describe('the build function', function () {
            var stage = new Stage();
            
            beforeEach(function () {
                spyOn(stage, 'configureRenderer');
                spyOn(stage.scene, 'addItems');
            });
            
            it('should call configureRenderer', function () {
                stage.build();
                expect(stage.configureRenderer).toHaveBeenCalled();
            });
            
            it('should add the items to the scene', function () {
                stage.build();
                expect(stage.scene.addItems).toHaveBeenCalled();
            });
            
            it('should throw and error when the scene is undefined', function () {
                var build = function () {
                    stage.build();
                };
                
                stage.scene = null;
                
                expect(build).toThrow();
            });
        });
        
        describe('the render loop', function () {   
            var stage;
            
            beforeEach(function () {
                stage = new Stage();
                
                spyOn(window, 'requestAnimationFrame');
                spyOn(stage.scene, 'update');
                spyOn(stage.renderer, 'render');
            });
            
            it('should execute all the required instructions', function () {
                stage.render();
                
                expect(window.requestAnimationFrame).toHaveBeenCalled();
                expect(stage.scene.update).toHaveBeenCalled();
                expect(stage.renderer.render).toHaveBeenCalled();
            });
        });
        
        describe('configureRenderer', function () {
            var stage;
            
            beforeEach(function () {
                stage = new Stage();
                
                while (stage.container.hasChildNodes()){
                    stage.container.removeChild(stage.container.lastChild);
                }
                
                spyOn(stage, 'render');
                spyOn(stage.renderer, 'setSize');
                
                stage.configureRenderer();
            });
            
            it('should call the render loop', function () {
                expect(stage.render).toHaveBeenCalled();
            });
            
            it('should set the size of the renderer to the size defined in the settings', function () {
                expect(stage.renderer.setSize).toHaveBeenCalledWith(settings.width, settings.height);
            });
            
            it('should append the renderer to the container', function () {
                expect(stage.container.children[0]).toBe(stage.renderer.domElement);
            });
        });
        
        afterEach(function () {
            fixtureContainer.innerHTML = '';
        });

    });

});