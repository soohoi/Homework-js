// Создать переменную “item_1”
// Присвоить переменной item_1 цифру 5.
// Вывести в консоль item_1.
let item_1 = 5;
console.log(item_1);
let item_2 = 3;
console.log(item_2);
let item_3 = item_1 + item_2;
console.log(item_3);

// Создать переменную “item_4”
// Присвоить переменной item_4 строку “Yolochka”
// Вывести в консоль item_4
// Вывести в консоль сложение item_3 и item_4
// Вывести в консоль умножение item_3 и item_4
let item_4 = "Yolochka";
console.log(item_4);
console.log(item_3 + item_4);
console.log(item_3 * item_4);

// Создать переменную “item_5”
// Присвоить переменной item_5 переменную item_3
// Создать переменную item_6.
// Создать переменную item_6_type
// Присвоить переменной item_6 значение 15
// Присвоить переменной item_6_type тип переменной item_6
// Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——
let item_5 = item_3;
let item_6 = 15;
let item_6_type = typeof(item_6);
console.log(typeof("item_6 ==", item_6, "item_6_type ==", item_6_type));

// Создать переменную item_7 и в ней преобразовать item_6 в String.
// Создать переменную item_7_type
// Присвоить переменной item_7_type тип переменной item_7
// Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——
let item_7 = String(item_6);
let item_7_type = typeof(item_7);
console.log(typeof("item_7 ==", item_7, "item_7_type ==", item_7_type));

// Создать переменную “age_1” и присвоить ей значение 10
// Создать переменную “age_2” и присвоить ей значение 18
// Создать переменную “age_3” и присвоить ей значение 60
// Создать if в котором будите проверять значение переменной age_1
// Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
// Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// Иначе выводите “Technical work”.
let age_1 = 10;
let age_2 = 18;
let age_3 = 60;
if (age_1 < age_2) {
    console.log("You don`t have access cause your age is " + age_1 + " It`s less then")}
    else if (age_1 >= age_2 && age_1 < age_3){
    console.log("Welcome  !");}
<<<<<<< HEAD
    else if (age_1 >= age_3){
=======
else if (age_1 >= age_3){
>>>>>>> 49683467ec00197315ef17cfef7123bc3d103657
    console.log("Keep calm and look Culture channel");
}else{
    console.log("Technical work")}
//add new changes 
// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 41-48 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
let checkAge = function(age) {
    if (age < age_2) {
        console.log("You don`t have access cause your age is " + age + " It`s less then")}
        else if (age >= age_2 && age < age_3){
        console.log("Welcome  !");}
        else if (age >= age_3){
        console.log("Keep calm and look Culture channel");
    }else{
        console.log("Technical work")}
}
checkAge(17);
checkAge(18);
checkAge(61);
//kelya1litr

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
function checkAge(age) {
  if(typeof age == 'number'){
    if (age < age_2) {
      console.log("You don`t have access cause your age is " + age + " It`s less then")}
      else if (age >= age_2 && age < age_3){
      console.log("Welcome  !");}
      else if (age > age_3){
      console.log("Keep calm and look Culture channel");}
      else {
      console.log("Technical work");}
    }else{
      console.log('Error')
    }
}
checkAge(17);
checkAge(18);
checkAge(61);
checkAge("asdaasdad");

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
function checkAge(age) {
  age = Number(age)
  if(Number(age)){
  if (age < age_2) {
    console.log("You don`t have access cause your age is " + age + " It`s less then")}
  else if (age >= age_2 && age < age_3){
    console.log("Welcome  !");}
  else if (age > age_3){
    console.log("Keep calm and look Culture channel");}
  else {
    console.log("Technical work");}
  }else{
    console.log("Error")
  }
}
checkAge("2");

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
function checkAge(age) {
  age = Number(age)
  if(Number(age)){
  if (age < age_2) {
    alert("You don`t have access cause your age is " + age + " It`s less then")}
  else if (age >= age_2 && age < age_3){
    alert("Welcome  !");}
  else if (age > age_3){
    alert("Keep calm and look Culture channel");}
  else {
    alert("Technical work");}
  }else{
    alert("Error")
  }
}
checkAge(age)
let age = prompt("Сколько Вам лет?");
