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
}
	
function Customer(x){
	alert('dddd')
	sessionStorage.setItem('cid',x.cid);
	sessionStorage.setItem('pwd',x.pwd);
	sessionStorage.setItem('pname',x.pname);
	sessionStorage.setItem('creditcard',x.creditcard);

	return{
		cid : ()=>{return sessionStorage.getItem('cid')},
		pwd : ()=>{return sessionStorage.getItem('pwd')},
		pname : ()=>{return sessionStorage.getItem('pname')},
		creditcard : ()=>{return sessionStorage.getItem('creditcard')}
	}
}

/*
 * 이것이 저번에 자바에서 했던 자바스크립트 session코드 !!
 */