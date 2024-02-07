package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.demo.dao.GramsevakDao;
import com.demo.models.Gramsevak;

public class GramsevakService implements IGramsevakService{

	@Autowired
	private GramsevakDao gsDao;
	
	@Override
	public boolean validateGramsevakServices(Gramsevak gs) {
		return gsDao.validateGramsevakDao(gs);
	}

	@Override
	public List<Gramsevak> getAllGramsevaksServices() {
		return gsDao.getAllGramsevaksDao();
	}

	@Override
	public Gramsevak getByIdServices(int id) {
		return gsDao.getByIdDao(id);
	}

	@Override
	public void addNewGramsevakServices(Gramsevak gs) {
		gsDao.addNewGramsevakDao(gs);
		
	}

	@Override
	public void updateGramsevakServices(Gramsevak gs) {
		gsDao.updateGramsevakDao(gs);
	}

	@Override
	public void deleteGramsevakByIdServices(int id) {
		gsDao.deleteGramsevakByIdDao(id);
		
	}

}
