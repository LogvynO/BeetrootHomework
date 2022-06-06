// задача 1
/* let a = prompt('введи свій вік:');
if (a <= 11) {
    alert('Дитина');
}
else if (a >= 12 && a <= 17){
        alert('Підліток');
    }
else if (a >= 18 && a <= 59){
        alert('Дорослий');
    }
else if (a >= 60 && a<= 99){
        alert('Пенсіонер');
    }
else if (a >= 100){
        alert('Мрець, або брехло :D');
    }
else {
        alert('невірне значення');
    }; */

// задача 2
/* let symbol = prompt('Введіть число від 0 до 9:');
if (symbol == 0)
    {alert(')'); }
else if (symbol == 1)
    {alert('!'); }
else if (symbol == 2)
    {alert('@'); }
else if (symbol == 3)
    {alert('#'); }
else if (symbol == 4)
    {alert('$'); }
else if (symbol == 5)
    {alert('%'); }
else if (symbol == 6)
    {alert('^'); }
else if (symbol == 7)
    {alert('&'); }
else if (symbol == 8)
    {alert('*'); }
else if (symbol == 9)
    {alert('('); }
else {
    alert('Невірне число')
}; */

// задача 3
/* let i = prompt('provide start number to count range');
for (let a = prompt('provide 2nd number'); a >= i; 
     i++) {
    console.log(i);
    alert(i)
} */


// задача 6
/* function reversedNum(num1) {
    return (
      parseFloat(
        num1
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num1)
    )                 
  };

let num1 = prompt('Provide 5 digit number');
console.log(num1);
let num2 = reversedNum(num1);
alert(num2)
console.log(num2);


if (num1 == num2) {
    alert('palindrom');
    console.log('palindrom')
}
else {
    alert('not a palindrom');
    console.log('not palindrom')
} */



//задача 7
/* let num1 = prompt('Provide total price for all products:');
let discount3 = num1 * 3 / 100;
let discount5 = num1 * 5 / 100;
let discount7 = num1 * 7 / 100;

if (num1 >= 200 && num1 < 300)
{
    alert(num1 - discount3);
    console.log(num1 - discount3);
}
else if (num1 >= 300 && num1 < 500)
{
    alert(num1 - discount5);
    console.log(num1 - discount5);
}
else if (num1 > 500)
{
    alert(num1 - discount7);
    console.log(num1 - discount7);
}
else {
    console.log(num1);
    alert(num1)
}; */