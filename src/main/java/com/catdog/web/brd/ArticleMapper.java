package com.catdog.web.brd;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.catdog.web.pxy.Proxy;

@Repository
public interface ArticleMapper {
	public void insertArticle(Article param);
	public String countArticle();
	public List<Article> selectAllArticle(Proxy proxy);
	public void deleteArticle(Article param);
	public void updateArticle(Article param);
	public Article getArticle(Article param);
}
