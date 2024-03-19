package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.UserDao;
import com.demo.model.User;

@Service
public class UserService implements IUserService {
	
	@Autowired
	private UserDao udao;	
	
	@Override
	public boolean validateUserServices(User user) {
		return udao.validateUserDao(user);
	}
	
	@Override
	public List<User> getAllUsersServices() {
		return udao.getAllUsersDao();
	}

	@Override
	public User getByIdServices(int id) {
		return udao.getByIdDao(id);
	}

	@Override
	public void addNewUserServices(User user) {
		udao.addNewUserDao(user);
	}

	@Override
	public void updateUserServices(User user) {
		udao.updateUserDao(user);
	}

	@Override
	public void deleteUserByIdServices(int id) {
		udao.deleteUserByIdDao(id);
	}

}
