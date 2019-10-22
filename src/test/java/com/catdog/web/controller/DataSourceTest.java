package com.catdog.web.controller;

import static org.junit.Assert.fail;
import java.sql.Connection;//try-catch부분에 try()에 있는 connection부분
import javax.sql.DataSource;//datasource가 3개가 있는데 sql로 import할것!!
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.catdog.web.config.RootConfig;
import lombok.Setter;
import lombok.extern.log4j.Log4j;
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes= {com.catdog.web.config.RootConfig.class})
@Log4j
public class DataSourceTest {
	@Setter(onMethod_ = {@Autowired})
	private DataSource dataSource;//자바에서 커넥션 풀을 지원하는 인터페이스
	@Test
	public void testConnection() {
		try (Connection conn = dataSource.getConnection()){
			System.out.println("성공");
			log.info(conn);
		} catch (Exception e) {
			System.out.println("실패");
			fail(e.getMessage());
		}
	}
	
}
