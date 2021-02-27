package com.hoaxify.ws.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.Data;


@Data
@Entity
public class User {
	
	@Id
	@GeneratedValue //autoincrement yapmak için.
	private long id;
	
	@NotNull
	@Size(min = 4, max = 32)
	@UniqueUsername
	private String username;
	
	@NotNull
	@Size(min = 4, max = 32)
	private String displayName;
	
	@NotNull
	@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$")
	private String password;
	
	

}
