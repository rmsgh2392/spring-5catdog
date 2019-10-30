"use strict"
var navi = navi || {}
navi =(()=>{
	let _,js,css,img,navi_js,brd_js,router_js,navi_vue_js,auth_js,app_js
	let init =x=>{
		_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
		router_js = js+'/cmm/router.js'
		navi_js = js+'/cmm/navi.js'
		auth_js = js+'/cmm/auth.js'
		brd_js = js+'/brd/brd.js'
		navi_vue_js = js+'/vue/navi_vue.js'
		app_js = js+'app.js'
		alert('navi init들어옴')
	}
	
	let setContentView =()=>{
//		$('nav').html(navi_vue.navigation_navi()).addClass('navbar').appendTo('#navi')
		$('<a>',{
        	href : '#',
	        text : '글쓰기'
        })
        .addClass('nav-link')
        .appendTo('#menu_text')
        .click(e=>{
        	 e.preventDefault()
        	 brd.write()
        })
        $('<a>',{
			href : '#',
			text : '로그아웃'
		})
		.addClass('nav-link')
		.appendTo('#menu_logout')
		.click(e=>{
        	 e.preventDefault()
        	 alert('로그아웃하실 ㅁ')
        	 deleteCookie()
//        	 auth.onCreate()
        	 app.run(_)
        })
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(auth_js),
			$.getScript(brd_js))
		.done(()=>{
		})
		.fail(()=>{
			alert('안됨')
		})
		setContentView()
	}
	
	return{onCreate}
	
	
})();