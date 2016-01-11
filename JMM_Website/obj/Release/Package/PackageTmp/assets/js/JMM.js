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

};

	function processNums1() {
	    var input = $("#num1").val();
	    var arr = input.split(" ");

		var least=arr[0];
		var greatest = arr[0];
		var total = 0;
		var mean = 0;
		var product=1;   //product must be initialized to 1 because anything multiplied by 0 = 0
		
		for (i = 0; i < arr.length; i++) {
		    arr[i] = parseInt(arr[i]);
			if(least>arr[i]){
				least=arr[i];
			}
			if (greatest<arr[i]){
				greatest=arr[i];
			}
			var total=total+arr[i];
			var product = product * arr[i];
		}
		var mean = (total / arr.length);
		$("#smallest").text(least).css("color", "Red");
		$("#largest").text(greatest).css("color", "limeGreen");
		$("#average").text(mean).css("color", "Purple");
		$("#sum").text(total).css("color", "Grey");
		$("#product2").text(product).css("color", "Blue");
	};	



function processFactorial() {

	var input=document.getElementById("chkFact").value;
	
	var product=input;
	for (i=input-1;i>=1;i--){
		product=product*i;
	}
	
	$("#factResponse").text("The factorial of "+input+" is " +product);
	
};	


function fizzBuzz() {

	var firstNum=document.getElementById("inFizz").value;
	var secondNum=document.getElementById("inBuzz").value;	
	var fOB = [];
	for (var i = 1; i <= 100; i++) {
	    var fizz = i % firstNum;   //using a unary operator converts a string (Firstnum) to an integer
	    var buzz = i % secondNum;
	    
	    if (fizz == 0 && buzz == 0) {
	        fOB.push(" FIZZBUZZ ");
	    }
	    else if (fizz == 0) {
	        fOB.push(" Fizz ");
	    }
	    else if (buzz == 0) {
	        fOB.push(" Buzz ");
	    }
	    else {
	        fOB.push(i);
	    }
	}
	$("#fizzOrBuzz").text(fOB).css("font-size","80%");
};	

