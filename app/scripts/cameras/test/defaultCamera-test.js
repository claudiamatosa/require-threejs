define([
    'cameras/defaultCamera',
    'THREE'
], function(DefaultCamera, THREE) {
    
    describe('default camera', function() {

        describe('the constructor', function () {
            it('should be defined', function () {
                expect(DefaultCamera).toBeDefined();
            });

            it('should return a constructor function', function () {
                var instanceOfDefaultCamera = function () {
                    return new DefaultCamera();
                };

                expect(instanceOfDefaultCamera).not.toThrow();
            });
            
            it('should return an instance of THREE.PerspectiveCamera', function () {
                var defaultCamera = new DefaultCamera();
                
                expect(defaultCamera instanceof THREE.PerspectiveCamera).toBe(true);
            });
        });
    });
});