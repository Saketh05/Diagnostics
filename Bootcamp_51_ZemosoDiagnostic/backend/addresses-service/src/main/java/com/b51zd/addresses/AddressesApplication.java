package com.b51zd.addresses;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
@EnableWebMvc
@SpringBootApplication
public class AddressesApplication implements WebMvcConfigurer{

	public static void main(String[] args) {
		SpringApplication.run(AddressesApplication.class, args);
	}
	
	@Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedMethods("GET","POST","OPTIONS")
                .allowedOrigins("https://zemosodiagnostic.gq/");
    }
}
