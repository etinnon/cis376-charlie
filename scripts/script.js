$(document).ready(function () {
  //click on an image, get a message

  $("#dogeOne").click(function () {
    $("#outputDiv").hide();

    console.log("user clicked dogeo one");
    $("#outputMsg").text("you win! so much wow slay");
    $("#outputDiv").toggle().fadeIn(5000);
  });

  $("#dogeTwo").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked dogeTwo ");
    $("#outputMsg").text("you lose sorry bro </3");
    $("#outputDiv").toggle();
  });
});