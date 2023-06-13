package com.b51zd.patients;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
@EnableWebMvc
@SpringBootApplication
public class PatientsServiceApplication implements WebMvcConfigurer  {

	public static void main(String[] args) {
		SpringApplication.run(PatientsServiceApplication.class, args);
	}

	@Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedMethods("GET","POST","OPTIONS")
                .allowedOrigins("https://zemosodiagnostic.gq/");
    }
}
