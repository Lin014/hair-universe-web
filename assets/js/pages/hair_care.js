import $ from "jquery";

$("#haircare-class-link1").on("mouseover", () => {
  $("#haircareAnimation1").css("transform", "translateX(210px)");
});

$("#haircare-class-link1").on("mouseout", () => {
  $("#haircareAnimation1").css("transform", "scale(1.3) translateX(0)");
});

$("#haircare-class-link2").on("mouseover", () => {
  $("#haircareAnimation2").css("transform", "scale(1.3) translateX(250px) translateY(180px)");
});

$("#haircare-class-link2").on("mouseout", () => {
  $("#haircareAnimation2").css("transform", "translateX(0) translateY(0px)");
});