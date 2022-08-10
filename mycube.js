class MyCube extends THREE.Group {

    constructor(parent, node) {
    super();

    var x = parseFloat(node.attributes['x'].value);
    var y = parseFloat(node.attributes['y'].value);
    var z = parseFloat(node.attributes['z'].value);
    var w = parseFloat(node.attributes['w'].value);
    var h = parseFloat(node.attributes['h'].value);
    var d = parseFloat(node.attributes['d'].value);
    var c = node.attributes['c'].value;
    var px = parseFloat(node.attributes['px'].value);
    var ry = parseFloat(node.attributes['ry'].value);
    var pz = parseFloat(node.attributes['pz'].value);
    var t = parseFloat(node.attributes['t'].value);
    var ry2 = parseFloat(node.attributes['ry2'].value);
    var i = parseFloat(node.attributes['i'].value);
    
    var geometry = new THREE.BoxGeometry(w, h, d);
    var material = new THREE.MeshBasicMaterial({ color: c });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    cube.position.x = x;
    cube.position.y = y;
    cube.position.z = z;
    
    if (i == 1) {
    globalThis.lanim = new TWEEN.Tween(cube.position);
    globalThis.lanim.to({ x: px, z: pz }, t);
    globalThis.lanimb = new TWEEN.Tween(cube.position);
    globalThis.lanimb.to({ x: x, z: z }, t);
    globalThis.lanimc = new TWEEN.Tween(cube.rotation);
    globalThis.lanimc.to({ y: ry }, t);
    globalThis.lanimd = new TWEEN.Tween(cube.rotation);
    globalThis.lanimd.to({ y: ry2 }, t);
    }
    
    else if (i == 2) {
    globalThis.anim = new TWEEN.Tween(cube.position);
    globalThis.anim.to({ x: px, z: pz }, t);
    globalThis.animb = new TWEEN.Tween(cube.position);
    globalThis.animb.to({ x: x, z: z }, t);
    globalThis.animc = new TWEEN.Tween(cube.rotation);
    globalThis.animc.to({ y: ry }, t);
    globalThis.animd = new TWEEN.Tween(cube.rotation);
    globalThis.animd.to({ y: ry2 }, t);
    }
    
    else if (i == 3) {
    globalThis.lanim2 = new TWEEN.Tween(cube.position);
    globalThis.lanim2.to({ x: px, z: pz }, t);
    globalThis.lanimb2 = new TWEEN.Tween(cube.position);
    globalThis.lanimb2.to({ x: x, z: z }, t);
    globalThis.lanimc2 = new TWEEN.Tween(cube.rotation);
    globalThis.lanimc2.to({ y: ry }, t);
    globalThis.lanimd2 = new TWEEN.Tween(cube.rotation);
    globalThis.lanimd2.to({ y: ry2 }, t);
    }
    
    else if (i == 4) {
    globalThis.lanim4 = new TWEEN.Tween(cube.position);
    globalThis.lanim4.to({ x: px, z: pz }, t);
    globalThis.lanimb4 = new TWEEN.Tween(cube.position);
    globalThis.lanimb4.to({ x: x, z: z }, t);
    globalThis.lanimc4 = new TWEEN.Tween(cube.rotation);
    globalThis.lanimc4.to({ y: ry }, t);
    globalThis.lanimd4 = new TWEEN.Tween(cube.rotation);
    globalThis.lanimd4.to({ y: ry2 }, t);
    }
    
    else if (i == 5) {
    globalThis.lanim3 = new TWEEN.Tween(cube.position);
    globalThis.lanim3.to({ x: px, z: pz }, t);
    globalThis.lanimb3 = new TWEEN.Tween(cube.position);
    globalThis.lanimb3.to({ x: x, z: z }, t);
    globalThis.lanimc3 = new TWEEN.Tween(cube.rotation);
    globalThis.lanimc3.to({ y: ry }, t);
    globalThis.lanimd3 = new TWEEN.Tween(cube.rotation);
    globalThis.lanimd3.to({ y: ry2 }, t);
    }
    
    else if (i == 6) {
    globalThis.anim2 = new TWEEN.Tween(cube.position);
    globalThis.anim2.to({ x: px, z: pz }, t);
    globalThis.animb2 = new TWEEN.Tween(cube.position);
    globalThis.animb2.to({ x: x, z: z }, t);
    globalThis.animc2 = new TWEEN.Tween(cube.rotation);
    globalThis.animc2.to({ y: ry }, t);
    globalThis.animd2 = new TWEEN.Tween(cube.rotation);
    globalThis.animd2.to({ y: ry2 }, t);
    }
    
    else if (i == 7) {
    globalThis.anim4 = new TWEEN.Tween(cube.position);
    globalThis.anim4.to({ x: px, z: pz }, t);
    globalThis.animb4 = new TWEEN.Tween(cube.position);
    globalThis.animb4.to({ x: x, z: z }, t);
    globalThis.animc4 = new TWEEN.Tween(cube.rotation);
    globalThis.animc4.to({ y: ry }, t);
    globalThis.animd4 = new TWEEN.Tween(cube.rotation);
    globalThis.animd4.to({ y: ry2 }, t);
    }
    
    else if (i == 8) {
    globalThis.anim3 = new TWEEN.Tween(cube.position);
    globalThis.anim3.to({ x: px, z: pz }, t);
    globalThis.animb3 = new TWEEN.Tween(cube.position);
    globalThis.animb3.to({ x: x, z: z }, t);
    globalThis.animc3 = new TWEEN.Tween(cube.rotation);
    globalThis.animc3.to({ y: ry }, t);
    globalThis.animd3 = new TWEEN.Tween(cube.rotation);
    globalThis.animd3.to({ y: ry2 }, t);
    }
    
    else if (i == 9) {
    globalThis.animi = new TWEEN.Tween(cube.position);
    globalThis.animi.to({ z: pz }, t);
    globalThis.animib = new TWEEN.Tween(cube.position);
    globalThis.animib.to({ z: z }, t);
    }
    
    else if (i == 10) {
    globalThis.animi2 = new TWEEN.Tween(cube.position);
    globalThis.animi2.to({ z: pz }, t);
    globalThis.animib2 = new TWEEN.Tween(cube.position);
    globalThis.animib2.to({ z: z }, t);
    }

    else if (i == 11) {
    globalThis.animi3 = new TWEEN.Tween(cube.position);
    globalThis.animi3.to({ z: pz }, t);
    globalThis.animib3 = new TWEEN.Tween(cube.position);
    globalThis.animib3.to({ z: z }, t);
    }
    parent.add(cube);
    } 
}    