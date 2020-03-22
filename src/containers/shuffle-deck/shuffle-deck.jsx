// User can see a panel containing a text box the // user can enter the number of rounds into, three output text boxes to contain the starting time, ending time, and total time of the test, and two buttons — ‘JS Random’, ‘Xorshift’.
// User can enter a number from 1 to 10,000 to specify the number of times (or rounds) the selected random number is to be executed.
// User can click one of the three buttons to start the evaluation of the selected random number algorithm. The random number algorithm will be executed for the number of rounds entered by the // user above.
// User can see a warning message if number of rounds has not been entered, if it is not within the range 1 to 10,000, or if it is not a valid integer.
// User can see a tabular output area where the results of each algorithm are displayed — algorithm name, time started, time ended, and total time.
// User can see a warning dialog with a ‘Cancel’ and a ‘OK’ button if the number of rounds is changed before all three tests have been run.
// User can click the ‘Cancel’ button in the warning dialog to dismiss the dialog with no changes.
// User can click the ‘OK’ button in the warning dialog to clear the output area and close the warning dialog.
// User can see a third algorithm button — ‘WELL512a.c’.
// Developer should review the output and determine why the fastest algorithm is faster than the slowest algorithm.

// https://en.wikipedia.org/wiki/Xorshift

// https://developer.mozilla.org/en-US/docs/Web/API/Console/time

// https://medium.com/chingu/using-the-chrome-devtools-audit-feature-to-measure-and-optimize-performance-part-1-868a20bbfde8

// https://medium.com/chingu/using-the-chrome-devtools-audit-feature-to-measure-and-optimize-performance-part-2-af4a78bc6cf0