/**
 * Outputs a given message to the console.
 * @param {string} message - The message to output.
 * @returns {void}
 */
// Function declaration using arrow function
const displayMessage = (message) => {
  console.log(message);
};

/**
* Makes the displayMessage function available as a module.
* @module displayMessage
*/
// Export the function as the default module export
module.exports = displayMessage;
