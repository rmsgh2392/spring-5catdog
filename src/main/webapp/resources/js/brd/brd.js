"use strict"
var brd = brd || {}
brd = (()=>{
	let _,js,brd_js,brd_vuejs,router_js,navi_js,navi_vue_js,css,img
	
	let init =()=>{
		alert('brd에 init 실행')
		_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
		brd_vuejs = js+'/vue/brd_vue.js'
		brd_js = js+'/brd/brd.js'
		router_js = js +'/cmm/router.js'
		navi_js = js +'/cmm/navi.js'
		navi_vue_js = js+'/vue/navi_vue.js'
	}
	
	let setContentView =()=>{
			$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
	        $('body').html(brd_vue.brd_body({css: $.css(), img: $.img()}))
	        .addClass('bg-light')
//	        .append(navi_vue.navi)
	        $(navi_vue.navi()).appendTo('#navigator')
	        recent_updates()
	}
	let onCreate =()=>{//액션같은거는 onCreate()에서 한다.
		init()
		$.when(
				$.getScript(brd_vuejs),
				$.getScript(navi_js),
				$.getScript(navi_vue_js)
		)
		.done(()=>{
			setContentView()
			navi.onCreate()
		}).fail(()=>{
			alert('navi실패')
		})
	}
	
	let recent_updates =()=>{
		  $('#recent_updates .media').remove()
		  $('#suggestions').remove()
	      $('#recent_updates .d-block').remove()
	      $.getJSON(_+'/articles/',d=>{
	      //url는 명사로 해야함! count는 데이터베이스에 저장되지 않는 상태 데이터 글이 계속 추가하거나 제거할수록 시시각각 데이터의 상태가 바뀌니까 
	    	  alert('성공!!!')
	  			$.each(d, (i,j)=>{//i는 인덱스 값 j가 우리가 하고싶은 article value ,get(i)
	  					$('<div class="media text-muted pt-3">'+
	  					'<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb72%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb72%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">'+
	  					'<p id="id_'+i+'" class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
	  					'</p></div>').appendTo('#recent_updates')
	  			$('<strong class="d-block text-gray-dark">@<a>'+j.cid+'</a></strong>')
	  			.appendTo('#id_'+i)
	  			.click(()=>{
	  				alert('id클릭')
	  			})
	  			$('<a>'+j.title+'</a>')
	  			.appendTo('#id_'+i)
	  			.click(()=>{
	  				alert('제목 클릭')
	  				detail(j)
	  				
	  			})
                //alert("i는"+i)
	  			//태그 안에 들어가면 value 밖에들어가는값은 text
	  			
	  					
	  			})//여기까지 each세상 이치세상은 아래 리센트 세상을 모른다.,$.()객체들은 독립적으로 움직이는 세상 
	  		      //res는 이제 상태변화가 없다.상태가 다하고 나옴
	      })
	}
	       //서플라이에 해당하는거 파라미터없이 값만 가지고 옴
	       //있는 값을 가지고 오기때문에 에러가 나지 않는다 (로그인처럼 아이디 중복이나 아이디가 틀리지 않으니까)
	let write =()=>{
		alert('글쓰기로 이동')
		$('#recent_updates').html(brd_vue.brd_write())
		$('#write_form input[name="writer"]').val(getCookie("cid"))
		$('#suggestions').remove()
		$('<input>',{
			style : 'float:right;width:100px;margin-right:10px',
			value : '취소',
		})
		.addClass('btn btn-danger')
		.appendTo('#write_form')
		.click(()=>{
			alert('취소취소')
			setContentView()
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
				cid :  $('#write_form input[name="writer"]').val(getCookie("cid")),
				title : $('#write_form input[name="title"]').val(getCookie("title")),
				content : $('#write_form textarea[name="content"]').val(getCookie("content"))
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
				success : d=>{//goodbye adios
					alert('ajax결과 :'+d.msg)
					$('#recent_updates div.container-fluid').remove()
					recent_updates()
				},
				error : e=>{
					alert('에러발생 심각심각')
				}
			})
		})
		
	}

	
//	<input type="reset" class="btn btn-danger" style="float:right;width:100px;margin-right:10px" value="CANCEL"/>'
//	+'<input id="write_btn" name="write" type="submit" class="btn btn-primary" style="float:right;width:100px;margin-right:10px" value="SUBMIT"/>'
	
	let detail =x=>{
		//글의 시퀀스 넘버를 주면 쿼리를 이용해 뽑아내자
		alert('넘기는 seq값'+x)
		$('#recent_updates').html(brd_vue.brd_write())
		$('#recent_updates div.container-fluid h1 ').html('ARTICLE DETAL')
		alert('사용자 아이디 ::'+x.cid)
		$('#write_form input[name="writer"]').val(x.cid)
		$('#write_form input[name="title"]').val(x.title)
		$('#write_form textarea[name="content"]').val(x.content)
		$('#suggestions').remove()
		$('<input>',{
			style : 'float:right;width:100px;margin-right:10px',
			value : '삭제',
		})
		.addClass('btn btn-danger')
		.appendTo('#write_form')
		.click(()=>{
			e.preventDefault()
			alert('취소취소')
          	deleteArticle(x)
		})
		$('<input>',{
			style : 'float:right;width:100px;margin-right:10px',
			value : '수정',
			type : 'submit',
		
		})
		.addClass('btn btn-primary')
		.appendTo('#write_form')
		.click (e=>{
			e.preventDefault()
			alert('수정하쉴')
			updateArticle(x)
		})
		
	}
	let  deleteArticle=x=>{
		alert('넘어온 파라미터 x값'+x)
		$.ajax({
			url : _+'/articles/'+x.articleseq,
			type : 'POST',
			dataType : 'json',
			data : JSON.stringify(x),
			contentType: 'application/json',
			success : d=>{
				if(d.msg==='success')
				alert('삭제 성공')
				$('#recent_updates div.container-fluid').remove()
				recent_updates()
			},
			error : e=>{
				alert('삭제 실패')
			}
			
		})
		
	}
	let updateArticle =x=>{
		alert('넘어온 x값 ::'+x)
		$.ajax({
			url : _+'/articles/'+x.articleseq,
			type : 'PUT',
			dataType : 'json',
			contentType : 'application/json',
			data : JSON.stringify({
				articleseq : x.articleseq,
			    cid :$('#write_form input[name="writer"]').val() ,
				title : $('#write_form input[name="title"]').val(),
				content :$('#write_form textarea[name="content"]').val() 
			}),
			success : d=>{
				alert('에이작스 성공')
				
//				$('#recent_updates').html(brd_vue.brd_write())
//				$('#write_form input[name="writer"]').val($cid)
//				$('#suggestions').remove()
//				write()
				$('#recent_updates div.container-fluid').remove()
				recent_updates()
			},
			error : e=>{
				alert('수정실패')
			}
			
		})
		
	}
	
	
	return{onCreate, write}
	
	
})();