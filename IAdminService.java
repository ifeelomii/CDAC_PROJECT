package com.demo.service;

import java.util.List;

import com.demo.model.Admin;
import com.demo.model.Gramsevak;

public interface IAdminService {
	boolean validateAdminServices(Admin admin);
	
	List<Admin> getAllAdminsServices();

	Admin getByIdServices(int id);

	void addNewAdminServices(Admin admin);

	void updateAdminServices(Admin admin);

	void deleteAdminByIdServices(int id);
	
	boolean updatePassword(int adminId, String newPassword);
}
