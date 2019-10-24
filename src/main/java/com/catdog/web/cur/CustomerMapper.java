package com.catdog.web.cur;

import org.springframework.stereotype.Repository;

@Repository//메서드 이름을 테이블이름으로 주는게 좋다 
public interface CustomerMapper {
	public void insertCustomer(Customer param);
	public Customer selectCustomerById(Customer param);
	public int existId(String cid);
}
