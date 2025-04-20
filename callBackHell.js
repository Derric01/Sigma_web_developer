// Task 1 with callback
function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 is completed!!");
        callback();  // Calling the next task when the current task is done
    }, 2000);
}

// Task 2 with callback
function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 is completed!!");
        callback();  // Calling the next task when the current task is done
    }, 1000);
}

// Task 3 with callback
function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 is completed!!");
        callback();  // Calling the next task when the current task is done
    }, 1500);
}

// Task 4 with callback
function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 is completed!!");
        callback();  // Calling the final callback once the task is completed
    }, 3000);
}

/* 
   CALLBACK HELL: 
   The following nested callbacks create a pyramid structure. 
   As we add more tasks, the indentation increases, making it hard to read and maintain.
*/

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All tasks are completed!!"); // Final callback when all tasks are completed
            });
        });
    });
});

// **Callback Hell Issues:**
// 1. **Hard to Read**: The code becomes harder to understand as more tasks are added.
// 2. **Difficult to Maintain**: Modifying or adding tasks in the middle of this structure requires modifying multiple levels of nested callbacks.
// 3. **Error Handling Complexity**: Error handling becomes cumbersome as each callback may need its own error handling mechanism.

