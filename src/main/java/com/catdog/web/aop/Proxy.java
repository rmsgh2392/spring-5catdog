package com.catdog.web.aop;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.catdog.web.utl.Printer;

import lombok.Data;

@Data
@Component
@Lazy//레이지 로딩이 걸림 
public class Proxy {
//프록시 패턴 -- 트렌잭션 패턴
	private int pageNum;
	private String search;//검색어
//	@Autowired List<String> proxyList;
	@Autowired Printer printer;
	
	public List<?> crawl(Map<?,?> paramMap){
		String url = "https://"+paramMap.get("site")+"/";
		printer.accept("프록시에 들어옴 넘어온 url \n" +url);
		List<String> proxyList = new ArrayList<>();
		proxyList.clear();
		try {
			Connection.Response respone = Jsoup.connect(url).method(Connection.Method.GET).execute();
			Document document = respone.parse();
			String text = document.text();
			proxyList.add(text);
			printer.accept("크롤링한 값  \n: "+text);

		} catch (Exception e2) {
			e2.printStackTrace();
		}
		
		return proxyList;
	}
	
}
