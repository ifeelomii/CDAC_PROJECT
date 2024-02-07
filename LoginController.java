package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.*;
import com.demo.service.*;

@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private UserService userService;
	/*private GSService gsService;
	private AdminService adminService;*/

	@PostMapping("/login/user")
	public ResponseEntity<String> ValidateUser(@RequestBody String username, String password, String role){
		if(role.toLowerCase()=="user") {
			User user = new User();
			user.setUsername(username);
			user.setPassword(password);
			boolean flag = userService.validateUserServices(user);
			if(flag)
				return ResponseEntity.status(HttpStatus.FOUND).build();
			else
				return ResponseEntity.notFound().build();				
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/login/gramsevak")
	public ResponseEntity<String> ValidateGramsevak(@RequestBody String username, String password, String role){
		if(role.toLowerCase()=="user") {
			Gramsevak gs = new Gramsevak();
			gs.setUsername(username);
			gs.setPassword(password);
			boolean flag = userService.validateGramsevakServices(gs);
			if(flag)
				return ResponseEntity.status(HttpStatus.FOUND).build();
			else
				return ResponseEntity.notFound().build();				
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/login/gramsevak")
	public ResponseEntity<String> ValidateAdmin(@RequestBody String username, String password, String role){
		if(role.toLowerCase()=="user") {
			Admin admin = new Admin();
			admin.setUsername(username);
			admin.setPassword(password);
			boolean flag = userService.validateAdminServices(admin);
			if(flag)
				return ResponseEntity.status(HttpStatus.FOUND).build();
			else
				return ResponseEntity.notFound().build();				
		}
		return ResponseEntity.notFound().build();
	}
}
