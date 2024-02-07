package com.demo.service;

import java.util.List;
import com.demo.models.User;

public interface IUserService {
	boolean validateUserServices(User user);
	
	List<User> getAllUsersServices();

	User getByIdServices(int id);

	void addNewUserServices(User user);

	void updateUserServices(User user);

	void deleteUserByIdServices(int id);
}
