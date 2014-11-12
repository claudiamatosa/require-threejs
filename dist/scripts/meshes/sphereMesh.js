define([
    'THREE',
    'materials/mateGreenMaterial'
], function(
    THREE,
    MateGreenMaterial
) {
        // Sphere settings
    var radius = 50,
        segments = 16,
        rings = 16,
        
        material = new MateGreenMaterial(),
        
        geometry = new THREE.SphereGeometry(
            radius,
            segments,
            rings
        );

    function SphereMesh () {
        return new THREE.Mesh(
            geometry,
            material
        );
    }

    return SphereMesh;
});