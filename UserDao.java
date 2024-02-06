package com.demo.dao;

import com.demo.model.*;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.demo.model.Person;
import com.demo.model.User;

@Repository
public class UserDao implements IUserDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public boolean validateUserDao(User u) {
		User user =  jdbcTemplate.queryForObject("SELECT * FROM tbl_usercredentials WHERE username = ?", new Object[] {u.getUsername()},BeanPropertyRowMapper.newInstance(User.class));
		if(user.getUsername().equalsIgnoreCase(u.getUsername())&& user.getPassword().equalsIgnoreCase(u.getPassword())) {
			return true;
		}
		return false;
	}
	
	@Override
	public List<User> getAllUsersDao() {
		return jdbcTemplate.query("SELECT * FROM tbl_users", (rs,num)->{
			User user = new User();
			user.setUserId(rs.getString(1));
			user.setFirstName(rs.getString(2));
			user.setLastName(rs.getString(3));
			user.setUsername(rs.getString(4));
			user.setPassword(rs.getString(5));
			user.setEmailId(rs.getString(6));
			user.setDob(rs.getDate(7));
			user.setPhoneNumber(rs.getString(8));
			user.setState(rs.getString(9));
			user.setCity(rs.getString(10));
			user.setDistrict(rs.getString(11));
			user.setTaluka(rs.getString(12));
			user.setVillage(rs.getString(13));
			user.setRegion(rs.getString(14));
			user.setAddress(rs.getString(15));
			user.setPanchayat(rs.getString(16));
			user.setPostoffice(rs.getString(17));
			user.setPincode(rs.getInt(18));
			return user;
		});
	}

	@Override
	public User getByIdDao(int id) {
		return jdbcTemplate.queryForObject("SELECT * FROM tbl_users WHERE user_id = ?", new Object[] {id},BeanPropertyRowMapper.newInstance(User.class));
	}

	@Override
	public void addNewUserDao(User user) {
		jdbcTemplate.update("UPDATE tbl_users SET user_id=?,first_name=?,last_name=?,username=?,password=?,email_id=?,dob=?,phone_number=?,state=?,city=?,district=?,taluka=?,village=?,address=?,panchayat=?,post_office=?,pin_code=?",new Object[] {user.getUserId(),user.getFirstName(),user.getLastName(),user.getUsername(),user.getPassword(),user.getEmailId(),user.getDob(),user.getPhoneNumber(),user.getState(),user.getCity(),user.getDistrict(),user.getTaluka(),user.getVillage(),user.getRegion(),user.getAddress(),user.getPanchayat(),user.getPostoffice(),user.getPincode()});
	}

	@Override
	public void updateUserDao(User user) {
		jdbcTemplate.update("UPDATE tbl_users SET first_name=?,last_name=?,username=?,password=?,email_id=? WHERE user_id=?",new Object[] {user.getFirstName(),user.getLastName(),user.getUsername(),user.getPassword(),user.getEmailId(),user.getUserId()});
	}

	@Override
	public void deleteUserByIdDao(int id) {
		jdbcTemplate.update("DELETE FROM tbl_users WHERE user_id=?",new Object[] {id});
	}

	

}
