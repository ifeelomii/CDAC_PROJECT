package com.demo.dao;

import java.util.List;

import com.demo.models.Admin;

public interface IAdminDao {
	
	boolean validateAdminDao(Admin admin);
	
	List<Admin> getAllAdminsDao();
	
	Admin getByIdDao(int id);
	
	void addNewAdminDao(Admin admin);
	
	void updateAdminDao(Admin admin);
	
	void deleteAdminByIdDao(int id);
}
