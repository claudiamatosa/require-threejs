require.config({
    baseUrl: '/scripts',
    
    paths: {
        THREE: '../vendor/threejs/build/three'
    },
    
    shim: {
        THREE: {
            exports: 'THREE'
        }
    },
    
    deps: ['main']
});