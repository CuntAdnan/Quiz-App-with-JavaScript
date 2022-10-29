//selection containing the possible answers for the quiz..
const ans = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector(".result");


//event listener for the submit button on the form event which will decide once all the options are selected...
form.addEventListener('submit', e => {

    e.preventDefault();
    const element = document.querySelector('.finalResult');
    element.textContent = "Your Score is - ";

    let score = 0;
    const userScore = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    for (let i = 0; i < 4; i++) {
        if (userScore[i] === ans[i]) {
            score = score + 25;
        }
    }
    
    result.className = "result-new";    

    // Set Interval is a function which is used to repeat a process for some interval of time repeatedly..
    scrollTo(0, document.body.scrollHeight);
    let output = 0;
    const timer = setInterval(() => {
        element.textContent = 'Your Score is ' + `${output}`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);




})


// learning about the window object in javaScript
// Window Object is the largest object in Js and contains all the methods and the properties which are included in that methods.