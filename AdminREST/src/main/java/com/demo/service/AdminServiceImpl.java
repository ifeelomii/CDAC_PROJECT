package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

import com.demo.dao.AdminDao;
import com.demo.model.Admin;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminDao adao;
	
	@Override
	public List<Admin> getAdmins() {
		// TODO Auto-generated method stub
		return adao.findAll();
	}

	@Override
	public void addnewAdmin(Admin adm) {
		adao.save(adm);
		
	}

	@Override
	public Admin getAdminById(int adminID) {
		Optional<Admin> op=adao.findById(adminID);
		if(op.isPresent()) {
			 return op.get();
		 }
		 return null;
		
	}

	@Override
	public void updateById(Admin adm) {
		Optional<Admin> admin=adao.findById(adm.getAdminId());
		if(admin.isPresent()) {
			Admin a=admin.get();
			a.setFirstName(adm.getFirstName());
			a.setLastName(adm.getLastName());
			a.setUsername(adm.getUsername());
			a.setPhoneNumber(adm.getPhoneNumber());
			a.setEmailID(adm.getEmailID());
			adao.save(a);
		}
		
			
		
		
	}

	@Override
	public void deleteById(int adminId) {
		// TODO Auto-generated method stub
		adao.deleteById(adminId);
	}

}
