"use strict"
var compo_vue = compo_vue || {}
compo_vue = {
/*객체 리터럴 방식 왜 ? 공유하는 값이 없으니까 */
		page_size : ()=>{
			return '<div id="listSizeSelectDiv" class="select_component2 is_selected">'+
			'        <form id="page_form" >'+
			'           <select id="page_size" name="page_size" size="1">'+
			'          </select>'+
			'        </form>'+
			'       </div>'
		}

}