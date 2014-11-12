define([
    'THREE'
], function(THREE) {
    
    var properties = {
            color: 0x00ff00
        };
    
    function MateGreenMaterial () {
        return new THREE.MeshLambertMaterial(properties)
    };
    
    return MateGreenMaterial;
});