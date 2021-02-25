package com.hoaxify.ws.user;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController                //tüm rest işlemlerini yapacağımız için Springe tanımlıyoruz.
public class UserController {
	
	private static final Logger log = org.slf4j.LoggerFactory.getLogger(UserController.class);
	
	@PostMapping("/api/1.0/users")
	public void createUser(@RequestBody User user) {
		log.info(user.toString());		
	}

}
