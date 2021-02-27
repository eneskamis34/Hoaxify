package com.hoaxify.ws.error;

import java.util.Date;
import java.util.Map;

import lombok.Data;

@Data
public class ApiError {
	
	private int status;
	
	private String message;

	private String path;
	
	private long timestamp = new Date().getTime();
	
	private Map<String, String> validationErrors;
	
	public ApiError(int i, String string, String string2) {
		this.status = status;
		this.message = message;
		this.path = path;
	}
}
