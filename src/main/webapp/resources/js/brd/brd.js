"use strict"
var brd = brd || {}
brd = (()=>{
	let _,js,brd_js,brd_vuejs
	
	let init =()=>{
		alert('init 실행')
		_ = $.ctx()
		js = $.js()
		brd_vuejs = js+'/vue/brd_vue.js'
		brd_js = js+'/brd/brd.js'
		
	}
	
	let setContentView =()=>{
		alert("brd_vue.js 경로 ::" +brd_vuejs)
		$.getScript(brd_vuejs, ()=>{
			$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
	        $('body').html(brd_vue.brd_body({css: $.css(), img: $.img()}))
	        .addClass('bg-light')
	        $('#recent_updates .media').remove()
	        $('#recent_updates .d-block').remove()
	        $('#recent_updates').append('<h1>등록된 글이 없습니다.</h1>')
	        $('<a>',{
	        	href : '#',
	        	click : e=>{
		        	e.preventDefault()
		        	write()
		        },
		        text : '글쓰기'
	        })
	        .addClass('nav-link')
	        .appendTo('#a_text')
		})
	}
	
	let write =()=>{
		alert('글쓰기로 이동')
		$('#recent_updates').html(brd_vue.brd_write())
		$('#suggestions').remove()
	}
	
	let onCreate =()=>{//액션같은거는 onCreate()에서 한다.
		init()
		alert('!!!!!!!!!!!!')
		setContentView()
	}
	
	return{onCreate}
	
	
})();