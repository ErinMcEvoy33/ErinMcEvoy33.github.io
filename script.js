function check() {
	var move1=document.getElementById("firstMove").value;
	var move2=document.getElementById("secondMove").value;
	var move3=document.getElementById("thirdMove").value;
	var result="";
	
//Round 1
//page play result
	var pageMove1=Math.floor(Math.random()*3);
	var pageResult1;

	if(pageMove1==0){
		pageResult1 = "rock";
	}
	else if(pageMove1==1){
		pageResult1 = "paper";
	}
	else{
		pageResult1 = "scissors";
	}
//round 1 
//output message
result=result+"<br><b>Round 1</b> :<br><br>";
result=result+"Players first move = " + move1 + "<br>";
result=result+"Page's first move = " + pageResult1 + "<br><br>" ;
	
//round 1 game play if statements
if(move1==pageResult1){
	result=result+"Round 1 is a draw! <br>";
}
else if(move1=="rock"&&pageResult1=="scissors"){
	result=result+"Round 1, you win! <br>";
}
else if(move1=="paper"&&pageResult1=="rock"){
	result=result+"Round 1, you win! <br>";
}
else if(move1=="scissors"&&pageResult1=="paper"){
	result=result+"Round 1, you win! <br>";
}
else{
	result=result+"Round 1, page wins! <br>";
}
//Round 2
//page play result
	var pageMove2=Math.floor(Math.random()*3);
	var pageResult2;

	if(pageMove2==0){
		pageResult2 = "rock";
	}
	else if(pageMove2==1){
		pageResult2 = "paper";
	}
	else{
		pageResult2 = "scissors";
	}
//round 2
//output message
result=result+"<br><b>Round 2</b> :<br><br>";
result=result+"Players second move = " + move2 + "<br>";
result=result+"Page's second move = " + pageResult2 + "<br><br>";

//round 2 game play if statements
if(move2==pageResult2){
	result=result+"Round 2 is a draw! <br>";
}
else if(move2=="rock"&&pageResult2=="scissors"){
	result=result+"Round 2, you win! <br>";
}
else if(move2=="paper"&&pageResult2=="rock"){
	result=result+"Round 2, you win! <br>";
}
else if(move2=="scissors"&&pageResult2=="paper"){
	result=result+"Round 2, you win! <br>";
}
else{
	result=result+"Round 2, page wins! <br>";
}
//Round 3
//page play result
	var pageMove3=Math.floor(Math.random()*3);
	var pageResult3;

	if(pageMove3==0){
		pageResult3 = "rock";
	}
	else if(pageMove3==1){
		pageResult3 = "paper";
	}
	else{
		pageResult3 = "scissors";
	}
//round 3
//output message
result=result+"<br><b>Round 3</b> :<br><br>";
result=result+"Players third move = " + move3 + "<br>";
result=result+"Page's third move = " + pageResult3 + "<br><br>";

//round 3 game play if statements
if(move3==pageResult3){
	result=result+"Round 3 is a draw! <br>";
}
else if(move3=="rock"&&pageResult3=="scissors"){
	result=result+"Round 3, you win! <br>";
}
else if(move3=="paper"&&pageResult3=="rock"){
	result=result+"Round 3, you win! <br>";
}
else if(move3=="scissors"&&pageResult3=="paper"){
	result=result+"Round 3, you win! <br>";
}
else{
	result=result+"Round 3, page wins! <br>";
}

//print result
document.getElementById("results").innerHTML=result;
}