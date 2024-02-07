package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.demo.dao.AdminDao;
import com.demo.models.Admin;

public class AdminService implements IAdminService {

	@Autowired
	private AdminDao adminDao;

	@Override
	public boolean validateAdminServices(Admin admin) {
		return adminDao.validateAdminDao(admin);
	}

	@Override
	public List<Admin> getAllAdminsServices() {
		return adminDao.getAllAdminsDao();
	}

	@Override
	public Admin getByIdServices(int id) {
		return adminDao.getByIdDao(id);
	}

	@Override
	public void addNewAdminServices(Admin admin) {
		adminDao.addNewAdminDao(admin);
	}

	@Override
	public void updateAdminServices(Admin admin) {
		adminDao.updateAdminDao(admin);
	}

	@Override
	public void deleteAdminByIdServices(int id) {
		adminDao.deleteAdminByIdDao( id);
	}
	

}
