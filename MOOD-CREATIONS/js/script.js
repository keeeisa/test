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
var form = document.querySelector("#contact-form");
console.log(form);
  form.onsubmit = function(e){
    e.preventDefault()
    alert("Its Alive!")

    var input_1 = document.querySelector("#js-input-1");
    console.log(input_1.value);

    var input_2 = document.querySelector("#js-input-2");
    console.log(input_2.value);

    var textarea = document.querySelector("#js-textarea");
    console.log(textarea.value);

    if(input_1.value === ""){
      console.error("Kļūda!");
    };
    if(input_2.value === "" || input_2.value.indexOf("@") === -1){
      console.error("Kļūda!");
    };
    if(textarea.value === ""){
      console.error("Kļūda!");
    };
    // var str = input_2.value;
    // var n = str.includes("@");
};
