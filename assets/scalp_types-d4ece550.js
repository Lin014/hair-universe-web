import"./main-5072a447.js";import{$ as e}from"./jquery-a117016a.js";e("#answer-card1").css("display","none");e("#answer-card2").css("display","none");e("#submit-btn1").on("click",()=>{var s=e('input[name="exampleRadios"]:checked').val();s==="option1"?e("#answer1").text("油性"):s==="option2"?e("#answer1").text("中性"):s==="option3"&&e("#answer1").text("乾性"),e("#answer-card1").css("display","block")});e("#submit-btn2").on("click",()=>{e("#answer-card2").css("display","block")});
