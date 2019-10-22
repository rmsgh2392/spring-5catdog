package com.catdog.web.config;
import javax.sql.DataSource;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Configuration
@MapperScan(basePackages = {"com.catdog.web"})
@ComponentScan(basePackages ={"com.catdog.web"})
public class RootConfig {
	@Bean
	public DataSource dataSource() {
		HikariConfig hikarConfig = new HikariConfig();
		hikarConfig.setDriverClassName("com.mysql.jdbc.Driver");
		hikarConfig.setJdbcUrl("jdbc:mysql://localhost:3306/catdog?serverTimezone=UTC");
		hikarConfig.setUsername("catdog");
		hikarConfig.setPassword("catdog");
		HikariDataSource dataSource = new HikariDataSource(hikarConfig);
		
		return dataSource;
	}
	
}

//		DriverManagerDataSource dataSource = new DriverManagerDataSource();
//		dataSource.setDriverClassName("com.mysql.jdbc.Driver");
//		dataSource.setUrl("jdbc:mysql://localhost:3306/catdog?serverTimezone=UTC");
//		dataSource.setUsername("catdog");
//		dataSource.setPassword("catdog");