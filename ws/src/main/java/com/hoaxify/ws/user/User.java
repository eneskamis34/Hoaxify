package com.hoaxify.ws.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;


@Data
@Entity
public class User {
	
	@Id
	@GeneratedValue //autoincrement yapmak için.
	private long id;
	
	private String username;
	
	private String displayName;
	
	private String password;
	
	

}
