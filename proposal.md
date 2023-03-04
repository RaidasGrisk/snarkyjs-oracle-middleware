## Title
Express.js Middleware for Mina Oracles

## Pitch
The objective of this proposal is to simplify the process of building Mina oracles by automating the encoding and signing of data elements.

The success of most of zkApps relies heavily on the ability to consume data from external sources. While creating an oracle may be relatively simple by following a dedicated tutorial, some of the concepts involved may be unfamiliar and new to many developers. By abstracting away some of the details, we can simplify the process and make it more accessible to a wider range of developers (or at least same them some time by simplifying it).

## Problem
Building an oracle currently requires developers to:
1. create a server with an endpoint,
2. fetch data from external sources,
3. encode the data elements as snarkyJS objects,
4. sign an array containing these elements using a private key, and
5. return the data together with a signature.

While steps 1-2 and 5 are very familiar to most of the developers. Steps 3 and 4 can be a barrier for some.

## Solution
Create an express.js middleware that automates steps 3 and 4 of the current process. The middleware will encode the data elements as snarkyJS objects, sign the array containing these elements using the developer's private key, and add the signature the response object. Here's a mock example of how it would work: https://i.imgur.com/7ngitau.png

## Architecture
The middleware will be compatible with existing express.js applications, and it will be designed to handle simple JSONs containing key-value pairs without nested objects. It will support primitive data types such as bool, char, and int.

URL to github example

## Standard Scope
The standard scope of this project is to code and explore the options for implementing the middleware.

The solution is limited to the following scope:
1. Simple JSONs that only contain key-value pairs without nested objects, i.e., non-complex type JSONs.
2. Primitive types, such as bool, char, int, excluding strings and other complex types.

## Standard milestones
I aim to deliver a working middleware as an npm package that can handle simple JSONs and primitive data types. The milestones include:
1: Research and development of the middleware architecture
2: Coding of the middleware
3: Testing and debugging of the middleware
4: Delivery of the middleware as an npm package

## Risks
While I think that I can deliver a working middleware that can handle simple JSONs and primitive data types within the timeline and budget, there are some risks associated with the project:
1. Complexity of non-primitive data types: creating a middleware that can handle non-primitive data types will be more complex and time-consuming. I'm not aiming to do this at this point, but may consider it in the future.
2. Compatibility with complex JSONs: The middleware will not be compatible with complex JSONs containing nested objects or arrays. I will test the middleware thoroughly to ensure that it works as expected with simple JSONs.

Note that the proposal does not include developing a solution to address the above issues.

## Experience
I've been developing software for around 6 years. I have some experience with Mina, including developing zkApps during the beta testers program and zkIgnite cohort 0. That is where I got this idea from!

You can find more information about me here: https://raidasgrisk.github.io/
