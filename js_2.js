// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
let x1 = 2;
let x2 = 1;
for(x2 = 1; x2 < 11; x2++){
  console.log(Math.pow(x1, x2));
}
//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
let x1 = 2;
let x2 = prompt('Веедите степень');
function CheckNum(x2){
  for (x2 < 11; x2++) {
  console.log(Math.pow(x1, x2))}
}
CheckNum(x2)
// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
let 1x = ":)";
for(1x = 1; 1x < 6; 1x++){
  console.log(1x);}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода
e.g. function printSmile(stroka, numberOfRows){
for(stroka = 1; stroka < 6; stroka++)
for(numberOfRows = 1; numberOfRows < 6; numberOfRows++)
  console.log(numberOfRows, stroka);}
printSmile(":)", 1);

// 3**. Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли:
// Слово (word) состоит из (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'
e.g. function getWordStructure(word)
let X = [A, a, E, e, I, i, O, o, U, u, Y, y];
let O != [A, a, E, e, I, i, O, o, U, u, Y, y];
for(word = , )
getWordStructure(case);
getWordStructure(Case);
getWordStructure(Check-list);
