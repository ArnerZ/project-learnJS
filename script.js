function calculateVolumeAndArea(side) {
    if(side != 'string' && side > 0){
    let a = side * side * side;
    let b = 6 * side * side;
    console.log(`обьем куба: ${a}, площадь всей поверхности: ${b}`);
}
    else{
        console.log('писяо');
    }
}
calculateVolumeAndArea('голова');