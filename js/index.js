//СБРОР ПЕРЕМЕННЫХ 
let str = document.getElementById("demo").innerHTML;
//РАЗДЕЛИТЕЛЬ ПО ПЕРЕНОСУ СТРОКИ 
let arrReg = str.match(/.+\n/g);
//ДОМ ОБЬЕКТОВ 
let arrObj = [];
//КЛАСС ДЛЯ ПОЛУЧЕНИЯ ОБЬЕКТОВ 
class Places{
	constructor(arr,num,img){
		this["Весь текст"] = arr;
		this["Заголовок"]=arr[num*2];
		this["Описание"]=arr[(num*2)+1];
		this["Картинка"]=img;
	}
	createDiv(id){
		let elemBlock = document.createElement("div");
		elemBlock.setAttribute("class","elemBlock");
		let elemTitle = document.createElement("h2");
		elemTitle.innerHTML = this["Заголовок"];
		let elemDiscription = document.createElement("span");
		elemDiscription.innerHTML = this["Описание"];
		let elemImg = document.createElement("img");
		elemImg.setAttribute("src",this["Картинка"]);
		elemBlock.appendChild(elemImg);
		elemBlock.appendChild(elemTitle);
		elemBlock.appendChild(elemDiscription);
		id.appendChild(elemBlock);

	}
}
//ЗАПОЛНЯЕМ ДОМ ОБЬЕКТОВ ЧЕРЕЗ ЦЫКЛ
for(let i = 0; i<arrReg.length/2 ; i++){
	arrObj.push(new Places(arrReg,i,`img/${i+1}.jpg`));
}
//ЧЕРЕЗ ЦЫКЛ ИСПОЛЬЗУЕМ МЕТОД ДЛЯ КАЖДОГО ОБЬЕКТА 
arrObj.forEach(function(elem){
	elem.createDiv(document.getElementById("wrapper"));
	elem.createDiv(document.getElementById("ani"));
});