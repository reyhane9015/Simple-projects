// Example 1: Numeric Enum (Default)
enum Status {
    Pending1, 
    InProgress1,
    Completed1,
}

let currentStatus1: Status = Status.InProgress1;
console.log(currentStatus);



// Example 2: Numeric Enum (Custom Values)
enum Status {
    Pending2 = 1,
    InProgress2 = 3,
    Completed2
}
console.log(Status.Pending2);    // 1
console.log(Status.InProgress2); // 3
console.log(Status.Completed2);  // 4


// String Enums (Simple Example)
enum Status {
    Pending3 = 'PENDING',
    InProgress3 = 'IN_PROGRESS',
    Completed3 = 'COMPLETED'
}
  
let currentStatus2: Status = Status.InProgress3;

console.log(currentStatus2); // 'IN_PROGRESS'



// Heterogeneous Enums (Mix of Strings and Numbers)
enum Result {
    Success = 1, 
    Failure = 'FAIL',
    Pending = 2
}

console.log(Result.Success); // 1 (number)
console.log(Result.Failure); // 'FAIL' (string)
console.log(Result.Pending); // 2 (number)
  