/*const JOURNAL = require("./journal");

for (let i = 0; i < JOURNAL.length; i++) {
    let entry = JOURNAL[i];
    //Do something with entry
}*/

for (let entry of JOURNAL) {
    console.log(`${entry.events,length} events.`);
}