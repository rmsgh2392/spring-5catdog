"use strict"
var brd = brd || {}
brd = (()=>{
	let _,js,brd_js,brd_vuejs,router_js,$cid,$pname
	
	let init =()=>{
		alert('init 실행')
		_ = $.ctx()
		js = $.js()
		brd_vuejs = js+'/vue/brd_vue.js'
		brd_js = js+'/brd/brd.js'
		router_js = js +'cmm/router.js'
		$cid = $.cid()
		$pname = $.pname()
		
		
	}
	
	let setContentView =()=>{
		alert("brd_vue.js 경로 ::" +brd_vuejs)
			$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
	        $('body').html(brd_vue.brd_body({css: $.css(), img: $.img()}))
	        .addClass('bg-light')
	        $('#recent_updates .media').remove()
	        $('#recent_updates .d-block').remove()
	        $('#recent_updates').append('<h1>등록된 글이 없습니다.</h1>')
	}
	
	let write =x=>{
		alert('글쓰기로 이동')
		$('#recent_updates').html(brd_vue.brd_write())
		alert('사용자 아이디 ::'+$cid)
		$('#write_form input[name="writer"]').val($cid)
		$('#suggestions').remove()
		$('<input>',{
			style : 'float:right;width:100px;margin-right:10px',
			value : '취소',
		})
		.addClass('btn btn-danger')
		.appendTo('#write_form')
		.click(()=>{
			alert('취소취소')
			$.ajax({
				url : '',
				data : {},
				dataType : '',
				contentType : '',
				success : ()=>{},
				error : ()=>{}
			})
		})
		$('<input>',{
			style : 'float:right;width:100px;margin-right:10px',
			value : '전송',
			type : 'submit',
		
		})
		.addClass('btn btn-primary')
		.appendTo('#write_form')
		.click  (e=>{
			e.preventDefault()
			let json = {
				cid :  $('#write_form input[name="writer"]').val(),
				title : $('#write_form input[name="title"]').val(),
				content : $('#write_form textarea[name="content"]').val()
				
			}
			alert('title : '+json.title)
			$.ajax({
				url : _+'/articles/',
				type : 'POST',
				//1.rest프레임 타입 중 상태에 대한 타입 (post,get,put,delete) crud!!
				data : JSON.stringify(json),
				dataType : 'json',
				//2.json타입 자바스크립트는 객체 타입은 전부 json!!{} 객체구나 [] 컬렉션이구나 어쩃든 타입은 json !!! ,가기전
 				contentType : 'application/json',
 				//3.자바가 보낸것을 이렇게 바꿔라 원래는 application(자바,c파이썬)어떤건지 모르지만 json으로 바꿔라 ,갔다왔을때 타입 
				success : d=>{
					alert('ajax결과 :'+d.msg)
					$.getScript(brd_vuejs).done(()=>{
						$('#recent_updates').html('<h1>목록 불러오기</h1>')
					})
				
				},
				error : e=>{
					alert('에러발생 심각심각')
				}
			})
		})
		
	}

	
//	<input type="reset" class="btn btn-danger" style="float:right;width:100px;margin-right:10px" value="CANCEL"/>'
//	+'<input id="write_btn" name="write" type="submit" class="btn btn-primary" style="float:right;width:100px;margin-right:10px" value="SUBMIT"/>'
	let onCreate =()=>{//액션같은거는 onCreate()에서 한다.
		init()
		alert('!!!!!!!!!!!!')
		$.getScript(brd_vuejs,()=>{
			setContentView()
			navigation()
		})
		
	}
	let navigation =()=>{
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
	}
	
	return{onCreate}
	
	
})();