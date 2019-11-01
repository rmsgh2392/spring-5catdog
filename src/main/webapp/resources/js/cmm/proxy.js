"use strict"
//aop에 tx 공통 !! 공통소스 --> 트랜젝션 전 팀원이 갖다 쓰는 무언가 
$.prototype.nullChecker =x=>{//x --> input박스가 여러개 배열 
	let flag = false
	let i =0
	for(i in x){
		if(x[i] === ''){
			flag = true
		}
	}
	return flag
}