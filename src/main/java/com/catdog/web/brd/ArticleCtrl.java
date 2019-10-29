package com.catdog.web.brd;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.catdog.web.cmm.IConsumer;
import com.catdog.web.cmm.IFunction;
import com.catdog.web.cmm.ISupplier;
import com.catdog.web.cur.CustomerCtrl;
import com.catdog.web.utl.Printer;

@RestController
@RequestMapping("/articles")//상수풀로 처리 
public class ArticleCtrl {
	private static final Logger logger = LoggerFactory.getLogger(ArticleCtrl.class);
	@Autowired Printer printer;
	@Autowired Article article;
	@Autowired Map<String,Object> map;
	@Autowired ArticleMapper articleMapper;

	
	
	@PostMapping("/")
	public Map<?,?> UpdateWrite(@RequestBody Article param ) {
		printer.accept("brdctrl에 들어옴");
		param.setBoard_type("마이펫 게시판");
		printer.accept("cid :" +param.toString());
		IConsumer<Article> c = t-> articleMapper.insertArticle(t);

		//파라미터와 리턴 사이에 =>에로우펑션을 쓴다. 람다 ~~
		//한줄이면 블락 생략 가능 위에 제네릭스로 아티클이라는 객체가 이미 타입이 있어서 아티클도 제거 
//		c.accept(param);
		map.clear();
		c.accept(param);
		map.put("msg", "success");
		printer.accept("map ::" +map);
		ISupplier<Integer> s = ()-> articleMapper.countArticle();
		map.put("count",s.get());
		printer.accept("카운트 값 :"+s.get());
		return map;
	}
	
	@GetMapping("/{articleseq}")
	public Map<?,?> readArticleseqByCid(@PathVariable String board_type , @RequestBody Article param) {
		//@PathVariable String articleseq url에 있는 변수 : /articles/{articleseq}
		//상태라는 개념!! 값이 상수상태냐 변수 상태냐 데이터가 변할 수 있는 상태냐 없는 상태냐 
		//path중에서 바뀔 수 있는 부분 
		return null;
	}
	
	@PutMapping("/{articleseq}")
	public String UpdateArticle(@PathVariable String articleseq ,@RequestBody Article param) {
		return null;
		
	}
	@DeleteMapping("/{articleseq}/comments")
	public Map<?,?> removeArticle(@PathVariable String articleseq, @RequestBody Article param) {
		return null;
	}

	@GetMapping("/count")
	public Map<?,?> count(){
		ISupplier<Integer> s = ()-> articleMapper.countArticle();
		printer.accept("카운트 값 :"+s.get());
		map.clear();
		map.put("count",s.get());
		return map;
	}
}
