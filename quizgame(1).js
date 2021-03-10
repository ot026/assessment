//クイズの問題文、選択肢、正解
const question =  "2020シーズン、パリーグにおける千葉ロッテマリーンズの最終順位は？";
const choices = ["1位", "2位", "4位", "6位"];
const correctAnswer = "2位";

//表示エリアの取得、定数の定義
document.getElementById('problem').innerText = question;
const button = document.getElementsByClassName('button');
const result = document.getElementById('result-area');

//ボタンタグに選択肢を代入
for(a = 0; a < button.length; a++) {
    button[a].innerText = choices[a];
}

//それぞれのボタンを押した際の正誤判定の処理
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
