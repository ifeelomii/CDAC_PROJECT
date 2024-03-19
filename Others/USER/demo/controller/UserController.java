package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.demo.models.User;
import com.demo.service.IUserService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private IUserService uservice;

    @GetMapping
    public List<User> getAllUsers() {
        return uservice.getAllUsersServices();
    }

    @GetMapping("/{id}")
    public User getById(@PathVariable int id) {
        return uservice.getByIdServices(id);
    }

    @PostMapping
    public String addNewUser(@RequestBody User user) {
        return uservice.addNewUserServices(user) ? "USER ADDED SUCCESSFULLY" : "USER ADDITION FAILED";
    }

    @PutMapping
    public String updateUser(@RequestBody User user) {
        return uservice.updateUserServices(user) ? "USER UPDATED SUCCESSFULLY" : "USER UPDATE FAILED";
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable int id) {
        return uservice.deleteUserByIdServices(id) ? "USER DELETED SUCCESSFULLY" : "USER DELETION FAILED";
    }

    @PatchMapping("/updatePassword")
    public String updatePassword(@RequestParam int userId, @RequestParam String newPassword) {
        return uservice.updatePassword(userId, newPassword) ? "PASSWORD UPDATED SUCCESSFULLY" : "PASSWORD UPDATE FAILED";
    }
}
