<!-- TOC -->

- [Lesson 1](#lesson-1)
  - [Assignment 1: Introduction](#assignment-1-introduction)
  - [Assignment 2: The Dilemma of Three Astronauts](#assignment-2-the-dilemma-of-three-astronauts)
  - [Assignment 3: Can a Desktop Editor Help?](#assignment-3-can-a-desktop-editor-help)
  - [Assignment 4: Thinking like a Programmer](#assignment-4-thinking-like-a-programmer)
  - [Assignment 5: The Equation (Part 1)](#assignment-5-the-equation-part-1)
  - [Assignment 6: The Equation (Part 2)](#assignment-6-the-equation-part-2)
- [Lesson 2](#lesson-2)
  - [Assignment 1: Setting up the Files](#assignment-1-setting-up-the-files)
  - [Assignment 2: Linking JavaScript and HTML Together](#assignment-2-linking-javascript-and-html-together)
    - [Adding the HTML boilerplate](#adding-the-html-boilerplate)
    - [Linking the JavaScript](#linking-the-javascript)
  - [Assignment 3: Checking the connection](#assignment-3-checking-the-connection)
    - [In the browser](#in-the-browser)
- [Lesson 3](#lesson-3)
  - [Assignment 1: Thinking Before Coding](#assignment-1-thinking-before-coding)
  - [Assignment 2: First Comments](#assignment-2-first-comments)
  - [Assignment 3: Finishing the Notes](#assignment-3-finishing-the-notes)
  - [Assignment 4: Coding the First Step](#assignment-4-coding-the-first-step)
  - [Assignment 5: Testing the First Step](#assignment-5-testing-the-first-step)
    - [Open your index.html file in your browser](#open-your-indexhtml-file-in-your-browser)
    - [Open up the console](#open-up-the-console)
    - [Check the function you wrote](#check-the-function-you-wrote)
  - [Assignment 6: Solving the Second Step](#assignment-6-solving-the-second-step)

<!-- /TOC -->

# Lesson 1

## Assignment 1: Introduction

Hi!

Welcome to the “Write JavaScript on Your Desktop” project.

So far, you have used a cloud editor (JS Bin) to write JavaScript. However, in the next few lessons you will learn how to write JavaScript on your local machine. 

By the end, you will have a thorough understanding of:

- Why desktop environments are essential for a web developer.
- How you can create and edit a JavaScript file using a desktop editor.
- How you can interact with your JavaScript files, using a browser and its console.

And to spice things up, you will learn all of this by saving some astronauts who got stranded on Mars.

This project consists of 4 lessons:

- First, we'll think about the problem we're trying to solve.
- In the second one, we'll set up a desktop environment for writing JavaScript.
- And finally the last two one will be spent coding the solution for the astronauts.

Are you ready? Then let‘s dive in!

**Task:** Next

## Assignment 2: The Dilemma of Three Astronauts

The year is 2070.

A failed scientific experiment caused a devastating chain-reaction that destroyed all energy sources on Earth.

A group of scientists used the remaining parts of modern space shuttles to build a modest spaceship which would take three bold astronauts—Jack, Jill and you to Mars, in search of an alternate energy source.

The shuttle left Earth smoothly, however due to a rough landing on Mars, one of the engines on the spaceship got damaged. This caused a problem: after retrieving the energy source and loading it onto the ship, your shuttle got too heavy to take off with one of its engines offline.

After some consideration, Jill suggested that you should let go some of the fuel to reduce the weight, but Jack pointed out that the fuel gauge is broken. There is no way to know how much fuel you should offload to be able to lift off, and still reach Earth.

Since you are the only technician on Mars, both Jack and Jill look at you for a solution.

Fortunately, you have your trusted computer with you, which means you can build a calculator that will help you figure out the exact amount of fuel needed. If you do this right, all three of you can go back to Earth and save humanity.

One problem though: on Mars, there is no internet. Which means there are no cloud editors like JS Bin. But maybe, a desktop code editor—like Brackets—could help you out.

Let’s see.

**Task:** Next

## Assignment 3: Can a Desktop Editor Help?

Fortunately for you and the crew, yes—a desktop editor can help. With it, you can write JavaScript even without an internet connection. (This is one of their big advantages, and not just when you are in a life-threatening situation on Mars.)

**Note:** In this project, I am going to use Brackets as a demonstration, but you can use whatever editor you like (as long as it's a desktop editor.) Everything you will see works in every major editor out there.

Now that you know you have the tools, it's time to get to work.

First, create a project folder named `save-humanity` in a folder somewhere on your computer.

**Task:** Next

## Assignment 4: Thinking like a Programmer

The key to solve any problem is to break it down into smaller chunks, then solve those chunks one by one.

This is the fundamental approach that all programmers use in their work, and what we’ll use to solve the problem of the astronauts.

Take your big, complex problem: **You and your fellow astronauts are stuck on Mars, and you want to get back to Earth.**

Now here’s the same problem, broken down by asking some logical questions:

1)  **Why are you stuck on Mars?** → Because due to the extra weight and the broken engine, your shuttle is too heavy to take off.
2) **What can you do about that?** → You can offload some of the fuel.
3) **How much fuel should you offload?** → Not clear yet, you need a calculator to figure it out.
4) **What do you need to create that calculator?** → 
	- You need to come up with the math.
	- Then you need to turn that math into a small JavaScript program.

See? You asked some questions, gave some answers and instead of having one giant problem, now you have the two smaller, more tangible problems to tackle:

- Figure out the math.
- Build a JavaScript calculator based on the math.

In the next step, we will take the first sub-problem and use the same breakdown approach on it. 

**Note:** You just saw the dreaded word *math*, twice. Take a deep breath, and please, don't run away thinking you can't possibly do this. I promise, you are more than up for the task ahead. It's math, but you will be able to handle it.

**Task:** Next

## Assignment 5: The Equation (Part 1)

Okay, let’s tackle our first sub-problem: **the math that will get us home.**

Here’s what we know:

- The shuttle has an average fuel consumption, that’s `X` liters of fuel per 100 kilometers.
- And of course, the Earth is a certain distance away. Let’s call it `Y` kilometers for now.

**Note:** We don't know the exact values of these variables now, they will be provided when Jack and Jill use our calculator. That shouldn't bother us though, the variables are enough to figure out the equation.

- We know we can travel `100 km` with `X` liters of fuel.
- We also know that the Earth is `Y` kilometers away.
- Our question is `Z`, the amount of fuel we need.

`Z` can be calculated by using simple mathematical proportions:

```text
If: 100 km takes X liter
And: Y km takes Z liter

Then: Z = Y * (X / 100)
```

In other words:

```text
Amount of fuel needed = Total distance to Earth * Average fuel consumption
```

Okay, we are halfway there. The ultimate question still remains: how much fuel should we offload? Let's answer that in the next assignment.

**Task:** Next

## Assignment 6: The Equation (Part 2)

We have the formula for calculating the amount of fuel that will get us home.

Now we need to figure out how much we can dump from the fuel tank to leave only the necessary amount.

- You heard from Jill that they fueled up the shuttle to the maximum.
- That means that the current fuel level equals the tank's maximum capacity. 

Which means:

```text
Fuel to offload = Tank’s capacity - Fuel needed to go home
```

There you go, we have the math that will get you home. 

Again, don’t worry about the exact numbers yet. Those will come from your fellow astronauts when you build the calculator based on the logic above. 

Speaking of which, it’s time to code that calculator.

**Task:** Next  

# Lesson 2

## Assignment 1: Setting up the Files

In the last lesson, we have created the plan for our project, now it’s time to code it. 

As promised, we will do all development locally, using nothing but Brackets and a browser of your choice.

Launch Brackets, and open the `save-humanity` folder.

We will need two files:

- An `index.html` file—we will use this to interact with our JavaScript in the browser.
- An `app.js` file—we will write our JavaScript here.

As your first step, create these two files inside the `save-humanity` folder.

**Note:** You could name these two files anything you want but `index.html` and `app.js` are both names you will encounter a lot as a web developer. Better get used to them.

**Task:** Next

## Assignment 2: Linking JavaScript and HTML Together

Great, you have your files ready. Now, we need to link them together.

If you remember, you had to do the same thing when you learned how to write CSS on the desktop. To see the effect of your CSS on the HTML, you needed to include the separate CSS file with a `link` tag. Same deal here. To be able to interact with the JS file, you need to include it in the `index.html`.

**Note**: Why? Because browsers can only render HTML files. You can’t send a naked JS file to the user. You need to send an HTML file that contains the JS you want to run.

There are two steps you need to take now:

1) Add the standard HTML boilerplate to `index.html`.
2) Then link `app.js`.

### Adding the HTML boilerplate

Copy this code into your index.html file:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Get-us-home Calculator</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <h1>This is the index.html file</h1>
</body>
</html>
```

And save your file.

**Note:** The `h1` tag is optional, but useful. When you open the file, you can immediately see that browser loaded your HTML if the text appears on screen. If not, you will know that something is wrong.

### Linking the JavaScript

To do this, you need the `script` tag in HTML. It behaves much the same way as the `link` tag you used for CSS but it’s specifically designed for including JavaScript.

Add this line just before the closing `</head>` tag:

```html
<script src=”app.js”></script>
```

And that’s it. Save your HTML and proceed. In the next assignment, we’re going to check if the linking was successful.

**Note:** In most cases, the `script` tags go inside the `head` to ensure the JavaScript is properly loaded before the browser loads the rest of the HTML. There are some exception to this rule, but they are not relevant right now. We'll talk about them in later projects.

**Task:** Next

## Assignment 3: Checking the connection 

Let’s see if we successfully linked together our HTML and JavaScript files.

First, we need something in the `app.js` file that we can test. A `console.log` statement would be perfect in this case. If it prints a message in the console when we load `index.html`, we will know that the link works.

Open up `app.js` and add this single line to the file: 

```javascript
console.log('The calculator is loaded and ready.');
```

Save the file, and open up index.html in your browser.

**Note:** If you use Brackets, you can use the Live Preview feature, but be aware that it will only load your changes if you save the `.js` file you're working on. It can't do the seamless see-it-as-you-type changes that you saw with HTML and CSS.

### In the browser

If everything went well, you should see the “This is the index.html file” heading and nothing else.

{TODO: Insert a GIF that shows opening up the index.html file}

Go ahead, and open up the console. 

**Note:** In Chrome, you can use the Ctrl + Shift + J shortcut on Windows, or the Cmd + Alt + I shortcut on a Mac. If you use another browser, you have to find the console by yourself.

{TODO: Insert a GIF that shows opening the console}

And there you go, there is the happy little statement, printed by our `app.js` file. Now we have both a place to write our code and a place to view the changes.


**Task:** Next

# Lesson 3

## Assignment 1: Thinking Before Coding

Super cool, we can actually code now.

We're going to approach this like a programmer would do.

1) First, we are going to think through the problem and jot down some notes into our editor.
2) Then we will turn those notes into actual code.

Ready? Then let's start.

**Task:** Next

## Assignment 2: First Comments

Our ultimate goal is to figure out how much fuel should we offload to get below the weight limit, but still be able to fly home. Let's call this variable `fuelToOffload`.

As we have discussed earlier, we can calculate `fuelToOffload` by taking the maximum capacity of the shuttle's tank and subtracting the amount of fuel that is absolutely needed to get back to Earth. Or, with variable names:

```javascript
fuelToOffload = tankCapacity - requiredFuel
```

Open up your `app.js` file and add this line as a comment, just below the `console.log` statement:

```javascript
console.log('The calculator is loaded and ready.');

// fuelToOffload = tankCapacity - requiredFuel
```

Great. Let's add some other comments as well that collects our thinking so far:

```javascript
console.log('The calculator is loaded and ready.');

// Things we need to figure out:
  // fuelToOffload:
    // The amount we will offload to get below the weight limit, but still be able to fly home.
    // fuelToOffload = tankCapacity - requiredFuel
  // tankCapacity: Maximum capacity of the shuttle's tank.
  // requiredFuel: Minimum fuel needed to get back to Earth.  
```

Awesome. Start getting into the habit of taking notes as a first step of problem solving. Trust me, it will be extremely helpful when you start to write the actual code.

**Task:** Next

## Assignment 3: Finishing the Notes

Okay, we took our comments, back to the task at hand.

To be able to answer the amount of fuel to offload, we need to know the minimum amount of fuel we need to get back to Earth. Thankfully, we already figured out the mathematical formula for that:

```javascript
Required fuel = Total distance to travel * Average fuel consumption
```

Where the average fuel consumption is `X liter / 100 km`.

We only need to turn this into an equation with variable names:

```javascript
requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100)
```

**Note:** What's with breaking up the average fuel consumption, you ask? That parameter is a calculated number: `X liters over 100 km`. What we don't know, is the `X liters` part. That clearly has to be a variable. But the `100 km` part will not change, it's a constant. We could make it into it's own variable but it would mean more hassle than gain. So this is one of those rare occasions, when hardcoding a number seems like a good decision.

Let's add this equation to our notes in `app.js`:

```javascript
console.log('The calculator is loaded and ready.');

// Things we need to figure out:
  // fuelToOffload:
    // The amount we will offload to get below the weight limit, but still be able to fly home.
    // fuelToOffload = tankCapacity - requiredFuel
  // tankCapacity: Maximum capacity of the shuttle's tank.
  // requiredFuel:
    // Minimum fuel needed to get back to Earth.
    // requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100)
```

If you take a look at those comments, there's a method to them:

- Every variable is named according to programming standards.
- Variables that are calculated, have their equations written out.

This will be hugely helpful in just a moment. 

Okay, we have everything we need, let's turn our notes into a program.

**Task:** Next

## Assignment 4: Coding the First Step

Open up `app.js` and jot down the two easy steps our program will take:

```javascript
// Step 1: Calculate required fuel.
// Step 2: Calculate fuel to offload.
```

Whenever we want to bundle up a chunk of code that does a specific task, a function is the perfect answer. Go ahead and wrap your two steps in a function:

```javascript
function calculateFuelToOffload() {
  // Step 1: Calculate required fuel.
  // Step 2: Calculate fuel to offload.
}
```

**Note:** I named the function `calculateFuelToOffload` because that is the ultimate goal of our calculator. Remember to always name your variables and functions according to their purpose.

Let's take care of step one. You already have that mostly written out in line 9, in your notes. Simply grab and insert it:

```javascript
function calculateFuelToOffload() {
  // Step 1: Calculate required fuel.
  requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100)
  // Step 2: Calculate fuel to offload.
}
```

Let's put a variable declaration in front and a semi-colon at the end to be syntactically correct:

```javascript
function calculateFuelToOffload() {
  // Step 1: Calculate required fuel.
  var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
  // Step 2: Calculate fuel to offload.
}
```

Almost done, we just have to declare `totalDistanceToTravel` and `averageLitersOverHundred` somehow. Remember, these are the variables we don't know yet, they will come from Jack and Jill. Their value will have to be passed into the function.

Well, that's exactly what function parameters are for:

```javascript
function calculateFuelToOffload(totalDistanceToTravel, averageLitersOverHundred) {
  // Step 1: Calculate required fuel.
  var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
  // Step 2: Calculate fuel to offload.
}
```

And that's it, we are done with the first step. Now, we need to test if it works. To do that, we would need to print the result of the calculation. Let's add a quick `console.log` statement to take care of that:

```javascript
function calculateFuelToOffload(totalDistanceToTravel, averageLitersOverHundred) {
  // Step 1: Calculate required fuel.
  var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
  console.log("Required fuel: " + requiredFuel + ' L');
  // Step 2: Calculate fuel to offload.
}
```

Okay, now our assumption is that when we call the function, it will print the correct amount in the console. Let's see if we are right.

**Task:**  Next

## Assignment 5: Testing the First Step

When you are working in a desktop editor, you have to take a few extra steps when previewing your work. In case of developing JavaScript on the desktop, here are the steps you need to take:

1) Link your JavaScript file to an HTML file (we already did this.)
2) Open the HTML file in your browser.
3) Open the developer tools and switch to the console.

Please do that now with our current project.

### Open your index.html file in your browser

{TODO: Insert a GIF that shows opening index.html}

**Note:** Here's how that `h1` came in handy. We can instantly know that the HTML loaded fine because "This is the index.html file" text showed up.

### Open up the console

If you are on Chrome, press `Ctrl` + `Shift` + `J` (on Windows), or `Cmd` + `Alt` + `I` (on a Mac.) This will bring up the developer tools.

Choose the "Console" tab. If everything went well and your JavaScript is linked correctly, you should see a message already printed to the console: `The calculator is loaded and ready.`

{TODO: Insert a GIF that shows switching to the console.}

### Check the function you wrote

Here is the moment of truth. We will call our `calculateFuelToOffload` function and see if it works. 

You will need some dummy data that you can pass into the function.

Let's choose something that is easy to verify. Let's say we want to travel 600 kilometers, and our test shuttle consumes 5 liters of fuel over a 100 kilometers. Call the function in the console, and pass in these parameters:

```javascript
calculateFuelToOffload(600, 5);
```

If everything went well, you should get back the message: `Required fuel: 30 L`.

Congratulations, the first part of the calculator is done.

**Task:** Next

## Assignment 6: Solving the Second Step

Step one is done, it's time to write step two. Go back to `app.js` and take a look at what you have.

```javascript
console.log('The calculator is loaded and ready.');

// Things we need to figure out:
  // fuelToOffload:
    // The amount we will offload to get below the weight limit, but still be able to fly home.
    // fuelToOffload = tankCapacity - requiredFuel
  // tankCapacity: Maximum capacity of the shuttle's tank.
  // requiredFuel:
    // Minimum fuel needed to get back to Earth.
    // requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100)

function calculateFuelToOffload(totalDistanceToTravel, averageLitersOverHundred) {
  // Step 1: Calculate required fuel.
  var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
  console.log("Required fuel: " + requiredFuel + ' L');
  // Step 2: Calculate fuel to offload.
}
```

Well, step 2 should be very easy, since you already did most of the work and the path to take is very similar to step 1. 

You have the equation you need on line 6, copy it into your function just below your comment:

```javascript
function calculateFuelToOffload(totalDistanceToTravel, averageLitersOverHundred) {
  // Step 1: Calculate required fuel.
  var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
  console.log("Required fuel: " + requiredFuel + ' L');
  // Step 2: Calculate fuel to offload.
  fuelToOffload = tankCapacity - requiredFuel
}
```

Make it syntactically correct with a `var` and a semi-colon:

```javascript
function calculateFuelToOffload(totalDistanceToTravel, averageLitersOverHundred) {
  // Step 1: Calculate required fuel.
  var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
  console.log("Required fuel: " + requiredFuel + ' L');
  // Step 2: Calculate fuel to offload.
  var fuelToOffload = tankCapacity - requiredFuel;
}
```

As in the previous step, you will need access to the `tankCapacity`, add it as a parameter. You will also need a visible output for the result, use a `console.log` statement:

```javascript
function calculateFuelToOffload(totalDistanceToTravel, averageLitersOverHundred, tankCapacity) {
  // Step 1: Calculate required fuel.
  var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
  console.log("Required fuel: " + requiredFuel + ' L');
  // Step 2: Calculate fuel to offload.
  var fuelToOffload = tankCapacity - requiredFuel;
  console.log("Fuel to offload: " + fuelToOffload + ' L');
}
```

Save your changes and go over to the browser. Reload `index.html` (otherwise your changes won't take effect). Open up the console and test the upgraded function:

```javascript
calculateFuelToOffload(600, 5, 100);
```

If everything went well, you should get this message:

```javascript
// Required fuel: 30 L
// Fuel to offload: 70 L
```

Congratulations, the logic of the app is done. In the next lesson, we'll spend some time making it usable for non-technical people, like Jack and Jill, so they won't have to use the console.

**Task:** Next