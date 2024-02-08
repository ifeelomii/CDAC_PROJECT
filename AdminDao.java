package com.demo.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import com.demo.model.Admin;

public class AdminDao implements IAdminDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	@Override
	public boolean validateAdminDao(Admin admin) {
		Admin a =  jdbcTemplate.queryForObject("SELECT * FROM tbl_admincredentials WHERE username = ?", new Object[] {admin.getUsername()},BeanPropertyRowMapper.newInstance(Admin.class));
		if(a.getUsername().equalsIgnoreCase(admin.getUsername())&& a.getPassword().equalsIgnoreCase(admin.getPassword())) {
			return true;
		}
		return false;
	}

	@Override
	public List<Admin> getAllAdminsDao() {
		return jdbcTemplate.query("SELECT * FROM tbl_admin", (rs,num)->{
			Admin a = new Admin();
			a.setUserId(rs.getString(1));
			a.setFirstName(rs.getString(2));
			a.setLastName(rs.getString(3));
			a.setUsername(rs.getString(4));
			a.setPassword(rs.getString(5));
			a.setEmailId(rs.getString(6));
			a.setPhoneNumber(rs.getString(7));
			return a;
	});
	}
	@Override
	public Admin getByIdDao(int id) {
		return jdbcTemplate.queryForObject("SELECT * FROM tbl_admin WHERE user_id = ?", new Object[] {id},BeanPropertyRowMapper.newInstance(Admin.class));
	}

	@Override
	public void addNewAdminDao(Admin admin) {
		String str="insert into tbl_admin values(?,?,?,?,?,?,?)";
		jdbcTemplate.update(str,new Object[] {admin.getUserId(),
				admin.getFirstName(),admin.getLastName(),admin.getUsername(),admin.getPassword(),admin.getEmailId(),admin.getPhoneNumber()});		
	}

	@Override
	public void updateAdminDao(Admin admin) {
		jdbcTemplate.update("UPDATE tbl_admin SET first_name=?,last_name=?,username=?,password=?,email_id=? WHERE user_id=?",new Object[] {admin.getFirstName(),admin.getLastName(),admin.getUsername(),admin.getPassword(),admin.getEmailId(),admin.getUserId()});
		
	}

	@Override
	public void deleteAdminByIdDao(int id) {
		jdbcTemplate.update("DELETE FROM tbl_admin WHERE user_id=?",new Object[] {id});
		
	}

}
