package com.demo.service;

import java.util.List;
import com.demo.models.User;

public interface IUserService {
	boolean validateUserServices(User user);
	
	List<User> getAllUsersServices();

	User getByIdServices(int id);

	Boolean addNewUserServices(User user);

	Boolean updateUserServices(User user);
	
	boolean updatePassword(int userId, String newPassword);
	
	Boolean deleteUserByIdServices(int id);



}
