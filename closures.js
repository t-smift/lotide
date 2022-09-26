const outer = function () {

  let number = 5;


  const myFunc = function(add) {
    console.log(number);
    number += add;
  };


  return myFunc;
}
const fn = outer();
fn(4);
fn(1);
fn(10);
