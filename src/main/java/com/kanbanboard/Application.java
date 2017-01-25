package com.kanbanboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;


@SpringBootApplication()
public class Application {

    public static void main(String[] args) throws Exception {

        SpringApplication.run(Application.class, args);
        System.out.println("Open http://localhost:8080/");
    }

}
