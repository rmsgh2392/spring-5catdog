package com.catdog.web.pxy;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Supplier;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.catdog.web.brd.ArticleMapper;
import com.catdog.web.cmm.IFunction;
import com.catdog.web.cmm.ISupplier;
import com.catdog.web.utl.Printer;

import lombok.Data;

@Component
@Data
@Lazy
public class Proxy {
	private int pageNum,
				pageSize,
				startRow,
				endRow,
				nextBlock,
				prevBlock,
				startPage,
				endPage,
				totalCount,
				pageCount,
				blockCount,
				blockNum;
	private boolean existPrev, existNext;
	private String search;
	private final int BLOCK_SIZE = 5;
	@Autowired Printer printer;
	@Autowired ArticleMapper articleMapper;
	/*크롤링 프록시 페이징네이션프록시 따로 만들어도 상관없다 웬만하면 같이 모아도된다.*/

	@SuppressWarnings("unused")
	public void paging() {
		ISupplier<String> s = ()->articleMapper.countArticle();
		totalCount = Integer.parseInt(s.get());
		printer.accept("전체 글 개수 : "+totalCount);
		pageCount = (totalCount%pageSize==0)? totalCount/pageSize : (totalCount/pageSize)+1;
//		startRow = (pageNum * pageSize)-pageSize
		startRow = (pageNum-1)*pageSize;
//		endRow = (pageSize % 5 == 0) ? startRow + 4 : startRow + (pageSize % 5);
//		endRow = startRow + (5 * pageNum);
		//endRow = startRow +4
		endRow = (pageNum == pageCount) ? totalCount-1 : startRow + pageSize -1;
	    blockCount = (pageCount%BLOCK_SIZE==0)? pageCount/BLOCK_SIZE : (pageCount/BLOCK_SIZE)+1;
	    blockNum = (pageNum-1)/BLOCK_SIZE;
		startPage = (blockNum * BLOCK_SIZE)+1; //page 는 1부터 찍게 하자 그래서 +1 따로 자바스크립트에서 추가하지말고 
		endPage = (blockNum == (blockCount-1)) ? pageCount : (blockNum * 5) + BLOCK_SIZE;
		//endpage = (blockNum == blockCount) ? blockCount -1 : startPage + BLOCK_SIZE;
		//endpage = ((bl20ockNum+1) == blockCount) ? pageCount : startPage + (BLOCK_SIZE -1); --> 다른사람들 알고리즘 
//		boolean existPrev = false;
		// boolean existPrev = blockCount > 1
		if(blockNum != 0) {
			existPrev = true;
		}else {
			existPrev = false;
		}
		existNext = (blockCount-1) != blockNum;
		//(blockNum +1) != blockCount;
//		if((blockCount-1) != blockNum) {
//			existNext = true;
//		}else {
//			existNext = false;
//		}
		nextBlock = startPage + BLOCK_SIZE;
		prevBlock = startPage - BLOCK_SIZE;
			
//			 pages = BLOCK_SIZE;
	}
	public int parseInt(String param) {
		Function<String, Integer> f = t ->Integer.parseInt(t);
		return f.apply(param);
	}
	
	public List<?> crawl(Map<?,?> paramMap){
		String url = "https://"+paramMap.get("site")+"/";
		printer.accept("프록시에 들어옴 넘어온 url \n" +url);
		List<String> proxyList = new ArrayList<>();
		proxyList.clear();
		try {
			Connection.Response respone = Jsoup.connect(url).method(Connection.Method.GET).execute();
			Document document = respone.parse();
			String text = document.html();
			proxyList.add(text);
			printer.accept("크롤링한 값  \n: "+text);

		} catch (Exception e2) {
			e2.printStackTrace();
		}
		
		return proxyList;
	}
	public int random(int a, int b) {
		printer.accept("ctrl에서 넘어온 파라미터 값 :"+a +','+ b );
		BiFunction<Integer, Integer, Integer> f = (t,u) -> (int) (Math.random()*(u-t))+t;
		f.apply(a,b);
		return f.apply(a,b); 
	}
}
