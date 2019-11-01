package com.catdog.web.test;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public class Crawler {
	public static void main(String[] args) {
		String url = "https://www.naver.com/";
		try {
			Connection.Response respone = Jsoup.connect(url).method(Connection.Method.GET).execute();
			Document document = respone.parse();
			String text = document.text();
			System.out.println(text);
		} catch (Exception e2) {
			e2.printStackTrace();
		}
	}
}
