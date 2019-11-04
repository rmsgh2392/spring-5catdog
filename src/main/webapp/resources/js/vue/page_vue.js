"use strict"
var page_vue = page_vue || {}
page_vue ={
		pagination : ()=>{//pagenation 이라고 오타적혀서 고쳤으니 다 찾아봐
			return '<div class="container">'+
			'  <h2>Pagination</h2>'+
			'  <ul id="pagenum" class="pagination">'+
			'    <li class="page-item"><a class="page-link" href="#">Previous</a></li>'+
			'    <li class="page-item"><a class="page-link" href="#">1</a></li>'+
			'    <li class="page-item"><a class="page-link" href="#">2</a></li>'+
			'    <li class="page-item"><a class="page-link" href="#">3</a></li>'+
			'    <li class="page-item"><a class="page-link" href="#">Next</a></li>'+
			'  </ul>'+
			'</div>'
		}
		
}
