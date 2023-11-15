// your code here
let url = document.getElementById("url");
url.innerText = "https://localhost:8080/";

let btn = document.getElementById("button");

function changeText(){
  let name = document.getElementById("name").value;
	let year = document.getElementById("year").value;
	let ans = "https://localhost:8080/";
	if(name){
		ans += `?name=${name}`;
	}
	if(year){
		if(name){
			ans += `&?year=${year}`;
		}
		else{
			ans += `?year=${year}`
		}
	}

	url.innerText = ans;
}