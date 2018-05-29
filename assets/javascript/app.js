
let timeRemain = 10;
let timeOutFlag = false;
let responseReceived = false;
let correctResponse ="";
let totalRight = 0;
let startDiv = $("#start");
let wrongResponse = 0;
let clickTrack = 4;



function showQuiz(){
    $("#start").css("display", "none");
    $("#quizArea").css("display", "block");
    $("#again").css("display","none");

    questionDiv.html("");
        $("#correct").css("display", "none");
        $("#correct").html("");
        $("#incorrect").css("display", "none");
        $("#incorrect").html("");
        $(".message2").html(" ");
        $(".message3").html(" ");

}



  let myTimer = "";
  function fireTimer(){
    myTimer = setInterval(timer,1000); 
  }
  //fireTimer();
  
function Questions (question,a,b,c,corerctAnswer){
    this.question = question;
    this.a = a;
    this.b = b;
    this.c = c;
    this.corerctAnswer = corerctAnswer;
  }


var q1 = new Questions ("What is my Name",
                        "George",
                        "Tina",
                        "Timothy",
                        "a"
)

var q2 = new Questions ("Where is my Home",
                        "Norway",
                        "Iceland",
                        "Houston",
                        "c"
)

var q3 = new Questions ("What is my son's name",
                        "JJ Watt",
                        "Timothy",
                        "Sachin Tendulkar",
                        "b"
)

var q4 = new Questions ("What is my mom's name",
                        "Celine",
                        "Queen Elizabeth",
                        "Alice",
                        "a"
)

let questionArray =[q1,q2,q3,q4];
let questionArrayIndex = 0;



var timediv = $("#timeRemain");
var questionDiv = $("#question");
var responseDiva = $("#a");
var responseDivb = $("#b");
var responseDivc = $("#c");
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
    firstTime();
    fireTimer();
    


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


}

function displayNewQuestion(){

    if (questionArrayIndex < questionArray.length){
        fireTimer();
        questionDiv.text(questionArray[questionArrayIndex].question);
        responseDiva.text(questionArray[questionArrayIndex].a);
        responseDivb.text(questionArray[questionArrayIndex].b);
        responseDivc.text(questionArray[questionArrayIndex].c);
        messageDiv.text(" ");
        messageDiv2.text(" ");
        $(".message3").text(" ");
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
       $(".message3").text(" ");
        questionDiv.html("All Done! Heres how you did!!");
        $("#correct").css("display", "block");
        $("#correct").html("Correct Answers:"+" "+ totalRight);
        $("#incorrect").css("display", "block");
        $("#incorrect").html("Incorrect Answers:"+" "+ wrongResponse);
        $("#unanswered").css("display", "block");
        $("#unanswered").html("Unanswered Questions:"+" "+ clickTrack);

    }


}

  


function timer(){
    if (timeRemain > 1){
    timeRemain = timeRemain - 1;
    timediv.text("Time Remaining:"+" "+ timeRemain+" "+"Seconds");
    
    }
    else {
        responseDiva.text(" ");
        responseDivb.text(" ");
        responseDivc.text(" ");
        messageDiv.text("Sorry Time Out!");
        messageDiv2.append("The right answer is"+ " "+ rightAnswer);
        reset();
        setTimeout(displayNewQuestion,3000);
       
        
    }
}


$(".responses").on("click", function(){

    clickTrack = clickTrack -1;

    if (responseReceived === false){
        let response =  $(this).attr("id");
    //console.log(response);
    responseReceived = true;

    reset();
    setTimeout(displayNewQuestion,3000);
    
    


    if (response === correctResponse){
           console.log("right answer!");
           totalRight = totalRight + 1;
           console.log(totalRight);
           responseDiva.text(" ");
           responseDivb.text(" ");
           responseDivc.text(" ");
           messageDiv.text("Good Job!! ");

           

        } else {
            console.log("wrong answer!");
            console.log(totalRight);
            wrongResponse = wrongResponse +1;
            responseDiva.text(" ");
           responseDivb.text(" ");
           responseDivc.text(" ");
            messageDiv.text("Sorry thats not right!");
            $(".message3").text("The right answer is"+ " "+ rightAnswer);
           

            
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

    
