/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function (classes, extraStudents) {
const heap = new MaxPriorityQueue({ priority: ([passi, totali]) => 
        (passi + 1) / (totali + 1) - passi / totali
    });
    for (let [passi, totali] of classes) {
        heap.enqueue([passi, totali]);
    }
    while (extraStudents > 0) {
        let [passi, totali] = heap.dequeue().element;
        passi++;
        totali++;
        heap.enqueue([passi, totali]);
        extraStudents--;
    }
    let sum = 0;
    for (let { element: [passi, totali] } of heap.toArray()) {
        sum += passi / totali;
    }
    return sum / classes.length;
};