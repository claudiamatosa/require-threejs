define([
    'THREE',
    'app/settings'
], function(
    THREE,
    settings
) {        
    var // On-start camera attributes
        viewAngle = 75,
        aspect = settings.width / settings.height,
        near = 0.1,
        far = 1000,
        
        position = {
            x: 0,
            y: 0,
            z: 200
        };

    function DefaultCamera () {
        var defaultCamera = new THREE.PerspectiveCamera(
            viewAngle,
            aspect,
            near,
            far
        );
        
        defaultCamera.position.set(
            position.x,
            position.y,
            position.z
        );
        
        return defaultCamera;
    };
    
    return DefaultCamera;
});