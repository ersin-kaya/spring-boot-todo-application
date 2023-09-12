package com.kayainc.springboottodoapplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import jakarta.annotation.PostConstruct;

import java.util.TimeZone;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class SpringBootTodoApplication {

	@PostConstruct
	public void init() {
		TimeZone.setDefault(TimeZone.getTimeZone("Europe/Istanbul"));
	}

	public static void main(String[] args) {
		SpringApplication.run(SpringBootTodoApplication.class, args);
	}

}
