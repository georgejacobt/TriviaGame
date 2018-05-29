
let timeRemain = 10;
let timeOutFlag = false;
let responseReceived = false;
let correctResponse ="";
let totalRight = 0;
let startDiv = $("#start");
let wrongResponse = 0;
let clickTrack = 4;
let imageMoveIndex = 0;



function showQuiz(){
    $("#start").css("display", "none");
    $("#quizArea").css("display", "block");
    $("#game").css("display", "block");
    $("#again").css("display","none");
    $("#gifs").css("display","none");

   questionDiv.html("");
        $("#correct").css("display", "none");
        $("#correct").html("");
        $("#incorrect").css("display", "none");
        $("#incorrect").html("");
        $(".message2").html(" ");
        $(".message3").html(" ");
        messageDiv2.text(" ");
        $("#rightAnswer").text(" ");

}



  let myTimer = "";
  function fireTimer(){
    myTimer = setInterval(timer,1000); 
  }
  //fireTimer();
  
function Questions (question,a,b,c,d,link,corerctAnswer){
    this.question = question;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.link = link
    this.corerctAnswer = corerctAnswer;
  }


var q1 = new Questions ("What is my Name?",
                        "George",
                        "Tina",
                        "Timothy",
                        "Sachin",
                        "../TriviaGame/assets/images/George.gif",
                        "a"
)

var q2 = new Questions ("Where is my Home?",
                        "Norway",
                        "Iceland",
                        "Houston",
                        "Kochi",
                        "../TriviaGame/assets/images/houston.gif",
                        "c"
)

var q3 = new Questions ("What is my son's name?",
                        "JJ Watt",
                        "Timothy",
                        "Sachin ",
                        "James",
                        "../TriviaGame/assets/images/timothy.gif",
                        "b"
)

var q4 = new Questions ("Where in Houston do I live?",
                        "Spring",
                        "Richmond",
                        "Kingwood",
                        "Pearland",
                        "../TriviaGame/assets/images/richmond.gif",
                        "b"
)

let questionArray =[q1,q2,q3,q4];
let questionArrayIndex = 0;



var timediv = $("#timeRemain");
var questionDiv = $("#question");
var responseDiva = $("#a");
var responseDivb = $("#b");
var responseDivc = $("#c");
var responseDivd = $("#d");
var sectionsDiv = $("#options");
var messageDiv = $(".message");
var messageDiv2 = $(".message2");
let rightAnswer = "";


//firstTime();

function firstTime(){

questionDiv.text(questionArray[questionArrayIndex].question);
responseDiva.text(questionArray[questionArrayIndex].a);
responseDivb.text(questionArray[questionArrayIndex].b);
responseDivc.text(questionArray[questionArrayIndex].c);
responseDivd.text(questionArray[questionArrayIndex].d);
correctResponse = questionArray[questionArrayIndex].corerctAnswer;

for (const prop in questionArray[questionArrayIndex]){
    if ( correctResponse === prop){
     rightAnswer = questionArray[questionArrayIndex][prop];
    }
}
}

$("#start").on("click", function(){

    //alert("ok");
    showQuiz();
    document.getElementById('audio').play();
    setTimeout(firstTime, 4000);
    setTimeout(fireTimer, 4000);

      

    
    


});

$("#again").on("click", function(){

    //alert("ok");
    resetQuiz();
    showQuiz();
    firstTime();
    fireTimer();
    $(".message2").text(" ");
    


});

function reset (){

       timeOutFlag = true;
        questionArrayIndex += 1;
        //console.log(timeOutFlag);
        clearInterval(myTimer);
        timeRemain = 11;
        timeOutFlag = false;
        
        
       

}


function resetQuiz(){
    questionArrayIndex = 0;
    correctResponse ="";
 totalRight = 0;
 responseReceived = false;
 wrongResponse =0;
clickTrack = 4;
imageMoveIndex =0;


}

function displayNewQuestion(){

    if (questionArrayIndex < questionArray.length){
        fireTimer();
        questionDiv.text(questionArray[questionArrayIndex].question);
        responseDiva.text(questionArray[questionArrayIndex].a);
        responseDivb.text(questionArray[questionArrayIndex].b);
        responseDivc.text(questionArray[questionArrayIndex].c);
        responseDivd.text(questionArray[questionArrayIndex].d);
        messageDiv.text(" ");
        messageDiv2.text(" ");
        $(".message3").text(" ");
        $("#gifs").css("display","none");
        correctResponse = questionArray[questionArrayIndex].corerctAnswer;
        responseReceived = false;

        for (const prop in questionArray[questionArrayIndex]){
            if ( correctResponse === prop){
                rightAnswer = questionArray[questionArrayIndex][prop];
            }
        }


    } else {
        $("#again").css("display", "block");
       // sectionsDiv.text("Game Over - Start Again?");
       messageDiv.text(" ");
       messageDiv2.text(" ");
       $("#timeRemain").text(" ");
       $("#rightAnswer").text(" ");
       $(".message3").text(" ");
        questionDiv.html("All Done! Heres how you did!!");
        $("#correct").css("display", "block");
        $("#correct").html("Correct Answers:"+" "+ totalRight);
        $("#incorrect").css("display", "block");
        $("#incorrect").html("Incorrect Answers:"+" "+ wrongResponse);
        $("#unanswered").css("display", "block");
        $("#unanswered").html("Unanswered Questions:"+" "+ clickTrack);

    }

    imageMoveIndex = imageMoveIndex +1;


}

  


function timer(){
    if (timeRemain > 1){
    timeRemain = timeRemain - 1;
    timediv.text(timeRemain);
    
    }
    else {
        responseDiva.text(" ");
        responseDivb.text(" ");
        responseDivc.text(" ");
        responseDivd.text(" ");
        messageDiv.text("Sorry Time Out!");
        $("#rightAnswer").text("The right answer is"+ " "+ rightAnswer);
        $("#gifs").attr("src",questionArray[imageMoveIndex].link);
        $("#gifs").css("display","block");
        reset();
        setTimeout(displayNewQuestion,8000);
       
        
    }
}


$(".responses").on("click", function(){

    clickTrack = clickTrack -1;

    if (responseReceived === false){
        let response =  $(this).attr("id");
    //console.log(response);
    responseReceived = true;

    reset();
    setTimeout(displayNewQuestion,8000);
    
    


    if (response === correctResponse){
           console.log("right answer!");
           totalRight = totalRight + 1;
           console.log(totalRight);
           responseDiva.text(" ");
           responseDivb.text(" ");
           responseDivc.text(" ");
           responseDivd.text(" ");
           messageDiv.text("Good Job!! ");
           document.getElementById('audio1').play();
           //console.log(questionArray[questionArrayIndex].link);
           $("#gifs").attr("src",questionArray[imageMoveIndex].link);
           $("#gifs").css("display","block");
           

           

        } else {
            console.log("wrong answer!");
            console.log(totalRight);
            wrongResponse = wrongResponse +1;
            responseDiva.text(" ");
           responseDivb.text(" ");
           responseDivc.text(" ");
           responseDivd.text(" ");
            messageDiv.text("Sorry thats not right!");
            $(".message3").text("The right answer is"+ " "+ rightAnswer);
            $("#gifs").attr("src",questionArray[imageMoveIndex].link);
           $("#gifs").css("display","block");
           

            
        }
    }

});














// for (let i = 0; i  < questionArray.length ; i++){
//     console.log(questionArray[i].question);
//     //console.log(questionArray[i].corerctAnswer);
//     let correctResponse = questionArray[i].corerctAnswer;
//     for (const prop in questionArray[i]){
//         if ( correctResponse === prop){
//             console.log(questionArray[i][prop]);
//         }
//     }

// }

    
