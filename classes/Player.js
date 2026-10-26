class Player {
    constructor(name) {
        this.name = name
        this.times = [];
    }
    recordTime(start, end) {
        this.times.push(end - start);
    }
    showStats() {
        if (this.times.length !== 0) {
        const total = this.times.reduce((sum, time) => sum + time, 0);
        const average = total / this.times.length;
        console.log(`Total time: ${total} ms`);
        console.log(`Average time: ${average} ms`);
        } else{
            console.log("No riddles have been solved yet.");
        }
        
    }
}
export default Player;
// The Player class. Export it as the default export.
//
// Properties:
// - name
// - times (an array that holds the time it took to solve each riddle)
//
// Methods:
// - recordTime(start, end)
//   - calculate the duration (end - start) and add it to the times array
// - showStats()
//   - show the total time and the average time per riddle
