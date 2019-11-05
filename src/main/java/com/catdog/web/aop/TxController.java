package com.catdog.web.aop;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.catdog.web.pxy.Proxy;
import com.catdog.web.utl.Printer;

@RestController
@Transactional//모듈화 하는 과정
@RequestMapping("/tx")
public class TxController {//컨트롤러는 무조건 서비스 호출 !!!
	@Autowired Printer printer;
	@Autowired Proxy proxy;
	@Autowired TxService txService;
	
	@GetMapping("/crawling/{site}/{srch}")//restful의 방식은 아님 id가 아니기 떄문
	public Map<?,?> crawl(@PathVariable String site, @PathVariable String srch){
		//getJSON은 리퀘스트 바디 안걸음 패스 배류어블만
		printer.accept("tx 컨트롤러 들어옴 사이트 :"+site+", 서치 :"+srch);
		HashMap<String,Object> map = new HashMap<>();
		map.clear();
		map.put("site",site);
		map.put("srch",srch);
		map.put("text",txService.crawling(map));
		txService.crawling(map);
		printer.accept("보낸 값 :"+txService.crawling(map));
		return map;
	}
	
}
