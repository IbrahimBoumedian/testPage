// Add class animation to headings
const headings = Array.from(document.querySelectorAll(".special-heading h2 , .special-heading p"));
headings.forEach((item, index) => {
  item.className+= ` wow animate__animated  animate__fadeInDown`;
  item.setAttribute('data-wow-duration' , '.7s ')
  
  let itemTag = item.tagName.toLowerCase() ; 
  if(itemTag === "p") {
    item.setAttribute('data-wow-delay' ,  '.2s')
  }
});

