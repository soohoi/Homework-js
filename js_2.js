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
