const question =  "2020シーズン、パリーグにおける千葉ロッテマリーンズの最終順位は？";
const answers = ["1位", "2位", "4位", "6位"];
const correctAnswer = "2位";

document.getElementById('problem').innerText = question;
const button = document.getElementsByClassName('button');
const result = document.getElementById('result-area');

for(a = 0; a < button.length; a++) {
    button[a].innerText = answers[a];
}

for(b = 0; b < button.length; b++) {
button[b].addEventListener('click' , function () {
    if(correctAnswer === button[b].innerText) {
        result.innerText = "正解！";
    } else {
        result.innerText = "不正解・・・";
    }
   }
    return;
  );
}

 
