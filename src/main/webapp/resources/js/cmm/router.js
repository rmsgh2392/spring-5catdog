"use strict";
function Session(x){
	sessionStorage.setItem('ctx',x);
	sessionStorage.setItem('js',x+'/resources/js');
	sessionStorage.setItem('css',x+'/resources/css');
	sessionStorage.setItem('img',x+'/resources/img');
	
	return{
		ctx : ()=>{return sessionStorage.getItem('ctx');},
		js : ()=>{return sessionStorage.getItem('js');},
		css : ()=>{return sessionStorage.getItem('css');},
		img : ()=>{return sessionStorage.getItem('img');}
	}
	
function Customer(x){
	sessionStorage.setItem('cid',x);
	sessionStorage.setItem('pwd',x);
	sessionStorage.setItem('pname',x);
	sessionStorage.setItem('creditcard',x);

	return{
		cid : ()=>{return sessionStorage.getItem('cid')},
		pwd : ()=>{return sessionStorage.getItem('pwd')},
		pname : ()=>{return sessionStorage.getItem('pname')},
		creditcard : ()=>{return sessionStorage.getItem('creditcard')}
	}
}
}
/*
 * 이것이 저번에 자바에서 했던 자바스크립트 session코드 !!
 */