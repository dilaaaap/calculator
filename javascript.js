const element = document.getElementById("disp");

var i = 0;
var arrHold = new Array();
var div0holder = 0;

document.addEventListener('click', function(e) {
e = window.event;
var target = e.target, text = target.innerText;
if(target.tagName.toLowerCase() == 'button')
{
    if(text =='CLEAR'){
        clearButton()
    }
    else if(text == 'DELETE'){
        deleteButton()
    }
    else if (div0holder ==1){
        textHold = text;
        clearButton()
        div0holder = 0;
        checker(textHold)
        console.log(arrHold)
        console.log(i)
        console.log('clearing error')
    }
    else{
        checker(text)
    }
   
    }
    console.log(text)

},false);

function checker(input){
    //first digit
    if(i == 0){
        //handles .
        if(input == '.' && Number.isInteger(parseInt(arrHold[i])) == true){
            arrHold[i] = arrHold[i] + input;
            element.innerHTML = arrHold[i];
        }
        //handles numbers
        else if(Number.isInteger(parseInt(input))== true){
            if(arrHold.length == 0){
                arrHold.push(input)}
            else{
                arrHold[i] = arrHold[i]+input;
                }
            element.innerHTML = arrHold[i];
        }
        //handles = 
        else if(input == '=' ){
            element.innerHTML = arrHold[i];
            i = 0;
        }
        else{
            i++;
            arrHold[i] = input;
        }
    }
    else if (i ==1){
        if(Number.isInteger(parseInt(input)) ==true){

            i++;
            arrHold.push(input);
            element.innerHTML = arrHold[i];
        }
        else if(input == '+' || input == '-' || input == 'x' || input == '/'){
            arrHold[i] = input;
        }
        else{
            arrHold[i] = arrHold[i];
        }
   }
   else if (i ==2){
       //handles .
    if(input == '.' && Number.isInteger(parseInt(arrHold[i])) == true){
        arrHold[i] = arrHold[i] + input;
        element.innerHTML = arrHold[i];
    }
    //handles numbers
    else if(input != '+' && input != '-' && input != 'x' && input != '/' && input != '=' && input != '.'){
        arrHold[i] = arrHold[i] + input;
        element.innerHTML = arrHold[i];
    }
    // handles = 
    else if(input != '.'&& Number.isInteger(parseInt(input)) == false && input == '='){
        operate(arrHold[0],arrHold[1],arrHold[2])
        element.innerHTML = solution;
        i = 0;
        arrHold = [];
        arrHold[0] = solution;
    }
    // handles + - x /
    else if(input == '+' || input == '-' || input == 'x' || input == '/'){
        operate(arrHold[0],arrHold[1],arrHold[2])
        element.innerHTML = solution;
        i = 1;
        arrHold = [];
        arrHold[0] = solution;
        arrHold[1] = input;
    } 
    else{
        arrHold[i] = arrHold[i];
    }
   }
   console.log(solution)
}
function operate(num1,op1,num2) {
 
      if(op1== '+'){
          if(parseFloat(num1) != NaN && parseFloat(num2) != NaN){
            solution = parseFloat(num1)+parseFloat(num2);
          }
          
          return solution;
      }
      else if(op1 == '-'){
          solution = parseFloat(num1) - parseFloat(num2);
          return solution;
      }
      else if(op1 == 'x'){
          solution = parseFloat(num1)*parseFloat(num2);
          return solution;
      }
      else if(op1 == '/' && num2 != 0){
          solution = parseFloat(num1)/parseFloat(num2);
          return solution;
      }
      else if(op1 == '/' && num2 == 0){
          solution = "ERROR DIV 0"
          div0holder = 1;
          console.log(arrHold)
      }
  
}
function clearButton()
{
    arrHold = [];
    i = 0;
    element.innerHTML = "";
}
function deleteButton()
{
    if(arrHold.length <= 1){
        arrHold = [];
        i = 0;
        element.innerHTML = "";
    }
    else{
        arrHold.splice(-1,1)
        i = i-1;
        element.innerHTML = "";
    }
}
