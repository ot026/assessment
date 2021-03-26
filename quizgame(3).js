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

/* 関数を外出しした場合
//それぞれのボタンを押した際の正誤判定の処理
// for(b = 0; b < button.length; b++) {
// 	button[b].addEventListener('click' , (e) => {
//     	clickHandler(e);
//    	})
// };

// const clickHandler = (e) => {
//     if(correctAnswer === e.target.textContent) {
//     	result.innerText = "正解！";
// 	} else {
//     	result.innerText = "不正解・・・";
// 	}
// };
*/

// after
// for(b = 0; b < button.length; b++) {
// button[b].addEventListener('click' , function (e) {
//     if(correctAnswer === e.target.innerText) {
//         result.innerText = "正解！";
//     } else {
//         result.innerText = "不正解・・・";
//     }
//   });
// }

// before
for(b = 0; b < button.length; b++) {
button[b].addEventListener('click' , function () {
    if(correctAnswer === button[b].innerText) {
        result.innerText = "正解！";
    } else {
        result.innerText = "不正解・・・";
    }
  });
}