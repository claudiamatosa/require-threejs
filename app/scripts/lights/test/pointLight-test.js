define([
    'lights/pointLight',
    'THREE'
], function(PointLight, THREE) {
    
    describe('point light', function() {

        describe('the constructor', function () {
            it('should be defined', function () {
                expect(PointLight).toBeDefined();
            });

            it('should return a constructor function', function () {
                var instanceOfPointLight = function () {
                    return new PointLight();
                };

                expect(instanceOfPointLight).not.toThrow();
            });
            
            it('should return an instance of THREE.PointLight', function () {
                var pointLight = new PointLight();
                
                expect(pointLight instanceof THREE.PointLight).toBe(true);
            });
        });
    });
});