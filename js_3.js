<<<<<<< HEAD
// 1. Скрипт должен принимать на вход строку.
// 2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в введённой строке.
// 3. Минимум 5 символов в строке
// 4. Максимум 64 символа в строке
// 5. В строке должны быть буквы
// 6. Должна быть хотя бы одна буква в верхнем регистре
// 7. Должна быть хотя бы одна цифра
// 8. Должна быть хотя бы одна @
// 9. Строка не должна быть пустой
function strokaNum(word){
  word = String(word)
    let qwe = word.length
    let x = [a-z]
    let c = [A-Z]
    let b = [0-9]
    if(qwe < 1){
        console.log("Строка не должна быть пустой")}
      else if(qwe <= 4){
        console.log('Должно быть минимум 5 символов в строке')}
      else if (qwe > 64){
        console.log('Должно быть максимум 64 символа в строке')}
      else if(!word.includes(x)){
        console.log('В строке должны быть буквы')}
      else if(!word.includes(c)){
        console.log('Должна быть хотя бы одна буква в верхнем регистре')}
      else if(!word.includes('@')){
        console.log('Должна быть хотя бы одна @')}
      else if(!word.includes(b)){
        console.log('Должна быть хотя бы одна цифра')}
      else{console.log('welcome!')}}
  strokaNum("12344a@")
=======
// Напишите валидационный скрипт используя функции 
// Скрипт должен на вход принимать строку.
// После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
// Минимум 5 символов в строке
// Максимум 64 символа в строке
// В строке должны быть буквы
// Должна быть хотя бы одна буква в верхнем регистре
// Должна быть хотя бы одна цифра
// Должна быть хотя бы одна @
// Строка не должна быть пустой

let x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let X = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let n = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let sobaka = "@";
let strk = "aaaaaaa"
function js(str){
  str = string(str)
  if(str.lenght = 4) {
    alert('Минимум 5 символов в строке')}
    else{return sj2}}
function js2(str){
  if(str.lenght = 64) {
    alert('Максимум 64 символа в строке')}
     else{ return sj3}}
function js3(str){
  if(!str.includes(x)){
    alert('В строке должны быть буквы')}
     else {return sj4}}
function js4(str){
  if(!str.includes(X)) {
      alert('Должна быть хотя бы одна буква в верхнем регистре ')}
     else {return sj5}}
function js5(str){
  if(!str.includes(sobaka)) {
    alert('Должна быть хотя бы одна @')}
     else {return sj6}}
function js6(str){
  if(str = ''){
    alert('Строка не должна быть пустой')}
     else {console.log('Welcome!')}}
>>>>>>> b1282fdd1a1b2e6c98d8870c091e84eece1c12e5
