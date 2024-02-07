package com.demo.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import com.demo.models.Admin;
import com.demo.models.Gramsevak;

public class GramsevakDao implements IGramsevakDao {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public boolean validateGramsevakDao(Gramsevak gs) {
		Gramsevak gs1=jdbcTemplate.queryForObject("select * from tbl_geamsevak where username=? and password=?",new Object[] {gs.getUsername(),gs.getPassword()},BeanPropertyRowMapper.newInstance(Gramsevak.class));
		if(gs1.getUsername().equalsIgnoreCase(gs.getUsername())&& gs1.getPassword().equalsIgnoreCase(gs.getPassword())) {
			return true;
		}
		return false;
	

		
	}

	@Override
	public List<Gramsevak> getAllGramsevaksDao() {
		return jdbcTemplate.query("SELECT * FROM tbl_gramsevak", (rs,num)->{
			Gramsevak gs = new Gramsevak();
			gs.setGsId(rs.getString(1));
			gs.setFirstName(rs.getString(2));
			gs.setLastName(rs.getString(3));
			gs.setUsername(rs.getString(4));
			gs.setPassword(rs.getString(5));
			gs.setEmailId(rs.getString(6));
			gs.setPhoneNumber(rs.getString(7));
			gs.setState(rs.getString(8));
			gs.setDistrict(rs.getString(9));
			gs.setTaluka(rs.getString(10));
			gs.setVillage(rs.getString(11));
			gs.setStatus(rs.getInt(12));
			
			return gs;
		});
	}
		
	

	@Override
	public Gramsevak getByIdDao(int id) {
		return jdbcTemplate.queryForObject("SELECT * FROM tbl_gramsevak WHERE user_id = ?", new Object[] {id},BeanPropertyRowMapper.newInstance(Gramsevak.class));
	}

	@Override
	public void addNewGramsevakDao(Gramsevak gs) {
		
		
	}

	@Override
	public void updateGramsevakDao(Gramsevak gs) {
		jdbcTemplate.update("UPDATE tbl_gramsevak SET user_id=?,first_name=?,last_name=?,username=?,password=?,email_id=?,phone_number=?",new Object[] {gs.getGsid(),gs.getFirstName(),gs.getLastName(),gs.getUsername(),gs.getPassword(),gs.getEmailId()});
		
	}

	@Override
	public void deleteGramsevakByIdDao(int id) {
		jdbcTemplate.update("DELETE FROM tbl_gramsevak WHERE user_id=?",new Object[] {id});
		
	}
	

}
