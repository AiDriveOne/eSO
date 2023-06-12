// eso.js

// Function to greet the user and ask how to help
function greetUser(name) {
    try {
        if (!name || typeof name !== 'string') {
            throw new Error("Invalid name. Please provide a valid name as a string.");
        }

        var greeting = "Hello, " + name + "! Welcome to ESO JavaScript.";
        var assistance = "How may I assist you today?";

        speak(greeting);
        speak(assistance);
    } catch (error) {
        console.error("Error in greetUser:", error.message);
    }
}

// Function to calculate the square of a number
function square(number) {
    try {
        if (typeof number !== 'number') {
            throw new Error("Invalid input. Please provide a valid number.");
        }

        return number * number;
    } catch (error) {
        console.error("Error in square:", error.message);
    }
}

// Function to generate a random number between a given range
function generateRandomNumber(min, max) {
    try {
        if (typeof min !== 'number' || typeof max !== 'number' || min > max) {
            throw new Error("Invalid range. Please provide valid numbers for min and max, where min is less than or equal to max.");
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    } catch (error) {
        console.error("Error in generateRandomNumber:", error.message);
    }
}

// Function to speak a given message using text-to-speech
function speak(message) {
    try {
        if ('speechSynthesis' in window) {
            var speech = new SpeechSynthesisUtterance(message);
            speech.lang = 'en-US';
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;

            window.speechSynthesis.speak(speech);
        } else {
            throw new Error("Speech synthesis is not supported in this browser.");
        }
    } catch (error) {
        console.error("Error in speak:", error.message);
    }
}

// Function to ask the user how to assist
function askForAssistance() {
    try {
        var message = "How may I assist you?";
        speak(message);
    } catch (error) {
        console.error("Error in askForAssistance:", error.message);
    }
}

// Exporting the functions to make them accessible to other scripts
export {
    greetUser,
    square,
    generateRandomNumber,
    speak,
    askForAssistance
};
