import { particlesCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js' //its an defined package from github
    
const pc = particlesCursor({
    el: document.getElementById('app'),
    gpgpuSize: 512,
    colors: [0x00fffc, 0x0000ff], // Changed pink color to #00fffc and blue color  
    color: 0xff0000,
    coordScale: 0.5,
    noiseIntensity: 0.005,
    noiseTimeCoef: 0.0001,
    pointSize: 2, // Lighter particle thickness 
    pointDecay: 0.0025,
    sleepRadiusX: 250,
    sleepRadiusY: 250,
    sleepTimeCoefX: 0.001,
    sleepTimeCoefY: 0.002
});

// Update particle position based on cursor movement 
document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX / window.innerWidth;
    const mouseY = 1 - event.clientY / window.innerHeight;
    
    pc.uniforms.uMousePos.value.set(mouseX, mouseY);
});

document.body.addEventListener('click', () => {
    pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
    pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
    pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
    pc.uniforms.uPointSize.value = 1 + Math.random() * 10;
});

document.body.addEventListener('click', () => { 
    pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
    pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
    pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
    pc.uniforms.uPointSize.value = 1 + Math.random() * 10;
    
    // Reset particle parameters after 2 seconds  
    setTimeout(() => {
        pc.uniforms.uColor.value.set(0x000000); // Set color to black (invisible)
        pc.uniforms.uCoordScale.value = 0.001;
        pc.uniforms.uNoiseIntensity.value = 0.0001;
        pc.uniforms.uPointSize.value = 0;
    }, 2000);
});123456789012