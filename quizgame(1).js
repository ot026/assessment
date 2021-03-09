const question =  "2020シーズン、パリーグにおける千葉ロッテマリーンズの最終順位は？";
const answers = ["1位", "2位", "4位", "6位"];
const correctAnswer = "2位";

document.getElementById('problem').innerText = question;
const button = document.getElementsByClassName('button');
const result = document.getElementById('result-area');

for(number = 0; number < button.length; number++) {
    button[number].innerText = answers[number];
}


button[0].onclick = () => {
    if(correctAnswer === button[0].innerText) {
        result.innerText = "正解！";
    } else {
        result.innerText = "不正解・・・";
    }
}

button[1].onclick = () => {
    if(correctAnswer === button[1].innerText) {
        result.innerText = "正解！";
    } else {
        result.innerText = "不正解・・・";
    }
}

button[2].onclick = () => {
    if(correctAnswer === button[2].innerText) {
        result.innerText = "正解！";
    } else {
        result.innerText = "不正解・・・";
    }
}

button[3].onclick = () => {
    if(correctAnswer === button[3].innerText) {
        result.innerText = "正解！";
    } else {
        result.innerText = "不正解・・・";
    }
}