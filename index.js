#!/usr/bin/env node

// Grab the provided args
const [...args] = process.argv;

exports.printMsg = function() {
  console.log(`These are the arguments ${args}`);
};
