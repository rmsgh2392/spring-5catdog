package com.catdog.web.cur;

import java.io.Serializable;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data 
@Component //붙이면클래스 객체인데 (큰개념으로) 좁은개념bean객체  안붙이면 클래스 객체 
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
	private String cid,pwd,ssn,creditcard,pname,phone,address,email;
}
