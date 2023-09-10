package com.kayainc.springboottodoapplication.bean;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import lombok.extern.log4j.Log4j2;

@Configuration
@Log4j2
public class CommandLineRunnerBean {
    
    public CommandLineRunner commandLineRunnerMethod() {
        return args->{
            // Program başlangıcında otomatik veriler oluşturmak istiyorsak bunu kullanıyoruz
            log.info("Dataset created");
        };
    }
}
