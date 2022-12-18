function onButtonClick(event){
    event.preventDefault();
    
    var inputStr = document.getElementById("inputStr").value;
    var result = document.getElementById("result");    
    var message;
    
	if(inputStr === "") {
        message = "Nothing found!"
		// console.log("Nothing found!");
	}
	else{
        if(inputStr.length > 10){
            message = "Given string length is greater then 10"
        }
        else{
            let isPalindrom = check_palindrome(inputStr);
            isPalindrom ? message = "Given string is palindrom" : message = "Given string is not palindrom"
            // console.log(isPalindrom);
        }
        
    }
    result.innerText = message;

}


function check_palindrome( str ){
    let j = str.length -1;
    for( let i = 0 ; i < j/2 ;i++){
      let x = str[i] ;
      let y = str[j-i];
      if( x != y)
      {
        return false;
      }
    }
    return true;
  }
