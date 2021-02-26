package com.hoaxify.ws.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hoaxify.ws.shared.GenericResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController                // rest işlemlerini yapacağımız için Springe tanımlıyoruz.
public class UserController {
	
	
	@Autowired
	UserService userService;
	
	@PostMapping("/api/1.0/users")
	public GenericResponse createUser(@RequestBody User user) {
		userService.save(user);	
		return new GenericResponse("create user.");
	}

}
