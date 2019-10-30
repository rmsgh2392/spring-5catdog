package com.catdog.web.adm;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.catdog.web.cmm.IFunction;
import com.catdog.web.utl.Printer;

@RestController
@RequestMapping("/admins")
public class AdminCtrl {
	@Autowired Admin admin;
	@Autowired Map<String, Object> map;
	@Autowired List<Admin> list;
	@Autowired AdminMapper adminMapper;
	@Autowired Printer printer;
	
	
	@PostMapping("/")
	public Map<?,?> register(@RequestBody Admin param){
		return map;
	}
	
	@PostMapping("/{aid}")
	public Map<?,?> access(@PathVariable String aid ,@RequestBody Admin param){
		printer.accept(param.toString());
		printer.accept("admin 컨트롤러 access들어옴");
		IFunction<Admin,Admin> f = t-> adminMapper.access(t);
		map.clear();
		map.put("msg", (f.apply(param) !=null) ? "success" : "fail");
		printer.accept("db값" +f.apply(param));
		return map;
//		f.apply(param) !=null ? "success" : "fail"
	}
	@GetMapping("/{aid}")
	public List<Admin> selectAdmin(@PathVariable String aid , @RequestBody Admin param){
		return list;
	}
	@PutMapping("/{aid}")
	public Admin updateAdmin(@PathVariable String aid ,@RequestBody Admin param) {
		return admin;
	}
	@DeleteMapping("{aid}")
	public Map<?,?> deleteAdmin(@PathVariable String aid , @RequestBody Admin param){
		return map;
	}
	
	
	
}
