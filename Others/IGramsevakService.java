package com.demo.service;

import java.util.List;

import com.demo.model.Gramsevak;

public interface IGramsevakService {
	boolean validateGramsevakServices(Gramsevak gs);
	
	List<Gramsevak> getAllGramsevaksServices();

	Gramsevak getByIdServices(int id);

	void addNewGramsevakServices(Gramsevak gs);

	void updateGramsevakServices(Gramsevak gs);

	void deleteGramsevakByIdServices(int id);
}
