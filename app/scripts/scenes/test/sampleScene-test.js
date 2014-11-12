define([
    'scenes/sampleScene',
    'THREE'
], function(SampleScene, THREE) {
    
    describe('sample scene', function() {

        describe('the constructor', function () {
            it('should be defined', function () {
                expect(SampleScene).toBeDefined();
            });

            it('should return a constructor function', function () {
                var instanceOfSampleScene = function () {
                    return new SampleScene();
                };

                expect(instanceOfSampleScene).not.toThrow();
                expect(instanceOfSampleScene() instanceof SampleScene).toBe(true);
            });
            
            it('should set the items property as an instance of THREE.scene', function () {
                var sampleScene = new SampleScene();
                
                expect(sampleScene.scene instanceof THREE.Scene).toBe(true);
            });
        });
        
        describe('the update loop', function() {
            var sampleScene;
            
            beforeEach(function () {
                sampleScene = new SampleScene();
                
                spyOn(sampleScene, 'rotateSphere');
            });
            
            it('should call rotateSphere', function () {
                sampleScene.update();
                
                expect(sampleScene.rotateSphere).toHaveBeenCalled();
            });
        });
        
        describe('the addItems function', function () {
            var sampleScene;
            
            beforeEach(function () {
                sampleScene = new SampleScene();
                
                spyOn(sampleScene.scene, 'add');
            });
            
            it('should throw an error when there are no items', function () {
                sampleScene.items = [];
                
                expect(sampleScene.addItems).toThrow();
            });
            
            it('should add the items to the scene', function () {
                sampleScene.items = {
                    item1: function () {},
                    item2: function () {}
                };
                
                sampleScene.addItems();
                
                for (key in sampleScene.items) {
                    expect(sampleScene.scene.add).toHaveBeenCalledWith(sampleScene.items[key]);
                }
            });
        });
    });
});