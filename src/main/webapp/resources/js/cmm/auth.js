//권한을 부여하는 자바스크립트 파일
"use strict";
var auth = auth || {};//객체가 딱 하나 만들어진다 .언제? index.jsp에서 cdn방식으로 한번 만들어진다 (싱글턴 객체)!! 
auth =(()=>{
	const WHEN_ERR ='화면을 찾지 못했습니다'
	let _,js,auth_vuejs,brd_vuejs,brd_js;
	let init =()=>{
		_ = $.ctx();
		js = $.js();
		auth_vuejs = $.js()+'/vue/auth_vue.js'
		brd_vuejs = $.js()+'/vue/brd_vue.js'
		brd_js = $.js()+'/brd/brd.js'
		alert('brd_vue :' +brd_vuejs)
	}
	let onCreate =()=>{
		init();
		$.getScript(auth_vuejs).done(()=>{
        	setContentView()
    		$('#a_join').click(e=>{
         		e.preventDefault()
  				$.getScript(auth_vuejs)
					$('head').html(auth_vue.join_head())
					$('body').html(auth_vue.join_body())
					$('#cid').keyup(()=>{//keyup이라는 이벤트가 실행되고 실행되는 부분 
						if($('#cid').val().length > 3){
							$.ajax({
//									type : 'GET', GET방식은 default라 생략 가능  
									url : _+'/customers/'+$('#cid').val()+'/exist',
									contentType : 'application/json',
									//ajax --> ctrl --> IFunction --> db--> ctrl-->
									//컨트롤러에서 리턴해준 값 d
									success : d => {//d는 갔다가 돌아오는 놈
										if(d.msg==='success'){
											$('#id_check').val('사용가능한 id입니다').css('color','lightblue')
											alert('입력하신 아이디가 없습니다:'+d.msg)
										}else{
										$('#id_check').val('이미 있는 id입니다').css('color','red')}
									},
									error : e =>{
										alert('실패')
									}//ajax와 ctrl(자바)와 통신이 안되면 오는 부분
							})//$.ajax({})부분 끝
						}//if문 끝
							
					})//keyup문 끝
					$('<button>',{
							text : '회원가입' , 
							href: '#' ,
							click : e=>{//버튼이라는 이벤트가 끝나면 실행되는 부분
				         		e.preventDefault()
				         		let d = { 
								cid :  $('#cid').val() ,
								pwd : $('#pwd').val(),
								pname : $('#pname').val()}
				         		join(d)
						}
					})//dom(루트객체)부분 끝 	
						.addClass('btn btn-primary btn-lg btn-block')
						.appendTo('#btn_join')       		
    		})//$('#a_join')클릭이벤트 부분 
        }).fail(()=>{alert(WHEN_ERR)})//done(()=>{})부분
	}//onCreate()부분 끝
	
	let setContentView =()=>{
		$('head')
		.html(auth_vue.login_head({css : $.css(),img : $.img()}))
		$('body')
		.addClass('text-center')
		.html(auth_vue.login_body({css : $.css(),img : $.img()}))
		login()
	}
	
		
	let join =d=>{
	//let join =d=> d는 위에 버튼 클릭을 하면 디비를 갔다가 중복검사를 마치고 넘어온 데이터 값들(cid,pwd,pname...)
					$.ajax({
						url : _+'/customers/',
						type : 'POST',
						dataType : 'json',
						data : JSON.stringify(d),//상대방의 받는녀석의 기준이되서 타입을 맞춰준다.
						contentType : 'application/json',
						success : d => {//customerctrl에  join부분에 들어가서 실행되
							alert('회원가입 성공 :'+d.msg)
							if(d.msg==='success')
								$('head')
								.html(auth_vue.login_head({css : $.css(),img : $.img()}))
								$('body')
								.html(auth_vue.login_body({css : $.css(),img : $.img()}))
								.addClass('text-center')
								//로그인 그림(화면)만 보여주는 부분
								login(d)
								//login()을 불러오면 로그인 함수의 기능들을 실행 
						},
						error : e =>{
							alert('회원가입 실패')
						}
					})//ajax부분 끝
					
				}//조인 함수 끝

	let login =()=>{
			$('<button>',{
				text : "로그인",
				
				href : "#",//json은 자바스크립트 객체라서 기능을 넣어줄 수 있다.
				click : e =>{
					e.preventDefault()
					let data ={
						cid : $('#cid').val(),
						pwd : $('#pwd').val(),
						pname :$('#pname').val()
					}
					alert('넘어가기 전 : '+data.cid)
					$.ajax({
						//전부다 스트링값 뒤에틑 값이니까 객체도 들어오고 스트링도 들어오고 함
						url : _+'/customers/'+$('#cid').val(),
						type : 'POST',
						dataType : 'json',
						data : JSON.stringify(data),
						contentType : 'application/json',//밈 -->jsp에서 contentType="text/html"내가던지는 녀석이 다른쪽에서도 
						success :  d=>{
							alert('넘어온값 :'+d.cid)
							$.getScript(brd_js, ()=>{
								brd.onCreate()
							})
							
						},
						error : e=>{
							alert(WHEN_ERR)
						}
						
					})
				}
			})
			.addClass("btn btn-lg btn-primary btn-bloc")
			.appendTo('#login_btn')
		}
	
//		let brd_main =()=>{
//			let x = {css : $.css(),img : $.img()}
//			$.getScript(brd_vuejs).done(()=>{
//				$('head').html(brd_vue.brd_head())
//				$('body').addClass('bg-light')
//				.html(brd_vue.brd_body())
//			})
//		}
		return{onCreate ,join ,login}//자바스크립
		
})();
//			$('<button>',{
//				text:'회원가입',//text에 값이 있으면 setter
//				href:'#',
//				click : e=>{
//					e.preventDefault()//위에 화면에는 form태그방식으로 되있어서 이거는 ajax방식이 아니고 옛날 방식이다 
//					//그러므로 e.preventDefault()를 써주면 form태그로 되는것을 막아준다. 그래야 컨트롤러에 @requestMapping방식이 먹는다
//					let data = {
//						cid : $('#userid').val(),//자바 (컨트롤러)이름과 맞춰져야함
//						pwd : $('#password').val()//text()파라미터에 값이 없으면 getter
//					
//					}
//					alert('userid :'+ data.cid)
//						
//				//id가 없는 상태(anonymous 무명객체 이름이 없다)에서 클릭을 하는순간 $를 점유하는게 아님 액션은 하긴하는데(event가 걸림) 공간이 없다 이름이 없다는것은 주소가 없다는것이다.<--고스트 상태
//				//여기에 ajax를 걸어서 비동기화식으로 만든다. 그냥 url에다가 쭉 보내버림 저쪽에 있던 없던간에 에러가 없고 보내고 나서 나중에 답을 받음
//					$.ajax({//리턴을 제이슨으로 한다. 다 패턴이다 익숙해져라 
//						url : _+'/customer/join',
//						type : 'POST',//crud 4개중 하나
//						dataType : 'json',
//						data : JSON.stringify(data),//상대방의 받는녀석의 기준이되서 타입을 맞춰준다.
//						contentType : 'application/json',
//						success : d => {
//							alert('AJAX 성공입니당 아이디:'+d.cid+',성공비번 :'+d.pwd)
//							
//						},
//						error : e => {
//							alert('AJAX 실패입니당')
//						}//콜백함수를 두개를 검
//					})
//					//<--이게 제이쿼리 객체 기본형인데 ajax는 앞에 스트링값이 없다
//				}
//			})
//			.addClass("btn btn-primary btn-lg btn-block")
//			.appendTo('#btn_join')
//	let exist=x=>{
//		$.ajax({
//			url : _+'/customers/'+x+'/exist',
//			type : 'GET',
//			contentType : 'application/json',
//			success : d =>{
//				if(d.msg==='success'){
//					alert('사용되는 아이디가 없습니다'+x.cid)
//					return true
//				}else{
//					alert('중복되는 아이디입니다!!')
//					return false
//				}
//			},
//			error : e=>{
//				alert('error')
//				return false
//			}
//		})
//	}
			
//			$('#form_join').append('<h1 id="temp">추가된 노드객체</br>'
//					+'<a id="a_node" href="#">추가된 a노드객체</a></h1>')//<--동적 ui 작업  그리고 이어지는 것이  ajax 어렵 두개 사이에 IO가 일어남
			
//			$('<h1 id="temp">추가된 노드객체</br>'
//					+'<a id="a_node" href="#">추가된 a노드객체</a></h1>')
//					.appendTo('#form_join')
//					
//			$('<a href="#">추가된 a노드객체</a>'
//					+'<h1>추가된 노드객체</br></h1>')//아이디 주면 안됨 람다방식 
//			.appendTo('<h1>추가된 노드객체</br></h1>')
//			.appendTo('#form_join')
//			.click(()=>{
//				prompt('Ghost 무엇을 하고 싶나여?','동적ui클릭')
//			})
