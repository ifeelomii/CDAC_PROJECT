package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.dao.UserDao;
import com.demo.models.User;

@Service
public class UserService implements IUserService {

    @Autowired
    private UserDao userDao;

    //validate users
    public boolean validateUserServices(User user) {
	    User u = userDao.findByUsername(user.getUsername());
	    if (u != null && u.getPassword().equalsIgnoreCase(user.getPassword())) {
	        return true;
	    } else {
	        return false;
	    }
	}

    //get all Users
    @Override
    public List<User> getAllUsersServices() {
        return userDao.findAll();
    }

    //get user by Id
    @Override
    public User getByIdServices(int id) {
        Optional<User> optionalUser = userDao.findById(id);
        if(optionalUser.isPresent()) {
			 return optionalUser.get();
		 }
		 return null;
    }
    
    //Register User
    @Override
    public Boolean addNewUserServices(User user) {
        return userDao.save(user) != null;
    }

    //Update User By ID
    @Override
    public Boolean updateUserServices(User user) {
        // Check if the user with the given ID exists in the database
        Optional<User> optionalUser = userDao.findById(user.getUserId());

        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();

            // Update the properties of the existing user with the new values
            existingUser.setUsername(user.getUsername());
            existingUser.setPassword(user.getPassword());
            existingUser.setDob(user.getDob());
            existingUser.setState(user.getState());
            existingUser.setCity(user.getCity());
            existingUser.setDistrict(user.getDistrict());
            existingUser.setTaluka(user.getTaluka());
            existingUser.setVillage(user.getVillage());
            existingUser.setRegion(user.getRegion());
            existingUser.setAddress(user.getAddress());
            existingUser.setPanchayat(user.getPanchayat());
            existingUser.setPostoffice(user.getPostoffice());
            existingUser.setPincode(user.getPincode());

            // Save the updated user
            userDao.save(existingUser);
            return true; // Successfully updated
        }

        return false; // User with the given ID not found
    }
    
    //update password
    @Transactional
    @Override
    public boolean updatePassword(int userId, String newPassword) {
        Optional<User> optionalUser = userDao.findById(userId);

        optionalUser.ifPresent(user -> {
            user.setPassword(newPassword);
            userDao.save(user);
        });
        return optionalUser.isPresent();
    }
    @Override
    public Boolean deleteUserByIdServices(int uid) {
        if (userDao.existsById(uid)) {
            userDao.deleteById(uid);
            return true;
        }
        return false;
    }

}
