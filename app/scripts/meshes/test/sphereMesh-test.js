define([
    'meshes/sphereMesh',
    'THREE'
], function(SphereMesh, THREE) {
    
    describe('sphere mesh', function() {

        describe('the constructor', function () {
            it('should be defined', function () {
                expect(SphereMesh).toBeDefined();
            });

            it('should return a constructor function', function () {
                var instanceOfSphereMesh = function () {
                    return new SphereMesh();
                };

                expect(instanceOfSphereMesh).not.toThrow();
            });
            
            it('should return an instance of THREE.Mesh', function () {
                var sphereMesh = new SphereMesh();
                
                expect(sphereMesh instanceof THREE.Mesh).toBe(true);
            });
        });
    });
});