// main.js
const { Worker } = require("worker_threads");

function runWorker(limit) {
    return new Promise((resolve, reject) => {
        const worker = new Worker("./sumWorker.js", { workerData: { limit } });
        worker.on("message", resolve);
        worker.on("error", reject);
    });
}

(async () => {
    console.time("multiWorkers");

    // Uruchomienie kilku workerów równolegle
    const results = await Promise.all([
        runWorker(4e9),
        runWorker(7e7),
        runWorker(4e8),
        runWorker(3e6),
        runWorker(5e7),

    ]);

    console.log("Wyniki:", results);
    console.timeEnd("multiWorkers");
})();
