const buttonSave = document.getElementById("Save");
const buttonAdd = document.getElementById("Add");
const buttonRemove = document.getElementsByClassName("Remove"); // Array of button tag
console.log(buttonRemove);
let domParser = new DOMParser();
class Question_Answers {
    question
    answerA
    answerB
    answerC
    answerD
    rightAnswer
};
// Add
buttonAdd.addEventListener("click", () => {
// Thêm cụm thẻ
let NumberQuestions = document.querySelectorAll("label[class='count']").length; // 4
let newQA_String = domParser.parseFromString(`
    <div class="Q${NumberQuestions + 1}">
        <label for="" class="count">${NumberQuestions + 1}</label>
        <textarea class="question${NumberQuestions + 1}" name="q${NumberQuestions + 1}" cols="10" rows="2" placeholder="type your question">Le Thanh Tai ${NumberQuestions + 1}</textarea>
        <textarea class="question${NumberQuestions + 1}" name="a${NumberQuestions + 1}" id="" cols="5" rows="2">A${NumberQuestions + 1}</textarea>
        <textarea class="question${NumberQuestions + 1}" name="b${NumberQuestions + 1}" id="" cols="5" rows="2">B${NumberQuestions + 1}</textarea>
        <textarea class="question${NumberQuestions + 1}" name="c${NumberQuestions + 1}" id="" cols="5" rows="2">C${NumberQuestions + 1}</textarea>
        <textarea class="question${NumberQuestions + 1}" name="d${NumberQuestions + 1}" id="" cols="5" rows="2">D${NumberQuestions + 1}</textarea>
        <input class="question${NumberQuestions + 1}" type="radio" name="Ra${NumberQuestions + 1}" value="A" required>
        <input class="question${NumberQuestions + 1}" type="radio" name="Ra${NumberQuestions + 1}" value="B">
        <input class="question${NumberQuestions + 1}" type="radio" name="Ra${NumberQuestions + 1}" value="C">
        <input class="question${NumberQuestions + 1}" type="radio" name="Ra${NumberQuestions + 1}" value="D">
        <button>Delete</button>
    </div>`,"text/html");
let newQA_Node = newQA_String.body.firstChild;
let container = document.getElementById("containerQAs");
container.appendChild(newQA_Node);
    //Remove 
    for(let i = 0 ; i <= NumberQuestions ; i++) {
        let buttonRemove_item = buttonRemove[i];
        buttonRemove_item.addEventListener("click",() => {
            let item_QA = document.getElementsByClassName(`Q${i+1}`);
            item_QA[0].remove();
        });
    }
});





// Save
buttonSave.addEventListener('click', () => {
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












