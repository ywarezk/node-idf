## Node Introduction

### What is Node

Node is Javascript runtime.

### lets build our hello world

### Javascript

Since node is Javascript runtime we have to understand javascript
some characteristics:

- Event driven
- We are going to have a lot of async code
- Single Threaded*
- JIT compiled

benchmarking: https://medium.com/@mihaigeorge.c/web-rest-api-benchmark-on-a-real-life-application-ebb743a5d7a3

### Node structure

- V8 - Javascript Engine
- C++ Node API - closing gaps between V8 and Operating System, we have multithreading here
- Event Loop - Queue of callbacks to push to the V8 for execution, can only push when the V8 is empty

### REPL

Read-Evaluate-Process-LOOP

### Video

This lecture is also available in video in the following url:

https://youtu.be/Cm02C7-YErk

### Summary

Node is Fast,
Really simple learning curve and the single thread of development makes the development even easier.
Prefer to use mostly async code when possible