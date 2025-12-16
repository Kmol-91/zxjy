package com.onlineeduplatform.onlineeduplatform;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.onlineeduplatform.onlineeduplatform.mapper")
public class OnlineEduPlatformApplication {

    public static void main(String[] args) {
        SpringApplication.run(OnlineEduPlatformApplication.class, args);
    }

}
