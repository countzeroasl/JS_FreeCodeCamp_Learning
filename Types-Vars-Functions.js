var myArray = ["Test", 42, ["Ronnie", "J", "Bass"]];
console.log("Original Array: ", myArray);
removedVar = myArray.pop();
console.log("Removed Variable: ", removedVar);
console.log("New Array: ", myArray);
myArray.push(removedVar);
console.log("Is it mutable? New Array: ", myArray);
//While strings are immutable, arrays are not.

function addTwoNumbers (num1, num2)
{
    return num1 + num2;
}

var result;
var number1 = 4;
var number2 = 7;

result = addTwoNumbers(number1, number2);
console.log("Look, Ma!  I added two numbers and got ", result);

var outerWear = "T-Shirt";

function myOutfit ()
{
    var outerWear = "Sweater";  //Var declared inside a function overrides global var, but it does NOT overwrite the global variable.  It is a different, localized instance.
    return outerWear;
}

console.log(myOutfit());    //This is using the local copy of the variable
console.log(outerWear);     //This is using the global copy of the variable.

function nextInLine (arr, item)
{
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function compareEquality(a, b)
{
    if (a == b) //a double equal comparison converts types before comparing
    {
        return "'a' and 'b' are equal.";
    }
    return "'a' and 'b' are not equal.";
}

function compareEquality2(c, d)
{
    if (c === d)    //a triple equal comparison does not convert types.  It is a strict comparsion.
    {
        return "'c' and 'd' are equal.";
    }
    return "'c' and 'd' are not equal.";
}

console.log(compareEquality(10, "10"));
console.log(compareEquality2(10, "10"));

function compareEquality3(e, f)
{
    if (e != f) //an unequal comparison converts types before comparing
    {
        return "'e' and 'f' are not equal.";
    }
    return "'e' and 'f' are equal.";
}

function compareEquality4(g, h)
{
    if (g !== h)    //a double unequal comparison does not convert types.  It is a strict comparsion.
    {
        return "'g' and 'h' are not equal.";
    }
    return "'g' and 'h' are equal.";
}

console.log(compareEquality3(10, "10"));
console.log(compareEquality4(10, "10"));

function caseInSwitch(val)
{
    var answer = "";
    switch(val)
    {
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));