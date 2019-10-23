package com.catdog.web.adm;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.catdog.web.cmm.IConsumer;
import com.catdog.web.cmm.IFunction;
import com.catdog.web.cur.CustomerCtrl;
import com.catdog.web.cur.CustomerMapper;

@RestController
@RequestMapping("/admins")
public class AdminCtrl {
	private static final Logger logger = LoggerFactory.getLogger(AdminCtrl.class);
	@Autowired Admin admin;
	@Autowired AdminMapper adminMapper;
	
	@PostMapping("/")
	public String join(@RequestBody Admin param) {
		IConsumer<Admin> c = t-> adminMapper.insertAdmin(t);
		c.accept(param);
		return "gg";
	}
	@PostMapping("/login")
	public Admin login (@RequestBody Admin param) {
		IFunction<Admin,Admin> a = t->adminMapper.selectByAid(param);
		return a.apply(param);
	}
}
