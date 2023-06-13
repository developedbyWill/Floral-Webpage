$(document).ready(function () {
  // This code will add a smooth scroll to the header when the user clicks on the logo
  $("#header a").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
