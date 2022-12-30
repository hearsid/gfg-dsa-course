const diskColorMap = {
    1: 'Red', 
    2: 'Green',
    3: 'Blue',
    4: 'Gray'
};
function towerOfHanoi(n, sourceTower, destinationTower, auxiliaryTower) {
    if (n == 0)
        return;
    
    towerOfHanoi(n-1, sourceTower, auxiliaryTower, destinationTower);
    console.log(`${stepCount++}) Move ${diskColorMap[n]} disk from ${sourceTower} to ${destinationTower}`);
    towerOfHanoi(n-1, auxiliaryTower, destinationTower, sourceTower);
}
const noOfDisks = 4;
let stepCount = 1;
towerOfHanoi(noOfDisks, 'A', 'C', 'B');

