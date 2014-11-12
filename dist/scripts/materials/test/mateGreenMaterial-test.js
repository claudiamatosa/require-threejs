define([
    'materials/mateGreenMaterial',
    'THREE'
], function(MateGreenMaterial, THREE) {
    
    describe('mate green material', function() {

        describe('the constructor', function () {
            it('should be defined', function () {
                expect(MateGreenMaterial).toBeDefined();
            });

            it('should return a constructor function', function () {
                var instanceOfMateGreenMaterial = function () {
                    return new MateGreenMaterial();
                };

                expect(instanceOfMateGreenMaterial).not.toThrow();
            });
            
            it('should return an instance of THREE.MeshLambertMaterial', function () {
                var mateGreenMaterial = new MateGreenMaterial();
                
                expect(mateGreenMaterial instanceof THREE.MeshLambertMaterial).toBe(true);
            });
        });
    });
});