var acc = document.getElementsByClassName("accardion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
      let accard = this.children;
      
      accard[1].classList.toggle("item-active"); 
      this.nextElementSibling.classList.toggle('show');
  });
}