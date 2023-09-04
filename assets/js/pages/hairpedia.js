import $ from "jquery";

$("#scalp-class-link1").on("mouseover", () => {
  $("#hairpediaAnimation1").css("transform", "translateX(250px)");
});

$("#scalp-class-link1").on("mouseout", () => {
  $("#hairpediaAnimation1").css("transform", "translateX(0)");
});
