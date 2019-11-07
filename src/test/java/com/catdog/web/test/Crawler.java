package com.catdog.web.test;

import java.util.ArrayList;
import java.util.List;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.jsoup.nodes.Element;

public class Crawler {
	public static void main(String[] args) {
		try {
			Document document = Jsoup.connect("https://v4.map.naver.com/?query=%EB%8F%99%EB%AC%BC%EB%B3%91%EC%9B%90&type=SITE_1&queryRank=0").timeout(10*1000).get();
			Elements ele = document.select("div[class=lsnx_det]");
//			Elements ele1 = document.select("div[class=ellipsis rank02]");
			List<String> ele2 = new ArrayList<>();
			List<String> ele3= new ArrayList<>();
			for(Element e : ele) {
				ele2.add(e.text());
			}
//			for(Element e : ele1) {
//				ele3.add(e.text());
//			}
			System.out.println(ele2);
			System.out.println("========================");
//			System.out.println(ele3);
//			String temp = ele.text();
//			String text = document.html();
//			System.out.println(text);
		} catch (Exception e2) {
			e2.printStackTrace();
		}
	}
}
