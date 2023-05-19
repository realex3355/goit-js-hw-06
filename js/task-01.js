 const totalItems = document.querySelectorAll(".item");
 console.log(`Number of categories: ${totalItems.length}`);
 totalItems.forEach((element) => {
   console.log(`Category: ${element.firstElementChild.textContent}`);
   console.log(`Elements: ${element.querySelectorAll("li").length}`);
   
 });  
