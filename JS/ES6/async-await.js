
let task1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 1 completed");
    }, 2000);
});

let task2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 2 completed");
    }, 3000);
});

let task3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Task 3 failed");
    }, 1500);
});

async function runTasks() {
    try {
        const results = await Promise.all([task1, task2, task3]);
        console.log("All tasks completed:", results);
    } catch (error) {
        console.log("Error in one of the tasks:", error);
    }
}
runTasks();
