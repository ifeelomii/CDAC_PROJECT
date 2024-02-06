package com.demo.dao;

import java.util.List;

import com.demo.model.User;

public interface IUserDao {
	boolean validateUserDao(User user);
	
	List<User> getAllUsersDao();
	
	User getByIdDao(int id);
	
	void addNewUserDao(User user);
	
	void updateUserDao(User user);
	
	void deleteUserByIdDao(int id);
}
