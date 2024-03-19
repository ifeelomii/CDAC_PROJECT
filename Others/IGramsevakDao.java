package com.demo.dao;

import java.util.List;

import com.demo.model.Gramsevak;

public interface IGramsevakDao {

	boolean validateGramsevakDao(Gramsevak gs);
	
	List<Gramsevak> getAllGramsevaksDao();
	
	Gramsevak getByIdDao(int id);
	
	void addNewGramsevakDao(Gramsevak gs);
	
	void updateGramsevakDao(Gramsevak gs);
	
	void deleteGramsevakByIdDao(int id);
}
