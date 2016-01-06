function processPalindrome() {

    var input = document.getElementById("chkPal").value;
    var arr1 = input.split("");  //converts a string to an array

    arr1.reverse();  //reverses an array

    var arr2 = "";

    //arr1.toString();  //convert back to string but it did not work!!

    for (i = 0; i < arr1.length; i++) {
        var arr2 = arr2 + arr1[i];
    }

    var arr3 = arr2.replace(/,/g, "");  // replace all , with ""

    if (input == arr3) {
        $("#yourWord").text(arr3 + " is a Palindrome!");
    }
    else {
        $("#yourWord").text(arr3 + " which is gobblygook!");
    }

}


	function processNums1() {

		var input=[];
		
		for (var i=0;i<5;i++){         //fill an array, num, with the values from the user
			var num=("num"+(i+1));
			input.push(+document.getElementById(num).value);
	//		alert(num+' '+input[i]);
		}

		var least=input[0];
		var greatest=input[0];
		var mean=0;
		var total=0;
		var product=1;   //product must be initialized to 1 because anything multiplied by 0 = 0
		
		
		for (i=0;i<input.length;i++){
			if(least>input[i]){
				least=input[i];
			}
			if (greatest<input[i]){
				greatest=input[i];
			}
			total=total+input[i];
			product=product*input[i];
		}
		
		mean=(total/input.length);
		
		alert("The smallest number you entered is "+least);
		alert("The largeest number you entered is "+greatest);
		alert("The average of the numbers you entered is "+mean);
		alert("The sum of the numbers you entered is "+total);
		alert("The product of the numbers you entered is "+product);
	//	alert(input[0]+input[1]);
	};	



function processFactorial() {
    console.log("in factorial");
    alert("I'm in factorial");

	var input=document.getElementById("num1").value;
	
	var product=input;
	for (i=input-1;i>=1;i--){
		product=product*i;
	}
	
	$("#factResponse").text("The factorial of "+num1+" is " +product);
	
};	


function fizzBuzz() {

	var firstNum=document.getElementById("num1").value;
	var secondNum=document.getElementById("num2").value;	
	//alert(typeof(firstNum)+' '+secondNum);

	for (var i=1;i<=100;i++){
		var fizz=i%firstNum;   //using a unary operator converts a string (Firstnum) to an integer
		var buzz=i%secondNum;
		//alert(fizz+' '+buzz);
		if (fizz==0 && buzz==0){
			document.write(" FIZZBUZZ ");
		}
		else if(fizz==0) {
				document.write("  Fizz  ");
		}
		else if(buzz==0){
			document.write("  Buzz  ");
		}
		else{
			document.write(" "+i+" ");
		}
	}	
};	

