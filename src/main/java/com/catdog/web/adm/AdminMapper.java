package com.catdog.web.adm;

import java.util.HashMap;

public interface AdminMapper {
	public void insertAdmin(Admin param);
	public Admin selectByAid(Admin param);
	public Admin access(Admin param);
	public Admin selectAdmin2(HashMap<?,?> param);
}
