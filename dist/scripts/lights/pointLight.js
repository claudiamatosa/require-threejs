define([
    'THREE'
], function(
    THREE
) {        
    var properties = {
            color: 0xFFFFFF,
            intensity: 1,
            distance: 500,
            position: {
                x: 0,
                y: 0,
                z: 150
            }
        };
    
    function PointLight () {
        var light = new THREE.PointLight(
            properties.color,
            properties.intensity,
            properties.distance
        );
        
        // Set default position
        light.position.set(
            properties.position.x,
            properties.position.y,
            properties.position.z
        );
        
        return light;
    };

    return PointLight;
});