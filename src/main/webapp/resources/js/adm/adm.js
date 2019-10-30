"use strict"
var adm = adm || {}
adm =(()=>{
	const WHEN_ERR = '에러'
	let _,js,adm_js,cookie_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js+'/cmm/cookie.js'
		adm_js = js+'/adm/adm.js'
		alert('adm.js 진입 ::' +adm_js)
	}
	let onCreate =()=>{
		init()
		setContentView()
		
	}
	let setContentView =()=>{
//		$('<h1>환영합니다</h1>').append()
		
	}
	return{onCreate}
})()