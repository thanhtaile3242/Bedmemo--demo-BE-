const radioButtons = document.querySelectorAll('input[type="radio"]');
const button = document.querySelector('button');
console.log(radioButtons)
button.addEventListener('click', () => {
    let count = 0;
for(let i = 0; i < radioButtons.length; i++) {
    if(radioButtons[i].checked){
        count++;
        // alert("checked")
    }
}
if(count == 3){
    alert("checked")
    return

}
alert("unchecked")


});
