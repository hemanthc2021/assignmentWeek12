let button = document.getElementById("changeTextButton");
let header = document.getElementById("header");
let text = document.getElementsByClassName("text");
let listItems = document.getElementsByTagName("li");

button.addEventListener("click", function () {
  //1) Change the text of the heading (h1) element to "Text Changed!".  
  header.textContent = "Text Changed!"; 
  //2) Change the text color of all paragraphs with the class text to blue.
  for (a = 0; a < text.length; a++) {
    text[a].style.color = "blue";      
  }
  //3) Log the text content of each li element to the console. 
  //5) Change the text color of all li elements to green
  for (a = 0; a < listItems.length; a++) {
    console.log(listItems[a].textContent);
    listItems[a].style.color = "green";
  }
  //4) Change the background color of the first li element to yellow. 
  listItems[0].style.backgroundColor = "yellow";
});
