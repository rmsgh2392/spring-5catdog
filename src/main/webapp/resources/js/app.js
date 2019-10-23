"use strict";
var app = app || {};
var app = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.';
	let _, js,authjs,auth_vue;//자바에 빗대어 멤버변수(인스턴스변수)이고 아래있는 run은 멤버메서드 
	let run =x=>//(x)에서 괄호를 지워도 된다.
		$.getScript(x+'/resources/js/cmm/router.js',()=>{//<--겟스크립트를 가져와 라우터제이에스가 엡제이에스에 들어오면 콜백함수 실행 
			$.extend(new Session(x));//<--$.익스텐드 부터 콜백함수 
			//session이 곧 $가 된다. $ 기능을 받는다 $가 부모 기능을 확장
			//alert('컨텍스트 : '+$.ctx())
			onCreate()
			
		})
		//이 문법이 라우터 자바스크립트에 있는 값들을 가져온다.맵핑!!
		//자바스크립트 상속 문법 실행될때 두 문법다 동시에 실행된다고 생각하면 된다.
	let init =()=>{
		_ = $.ctx();
		js = $.js();//위에 있는 인스턴스변수를 선언한것을 쓰는것이다.
		authjs = $.js()+'/cmm/auth.js';
		alert('authjs : '+authjs);
		//init()은 생성자라서 oncreate까지 간다.
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(authjs)//콜백함수가 없어서 액션은 안하고 불러오기만한다.	
		)//. . . 으로 이루어진거 메서드 체인
		.done(()=>{
			auth.onCreate()
			//콜백
		})
		.fail(()=>{
			alert(WHEN_ERR)
			//콜백
		})//when(무엇을 한다면) 성공하면done(),실패하면fail()
	}
	return{run}
	
})();

