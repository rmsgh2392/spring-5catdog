package com.catdog.web.adm;
import java.io.Serializable;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data 
@Component
@AllArgsConstructor
@NoArgsConstructor
@Lazy//레이지 로딩이 걸림 다 스프링에서 만들어져 있다 
public class Admin {
	private String aid,pwd,ssn,creditcard,pname,phone,address,email;
	//aid사원번호
}
