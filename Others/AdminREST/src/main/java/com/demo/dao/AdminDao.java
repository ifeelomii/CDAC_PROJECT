package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Admin;

@Repository
public interface AdminDao extends JpaRepository<Admin,Integer>{

}
