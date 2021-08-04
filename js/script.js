/**
 * The popup function is a function that changes the css properties
 * of two different dom elements using the style function.Targeting
 * the documents elements by Id and using the style function, this
 * changes the two elements display property value..
 */
// Decalres the popup variable and initializes it with an arrow function...
const popup = () => {
  // Changes the display property of the element with an Id of popup to block...
  document.getElementById("popup").style.display = "block";
  // Changes the display property of the element with an Id of mobile-menu to none...
  document.getElementById("mobile-menu").style.display = "none";
};

/**
 * The popdown function is a function that changes the css properties
 * of two different dom elements using the style function.Targeting
 * the documents elements by Id and using the style function, this
 * changes the two elements display property value..
 */
// Decalres the popdown variable and initializes it with an arrow function...
const popdown = () => {
  // Changes the display property of the element with an Id of popup to none...
  document.getElementById("popup").style.display = "none";
  // Changes the display property of the element with an Id of mobile-menu to none...
  document.getElementById("mobile-menu").style.display = "none";
};

/**
 * The mobile_menu function is a funciton uses an if statement to
 * change the css properties of three different dom elements using
 * the style function. Targeting the documents elements by Id and
 * using the style function, this changes the three elements
 * display property value if selected dom's element's display value
 * is equal to block...
 */
// Decalres the popdown variable and initializes it with an arrow function...
const mobile_menu = () => {
  // Decalres the element variable and initializes it with dom element with an Id of mobile-menu...
  const element = document.getElementById("mobile-menu");
  // Decalres the open_icon variable and initializes it with dom element with an Class of mobile-open...
  const open_icon = document.getElementsByClassName("mobile-open");
  // Decalres the open_icon variable and initializes it with dom element with an Class of mobile-close...
  const close_icon = document.getElementsByClassName("mobile-close");
  /**
   * This if statement checks the element's display property value
   * to see if it equals to a string value of block. If the if
   * statement is true, the element, open_icon, and close_icon
   * display properties will change using the style function to
   * close the mobile menu. Else, the element, open_icon, and close_icon
   * display properties will change using the style function to
   * close the mobile menu...
   */
  if (element.style.display === "block") {
    // If True:
    // Changes the display property of the element variable to none...
    element.style.display = "none";
    // Changes the display property of the open_icon variable to block...
    open_icon.style.display = "block";
    // Changes the display property of the open_icon variable to none...
    close_icon.style.display = "none";
  } else {
    // If False:
    // Changes the display property of the element variable to block...
    element.style.display = "block";
    // Changes the display property of the open_icon variable to none...
    open_icon.style.display = "none";
    // Changes the display property of the close_icon variable to block...
    close_icon.style.display = "block";
  }
};
