package com.catdog.web.brd;

import org.springframework.stereotype.Repository;

@Repository
public interface ArticleMapper {
	public void insertArticle(Article param);
	public int countArticle();
}
