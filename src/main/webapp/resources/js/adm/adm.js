"use strict"
var adm = adm || {}
adm =(()=>{
	const WHEN_ERR = '에러'
	let _,js,css,img,adm_js,cookie_js,navi_vue_js,navi_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
		cookie_js = js+'/cmm/cookie.js'
		adm_js = js+'/adm/adm.js'
		navi_vue_js = js+'/vue/navi_vue.js'
		navi_js = js+'/cmm/navi.js'
		alert('adm.js 진입 ::' +adm_js)
	}
	let onCreate =()=>{
		alert('어서와 관리자는 처음이지')
		init()
		$.when(
			$.getScript(navi_vue_js)
//			$.getScript(navi_js)
		)
		.done(()=>{
			setContentView()
//			navi.onCreate()          
		})

		
	}
	let setContentView =()=>{
		//Dom객체
		$('body')
		.empty()
		.append(navi_vue.navi())
		$('<table id="tab"><tr></tr></table>')
		.css({border: '1px solid black', width: '80%', height: '80%', margin: '0 auto'})
		.appendTo('body')
		let arr1 = [{a:'left', b:'20%'},{a: 'right', b:'80%'}]
		$.each(arr1,(i,j)=>{
			$('<td id="'+j.a+'"></td>')
			.css({
				border: '1px solid #ddd',
				width : j.b,
				'vertical-align': 'top'})
			.appendTo('#tab tr')
		})
		let arr = [{txt :'웹크롤링',name:'web_crawling'}
				  ,{txt :'고객관리',name:'customers'}
				  ,{txt :'상품등록',name:'reg_item'}
				  ,{txt :'상품조회',name:'item_srch'}
				  ,{txt :'상품수정',name:'item_mod'}
				  ,{txt :'상품삭제',name:'item_del'}]//json인데 list
		$.each(arr,(i,j)=>{
			$('<div name="'+j.name+'">'+j.txt+'</div>')
			.css({border: '1px solid #ddd', margin: 'auto 0', 'line-height': '50px'})
			.appendTo('#left')
			.click(function(){
				let that = $(this).attr('name')//누른 녀석이 this
				$(this).addClass('active')
				$(this).siblings().removeClass('active')
				switch(that){
				case 'customers' :
					break
				case 'reg_item' :
					break
				case 'item_srch' :
					break
				case 'item_mod' :
					break
				case 'item_del' :
					break
				case 'web_crawling' :
					webCrawling()
					break
				}
//				alert(that+'메뉴클릭 -->')
			})
		})
	} 
	
	let webCrawling =()=>{
		alert('크롤링 들어옴')
//		$('#right').empty()
//		$('<select id="sel_url" size="1">'+
//		  '<input type="text" value="">'+
//		  '<br><input type="submit">'+
//		  '</select>')
//		  .appendTo('#right')
//		let crawl = [{ txt : 'naver', url: 'https://www.naver.com/'}
//				  ,{ txt : 'daum', url: 'https://www.daum.net/'}
//				  ,{ txt : 'google',url:'https://news.google.com/?tab=rn&hl=ko&gl=KR&ceid=KR:ko'}
//				  ,{ txt : 'youtube',url: 'http://www.baemin.com/'}]
//		$.each(crawl,(i,j)=>{
//			$('<option name="'+j.txt+'">'+j.txt+'</option>')
//			.appendTo('#sel_url')
//		})
		$('#right').empty()
		$('<h2>Crawling</h2>'+
				'<form id="crawl_form">'+
				'  <select name="web" size="1">'+
				'  </select>'+
				'   <input type="url" placeholder="insert URL" action="https://www.naver.com" value="https://www.naver.com">'+
				'   <input type="submit" value="전송">'+
				'</form>').appendTo('#right')
		$('#crawl_form input[type="url"]').css({width :'60%'})
		let crawl = [{name : 'naver'},
					 {name : 'google'},
					 {name : 'daum'},
					 {name : 'youtube'}]
		$.each(crawl,(i,j)=>{
			$('<option name="'+j.name+'">'+j.name+'</option>').appendTo('#crawl_form select')
		})
//		test
//		$('#right').empty()
//		$('</br></br></br></br></br><h2>Web Crawling</h2></br></br></br></br></br></br></br>'+
//				'<form id="crawl_form" class="form-inline my-2 my-lg-0" action="https://www.naver.com">'+
//				'  <select name="cars" size="1" multiple>'+
//				'  </select>'+
//		          '<input class="form-control mr-sm-2" type="text" placeholder="insert URL for crawling" aria-label="Search">'+
//		          '<button class="btn btn-secondary my-2 my-sm-0" type="submit">go crawl</button>'+
//				'</form>')
//		.appendTo('#right')
//		$('#crawl_form input[class="form-control mr-sm-2"]')
//		.css({width:'80%'})
//		$.each([{sub:'naver'},{sub:'daum'},{sub:'google'},{sub:'youtube'}],(i,j)=>{
//			$('<option name='+j.sub+'>'+j.sub+'</option>').appendTo('#crawl_form select')
//		})
		
	}
	return{onCreate}
})()