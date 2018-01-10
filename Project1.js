/**
 *  @author Birdsall, Trevor (trevorbirdsall16@gmail.com)
 *  @version 0.0.1
 *  @summary Code of Project 1 || created 01.09.2017
 *  @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

// ----Above this line is Section 1, comment header block & pragmas/library calls----

let var1, var2;
const CONST1 = 'Something';

// ----Above this line is Section 2, global variable declarations & global constant declarations/assignments-----

/**
 * The dispatch method for our program
 * @returns {null}
 */
function main() {
    setVar1();
    setVar2();
}

main()

// ----Above this line is Section 3, dispatch method & call to dispatch method----

/**
 * var1 mutator
 * @returns {null}
 */
function setVar1() {
    var1 = PROMPT.question('\nPlease enter value: ');
}

/**
 * var2 mutator
 * @returns {null}
 */
function setVar2() {
    var2 = 0;
}

// ----Above this line is Section 4, mutator & worker/utility methods----

/*
 Demonstrating very basic code layout following a four-section model for ease of learning.
 Topics: Creating a new project, code layout