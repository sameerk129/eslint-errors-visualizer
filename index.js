#!/usr/bin/env node

// Grab the provided args
const [...args] = process.argv;

console.log(`These are the arguments ${args}`);

exports.printMsg = function() {
  console.log(`These are the arguments ${args}`);
};
