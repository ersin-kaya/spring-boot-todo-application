package com.kayainc.springboottodoapplication.bean;


import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

@Configuration
public class OpenApiConfigBean {
    
    public OpenAPI openAPIMethod() {
        return new OpenAPI()
        .info(
            new Info()
            .description("Todo ")
            .version("v1")
            .contact(new Contact().email("email"))
            .title("title44")
            .termsOfService("Kaya Inc.")
            .license(new License().url("https://www.").name("name")));
    }
}
