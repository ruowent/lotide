const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([1,2,4]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");