//Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}
module.exports = getPercents;
function getPercents(per, num)
{
  return (num/100)*per;
}
          
console.log(getPercents(5, 50));