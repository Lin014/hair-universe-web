import $ from "jquery";

$("#scalp-class-link1").on("mouseover", () => {
  $("#hairpediaAnimation1").css("transform", "translateX(250px)");
});

$("#scalp-class-link1").on("mouseout", () => {
  $("#hairpediaAnimation1").css("transform", "translateX(0)");
});

$("#scalp-class-link2").on("mouseover", () => {
  $("#hairpediaAnimation2").css("transform", "translateX(350px) translateY(250px)");
});

$("#scalp-class-link2").on("mouseout", () => {
  $("#hairpediaAnimation2").css("transform", "translateX(0) translateY(0px)");
});

$("#scalp-class-link3").on("mouseover", () => {
  $("#hairpediaAnimation3").css("transform", "translateX(-300px) translateY(250px)");
});

$("#scalp-class-link3").on("mouseout", () => {
  $("#hairpediaAnimation3").css("transform", "translateX(0) translateY(0px)");
});