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

import com.demo.models.User;
import com.demo.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService uservice;
	
	@GetMapping("/user")
	public ResponseEntity<List<User>> getAllUsers(){
		return ResponseEntity.ok(uservice.getAllUsersServices());
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<User> getById(@PathVariable int id){
		User user = uservice.getByIdServices(id);
		if(user!=null)
			return ResponseEntity.ok(user);
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	@PostMapping("/user/{id}")
	public ResponseEntity<String> addNewUser(@RequestBody User user){
		uservice.addNewUserServices(user);
		return ResponseEntity.ok("USER ADDED SUCCESSFULLY");
	}
	
	@PutMapping("/user/{id}")
	public ResponseEntity<String> updateUser(@RequestBody User user){
		uservice.updateUserServices(user);
		return ResponseEntity.ok("USER UPDATED SUCCESSFULLY");
	}
	
	@DeleteMapping("/user/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable int id){
		uservice.deleteUserByIdServices(id);
		return ResponseEntity.ok("USER DELETED SUCCESSFULLY");
	}
	
	/* 
	/get all products
	@GetMapping("/user")
	public ResponseEntity<List<User>> showUsers() {
		return ResponseEntity.ok(userService.getAllUsersServices());
	}
	
	//get product by id
	@GetMapping("/user/{pid}")
	public ResponseEntity<User> getUserById(@PathVariable int uid){
		User user = userService.getByIdServices(uid);
		if(user!=null)
			return ResponseEntity.ok(user);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
		
		
	//add product
	@PostMapping("/user/{uid}")
	public ResponseEntity<String> addNewUser(@RequestBody User user){
		userService.addNewUserServices(user);
		return ResponseEntity.ok("User Added Successfully");
	}
		
	//edit product
	@PutMapping("/user/{uid}")
	public ResponseEntity<String> editUser(@RequestBody User user){
		userService.updateUserServices(user);
		return ResponseEntity.ok("User Updated Successfully");
	}
		
	//delete product
	@DeleteMapping("/user/{uid}")
	public ResponseEntity<String> deleteUser(@PathVariable int uid){
		userService.deleteUserByIdServices(uid);
		return ResponseEntity.ok("User Deleted Successfully");
	} 
	*/
}
