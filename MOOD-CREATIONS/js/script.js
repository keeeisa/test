// $(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });
function $(selector){
  return document.querySelector(selector);
}
function $$(selector){
  return document.querySelectorAll(selector);
}
var form = $("#contact-form");
console.log(form);
  form.onsubmit = function(e){
    e.preventDefault()
    alert("Its Alive!")

    var inputs = $$(".input");
    for (var i = 0; i < inputs.length; i++){
      console.log(inputs[i].value);

      if(inputs[i].value.trim() === ""){
      console.error("Kļūda");
      }
    };

    // var input_1 = $("#js-input-1");
    // console.log(input_1.value);
    //
    // var input_2 = $("#js-input-2");
    // console.log(input_2.value);
    //
    // var textarea = $("#js-textarea");
    // console.log(textarea.value);
    //
    // if(input_1.value.trim() === ""){
    //   console.error("Kļūda!");
    // };
    // if(input_2.value === "" || input_2.value.indexOf("@") === -1){
    //   console.error("Kļūda!");
    // };
    // if(textarea.value === ""){
    //   console.error("Kļūda!");
    // };
  };
