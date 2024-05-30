// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let kekka=0;
let yoso=4;


// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する

  //let intext=document.querySelector('input[name="seisu"]');
  //let yoso=parseInt(intext.value);
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

  kaisu=kaisu+1;
  kekka=kaisu + '回目の予想:' + yoso;

  if(kaisu>=4){
    kekka='答えは' + kotae + 'でした. すでにゲームは終わっています';
  }else if(kotae===yoso){
    kekka='正解です.おめでとう!';
  }else if(kaisu===3){
    kekka='まちがい. 残念でした答えは' + kotae + 'です.';
  }else if(kotae>=yoso){
    kekka='まちがい. 答えはもっと大きいですよ';
  }else if(kotae<=yoso){
    kekka='まちがい. 答えはもっと小さいですよ';
  }

  let a=document.querySelector('span#answer');
  a.textContent=yoso;

  let b=document.querySelector('span#kaisu');
  b.textContent=kaisu + "回目の予想: ";
  let c=document.querySelector('p#result');
  c.textContent=kekka;

}