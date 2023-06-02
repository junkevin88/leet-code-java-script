/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {

    let [prev, curr] = [0, 1];
    
    while (true) {
        yield prev;
        [prev, curr] = [curr, prev + curr];
    }
    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */