import "./main.scss";
let str="hello webapck";
document.getElementById("container").textContent=str;

class getData{
	constructor(info){
		this.name=info.name;
		this.age=info.age;
	}
	sayHello(){
		document.write("hello,i am"+this.name+",my age is:"+this.age);
	}
}
//new getData({"name":"柯文磊","age":24}).sayHello();

var foo=()=>{
	let n=5;
	if(true){
		let n=10;
	}
}
foo();

