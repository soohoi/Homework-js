// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
let x1 = 2;
let x2 = 1;
while (x2 < 11) {
  console.log(Math.pow(x1, x2));
  x2++;}
//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
let a1 = 2;
let checkNum = function(nm){
  while (nm < 11) {
    console.log(Math.pow(x1, nm));
    nm++;}
}
checkNum(1)
// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
let i = ":)";
let o = ":):):):):):)";
while (i != o) {
  console.log(i);
  i=i + ":)";}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода
// e.g. function printSmile(stroka, numberOfRows){
function printSmile(stroka, numberOfRows){
while(stroka != o)
while(numberOfRows < 6){
 console.log(numberOfRows, stroka);
 numberOfRows++; 
 stroka=stroka + ":)";}
}
printSmile(":)", 1);

//3**
// 3**. Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли:
// Слово (word) состоит из (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'
function getWordStructure(word){
  let X = 0;
  let Y = 0;
  let gl = ["a", "e", "i", "o", "u", "y"];
  let sgl = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
  for(word1 of word.toLowerCase()){
  if(gl.includes(word1)) X++;
  if(sgl.includes(word1)) Y++;}
  console.log("Слово " + word + " состоит из " + X + " гласных и " + Y + " согласных букв")
}
getWordStructure("case");
getWordStructure("Case");
getWordStructure("Check-list");

// 4**
// Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'Abba'
function isPalindrom(word2) {
  return word2.toLowerCase() == word2.toLowerCase().split("").reverse().join("")
}
console.log(`${isPalindrom("Abba") ? "It is a palindrome" : "It is not a palindrome"}`)
isPalindrom("Abba")