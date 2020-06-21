'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
// ここまででmapの初期値設定

function fib(n){
    if (memo.has(n)){
        return memo.get(n);
    }
 const value = fib(n-1) + fib(n - 2);
 memo.set(n, value);
 return value;
//  ここまでがフィボナッチ数列の関数。途中にmemo.setの指示を含めた。
}

const length = 40;
for (let i =0; i <= length; i++){
    console.log(fib(i));
}
// これが長さの定義。