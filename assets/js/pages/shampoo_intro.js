import $ from "jquery";

$("#shampoointro-class-link1").on("mouseover", () => {
  $("#shampoointroAnimation1").css("transform", "translateX(150px) translateY(200px)");
});

$("#shampoointro-class-link1").on("mouseout", () => {
  $("#shampoointroAnimation1").css("transform", "translateX(0) translateY(0px)");
});

$("#shampoointro-class-link2").on("mouseover", () => {
  $("#shampoointroAnimation2").css("transform", "scale(1.3) translateX(310px) translateY(160px)");
});

$("#shampoointro-class-link2").on("mouseout", () => {
  $("#shampoointroAnimation2").css("transform", "translateX(0) translateY(0px)");
});

$("#shampoointro-class-link3").on("mouseover", () => {
  $("#shampoointroAnimation3").css("transform", "scale(0.7) translateX(-300px) translateY(400px)");
});

$("#shampoointro-class-link3").on("mouseout", () => {
  $("#shampoointroAnimation3").css("transform", "translateX(0) translateY(0px)");
});