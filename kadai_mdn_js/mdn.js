const today = new Date(); //今日の日付を取得
const year = today.getFullYear(); //年を抜き出す
const month = today.getMonth()+ 1;// 月-1の要素を抜き出し、1を足す
const day = today.getDate(); //日の要素を抜き出す
console.log(year + "年" + month +"月" + day +"日");