/*
This is a variable with global scrop that will be used to keep
track of what accordian content is currently open. We initially
set it to the first item in our accordian content which has the
id of item-1-content.
*/
let openAccordianContent = document.getElementById("item-1-content");

function toggle(id) {
    // Remove the class open from the current open accordian content
    openAccordianContent.classList.remove("open");
    // Grab the accordian content element using the id parameter
    let accordianContent = document.getElementById(id);
    // Add the class open to accordian content element
    accordianContent.classList.add("open");
    /*
    Update the openAccordianContent variable with the new open
    accordian content element
    */
    openAccordianContent = accordianContent;
}