//albums section
function albumDisplay(x){
    document.getElementsByClassName('albimg')[x].style.display="block";
    document.getElementsByClassName('color')[x].style.color="orange";
    for (var i=0;i < 5; i++) {
      if(i!=x){
         document.getElementsByClassName('albimg')[i].style.display="none";
         document.getElementsByClassName('color')[i].style.color="black";
      }
    }
  }
  //  //active navbar
  // let home = document.querySelector("#home");
  // let about = document.querySelector("#about");
  // let services = document.querySelector("#services");
  // let albums = document.querySelector("#albums");
  // let contact = document.querySelector("#contact");
  // window.addEventListener("scroll",()=>{
  //   var windo = window.pageYOffset;
  //   // console.log("Window y offset :"+  windo);
  //   if (about.offsetTop <= windo && services.offsetTop > windo) {
  //   //   console.log("about");
  //     document.querySelector(".about").setAttribute("id","active");
  //     document.querySelector(".services").removeAttribute("id","active");
  //     document.querySelector(".albums").removeAttribute("id","active");
  //     document.querySelector(".contact").removeAttribute("id","active");
  //     document.querySelector(".home").removeAttribute("id","active");
  //   }
  //   else  if (services.offsetTop <= windo && albums.offsetTop > windo) {
  //   //   console.log("services");
  //     document.querySelector(".services").setAttribute("id","active");
  //     document.querySelector(".about").removeAttribute("id","active");
  //     document.querySelector(".albums").removeAttribute("id","active");
  //     document.querySelector(".contact").removeAttribute("id","active");
  //     document.querySelector(".home").removeAttribute("id","active");
  //   }
  //   else  if (albums.offsetTop <= windo && contact.offsetTop > windo) {
  //   //   console.log("albums");
  //     document.querySelector(".albums").setAttribute("id","active");
  //     document.querySelector(".services").removeAttribute("id","active");
  //     document.querySelector(".about").removeAttribute("id","active");
  //     document.querySelector(".contact").removeAttribute("id","active");
  //     document.querySelector(".home").removeAttribute("id","active");
  //   }
  //   else  if (contact.offsetTop <= windo ) {
  //   //   console.log("contact");
  //     document.querySelector(".contact").setAttribute("id","active");
  //     document.querySelector(".services").removeAttribute("id","active");
  //     document.querySelector(".albums").removeAttribute("id","active");
  //     document.querySelector(".about").removeAttribute("id","active");
  //     document.querySelector(".home").removeAttribute("id","active");
  //   }
  //   else {
  //   //   console.log("home");
  //     document.querySelector(".home").setAttribute("id","active");
  //     document.querySelector(".services").removeAttribute("id","active");
  //     document.querySelector(".albums").removeAttribute("id","active");
  //     document.querySelector(".contact").removeAttribute("id","active");
  //     document.querySelector(".about").removeAttribute("id","active");
  //   }
  // })    
  // fixed header
  const body = document.querySelector("body");
  const navbar = document.querySelector(".navbar");
  const menu = document.querySelector(".menu-list");
  const menuBtn = document.querySelector(".menu-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabledScroll");
  }
  cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabledScroll");
  }

  window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
  }

  function animateValue(id, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start? 1 : +1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
}

animateValue("awards", 0, 12, 5000);
animateValue("projects", 0, 50, 5000);
animateValue("clients", 0, 200, 5000);
animateValue("shoots", 0, 1200, 3500);  


   // Add smooth scrolling to all links
$("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});
  //   $(window).bind('scroll', function() {
  // var currentTop = $(window).scrollTop();
  // var elems = $('.scrollspy');
  // elems.each(function(index){
  //   var elemTop   = $(this).offset().top;
  //   var elemBottom  = elemTop + $(this).height();
  //   if(currentTop >= elemTop && currentTop <= elemBottom){
  //     var id    = $(this).attr('id');
  //     var navElem = $('a[href="#' + id+ '"]');
  // navElem.parent().addClass('activenav').siblings().removeClass( 'activenav' );
  //   }
  // })
// }); 