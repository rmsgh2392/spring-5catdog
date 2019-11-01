package com.catdog.web.brd;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.catdog.web.cur.Customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@Component //붙이면클래스 객체인데 (큰개념으로) 좁은개념bean객체  안붙이면 클래스 객체 
@AllArgsConstructor
@NoArgsConstructor
@Lazy //데이터 트랜스퍼한테만 건다.
public class Article {
	private String articleseq, image , cid, comments, msg, rating, boardType, title, content ;
}
