// UNIT 4 ASSESSMENT: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.



describe ("fibonacciSequence", () => {
    it("should return a array of a certain amount of numbers", () => {
        const fibonacciLength1 = 6
        expect(fibonacciSequence(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
        const fibonacciLength2 = 10
        expect(fibonacciSequence(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

const fibonacciSequence = (number) => {
    if (number === 1) {
        return [1];
    }
    if (number === 2) {
        return [1,1]
    }


let a = 1, b =1

let sequence = [a, b]

for (let i = 3; i <= number; i++) {
    let nextNumber = a + b
    sequence.push(nextNumber)
    a = b
    b = nextNumber
}

return sequence

}





// Expected output: [1, 1, 2, 3, 5, 8]


// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// Pseudo code: This question was really hard for me because I felt like I was little rusty. It just took me to look back at my notes and a little research on the internet. First, I had to google what is  a fibonacci Sequence. Secondly,  I made a function caleed  fibonacciSequence, that is going to take a number as an input and if the number is an 1. It will retun an array containing only 1 and stop the function. If the number is 2, than it will return an array containing [1,1] and stop the function. So, I made two variables "a" and "b" which equal 1, to represent the first two fibonacci numbers. I made an array named sequence and starts it with the first two fibonacci numbers.Loop from 3 to number, representing the remaining fibonacci numbers to generate, then calculate the next Fibonacci number by adding the last two numbers "a" and "b", and then  add the next fibonacci number to the sequence array. Finally, it updates variables a and b to the last two fibonacci numbers and returns the sequence array containing the fibonacci sequence of length number.


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.


describe("addUpVotes", () => {
   it("should return final number of votes", () => {
        const votes1 = { upVotes: 13, downVotes: 2 }
        expect(addUpVotes(votes1)).toEqual(11)
        
        const votes2 = { upVotes: 2, downVotes: 33 }
        expect(addUpVotes(votes2)).toEqual(-31)
    });
});

const addUpVotes = (votes) => {
    let totalNumberOfVotes = votes.upVotes - votes.downVotes;
    return totalNumberOfVotes
}


// Expected output: 11

// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code: I found the final result the total number of votes by subtracting downvotes from upvotes, then returned the total number of up votes and down votes.
