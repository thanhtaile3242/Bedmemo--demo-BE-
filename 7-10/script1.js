const button = document.querySelector('button');
class Question_Answers {
    question
    answerA
    answerB
    answerC
    answerD
    rightAnswer
}
button.addEventListener('click', () => {
    // Create a list of questions
    let QA_Array = [];
    // Number of questions
    let NumberQuestions = document.querySelectorAll("label[class='count']").length; // 4
    // Validate checked right answers (input[type="radio"])
    let radioInputs = document.querySelectorAll('input[type="radio"]');
    let countRadio = 0;
    let checkRadio = false;
    for(let i = 0; i < radioInputs.length; i++) {
        if(radioInputs[i].checked){
            countRadio += 1;
        }};
    if(countRadio === NumberQuestions){
       checkRadio = true}
    // Validate fulfill Questions and Answers
    let allTextAreaTags = document.getElementsByTagName("textarea");
    let checkBlank = true;
    for(let i = 0; i < allTextAreaTags.length;i++){
        if(allTextAreaTags[i].value === ''){
            checkBlank = false}};
    // Get data for each item_QA object
    if(checkBlank && checkRadio){
        for(let i = 0; i < NumberQuestions; i++) {
            let item_QA = new Question_Answers();
            // Get question and answers
            let question_Array = document.getElementsByClassName(`question${i+1}`);
            item_QA.question = question_Array[0].value;
            item_QA.answerA = question_Array[1].value;
            item_QA.answerB = question_Array[2].value;
            item_QA.answerC = question_Array[3].value;
            item_QA.answerD = question_Array[4].value;
            // Get the right answer
            for (let k = 0; k < question_Array.length; k++){
                if(question_Array[k].checked){
                    item_QA.rightAnswer = question_Array[k].value;
                }
            }
            QA_Array.push(item_QA)};
    }else{
        alert("Please fulfill your folder");
    }
    console.log(QA_Array);
});











