package com.catdog.web.brd;

import java.util.List;
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
	@Autowired List<Article> list;

	
	
	@PostMapping("/")
	public Map<?,?> UpdateWrite(@RequestBody Article param ) {
		printer.accept("brdctrl에 들어옴");
		param.setBoardType("마이펫 게시판");
		printer.accept("cid :" +param.toString());
		IConsumer<Article> c = t-> articleMapper.insertArticle(t);
		//파라미터와 리턴 사이에 =>에로우펑션을 쓴다. 람다 ~~
		//한줄이면 블락 생략 가능 위에 제네릭스로 아티클이라는 객체가 이미 타입이 있어서 아티클도 제거 
		map.clear();
		c.accept(param);
		map.put("msg", "success");
		printer.accept("map ::" +map);
		ISupplier<Integer> s = ()-> articleMapper.countArticle();
		map.put("count",s.get());
		printer.accept("카운트 값 :"+s.get());
		return map;
	}
	@PostMapping("/{articleseq}")
	public Map<?,?> deleteArticle(@PathVariable String articleseq , @RequestBody Article param ){
		printer.accept("삭제하고싶음 들어와");
		map.clear();
		IConsumer<Article> c = t-> articleMapper.deleteArticle(t);
		c.accept(param);
		map.put("msg","success");
		printer.accept("map ::" +map);
		return map;
	}
	
	@GetMapping("/")
	public List<Article> list(){
		list.clear();//하기전에 깨끗이 클리어하고 하자 !!
		ISupplier<List<Article>> s = ()-> articleMapper.selectAllArticle();//제네릭스 안에 제네릭스가 들어갈 수 있다.
		printer.accept("전체 글 목록 :\n"+ s.get());
		return 	s.get();
	}
	
	@GetMapping("/{articleseq}")
	public Map<?,?> readArticleseqByCid(@PathVariable String board_type , @RequestBody Article param) {
		//@PathVariable String articleseq url에 있는 변수 : /articles/{articleseq}
		//상태라는 개념!! 값이 상수상태냐 변수 상태냐 데이터가 변할 수 있는 상태냐 없는 상태냐 
		//path중에서 바뀔 수 있는 부분 
		return null;
	}
	
	@PutMapping("/{articleseq}")
	public Article UpdateArticle(@PathVariable String articleseq ,@RequestBody Article param) {
		printer.accept("put에 들어옴");
		list.clear();
		IConsumer<Article> c = t-> articleMapper.updateArticle(t);
		c.accept(param);
		IFunction<Article,Article> f= t->articleMapper.getArticle(t);
//		f.apply(param);
		printer.accept("전체글목록 "+f.apply(param));
		return f.apply(param);
	}
	@DeleteMapping("/{articleseq}")
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
