const buttonSave = document.getElementById("Save");
const buttonAdd = document.getElementById("Add");
let domParser = new DOMParser();
class Question_Answers {
    question
    answerA
    answerB
    answerC
    answerD
    rightAnswer
};
// The add feature
buttonAdd.addEventListener("click", () => {
        // 1. Create a new question-HTML string tag
    let NumberQuestions = document.querySelectorAll("label[class='count']").length; // 4
    let newQA_String = domParser.parseFromString(`
    <div class="">
        <label for="" class="count">${NumberQuestions + 1}</label>
        <textarea class="question" name="q" cols="10" rows="2" placeholder="type your question" required>Le Thanh Tai</textarea>
        <textarea class="question" name="a" id="" cols="8" rows="2">A</textarea>
        <textarea class="question" name="b" id="" cols="8" rows="2"></textarea>
        <textarea class="question" name="c" id="" cols="8" rows="2"></textarea>
        <textarea class="question" name="d" id="" cols="8" rows="2"></textarea>
        <input class="question" type="radio" name="Ra${NumberQuestions + 1}" value="A" required>
        <input class="question" type="radio" name="Ra${NumberQuestions + 1}" value="B">
        <input class="question" type="radio" name="Ra${NumberQuestions + 1}" value="C">
        <input class="question" type="radio" name="Ra${NumberQuestions + 1}" value="D">
    </div>`,"text/html");
    let newQA_Node = newQA_String.body.firstChild;
        // 2. Create a new remove button
    let btnRemove = document.createElement("button");
    btnRemove.innerHTML = "Remove";
        // Add event to button remove
    btnRemove.addEventListener("click", function() {
        // Remove the corresponding parent element.
    let parent = this.parentElement;
    parent.remove()
        // Update the order of questions.
    let labels_Array = document.querySelectorAll("label[class='count']");
        for (let i = 0; i < labels_Array.length; i++){
            labels_Array[i].textContent = i + 1;
        }
        // Update attribute "name" of input radio
    let radio1 = document.querySelectorAll("input[type=radio]");
    const radio1Array = Array.from(radio1);
        radio1Array.forEach(function (item, index) {
            const nameNumber = Math.floor(index / 4) + 1; // Calculate class number
            item.setAttribute("name",`RA${nameNumber}`); // Add class
        });
    });
        // Add the completed question element to the HTML file
    newQA_Node.appendChild(btnRemove);
    let container = document.getElementById("containerQAs");
    container.appendChild(newQA_Node);
});

// The save feature
buttonSave.addEventListener('click', function () {
    // 1. Update classes for all input elements
    const listOfInputs = document.getElementsByClassName(`question`); // Select all <p> elements
        // Convert paragraphs to an array using Array.from
    const inputsArray = Array.from(listOfInputs );
        // Iterate through the paragraphs and add classes based on the index
    inputsArray.forEach(function (item, index) {
        const classNumber = Math.floor(index / 9) + 1; // Calculate class number
        item.classList.add('q' + classNumber)}); // Add class
    // 2. Validate fulfillment of input elements
        // Create a list of questions
    let QA_Array = [];
        // Number of questions
    let NumberQuestions = document.querySelectorAll("label[class='count']").length;
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
            let question_Array = document.getElementsByClassName(`q${i+1}`);
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