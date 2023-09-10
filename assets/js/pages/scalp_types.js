import $ from "jquery";

$("#answer-card1").css("display", "none");
$("#answer-card2").css("display", "none");

$("#submit-btn1").on("click", () => {
  var selectedValue = $('input[name="exampleRadios"]:checked').val();
  // 根据选中的值更改 answer1 的内容
  if (selectedValue === "option1") {
    $("#answer1").text("油性");
  } else if (selectedValue === "option2") {
    $("#answer1").text("中性");
  } else if (selectedValue === "option3") {
    $("#answer1").text("乾性");
  }

  $("#answer-card1").css("display", "block");
});

$("#submit-btn2").on("click", () => {
    $("#answer-card2").css("display", "block");
});
