package com.catdog.web.aop;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.catdog.web.pxy.Proxy;
import com.catdog.web.utl.Printer;

@Transactional
@Service//트랜젝션을 지원하는 서비스  모듈화하는 과정
public class TxService {//서비스를 인터페이스로 안만들고 클래스로 만든거는 pojo다 !!
	@Autowired Proxy pxy; //프록시 사무실
	@Autowired Printer printer;

	
	@SuppressWarnings("unchecked")//노란불 뜨면 그냥 잡아서 실행하면 됨
	public List<?> crawling(Map<?,?> paramMap){
		List<String> txServiceList = new ArrayList<>();
		printer.accept("tx서비스 들어옴");
		txServiceList.clear(); 
		txServiceList = (List<String>) pxy.crawl(paramMap);
		return txServiceList;
	}
	
}
