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
	
	@NotNull(message="{hoaxify.constraint.username.NotNull.message}")
	@Size(min = 4, max = 32)
	@UniqueUsername
	private String username;
	
	@NotNull(message = "{hoaxify.constraint.displayname.password.message}")
	@Size(min = 4, max = 32)
	private String displayName;
	
	@NotNull(message = "{hoaxify.constraint.username.password.message}")
	@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", message="{hoaxify.constrain.password.Pattern.message}")
	private String password;
	
	

}
