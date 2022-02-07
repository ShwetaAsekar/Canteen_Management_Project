package com.canteen;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;
@Repository
public interface LoginRepo extends JpaRepository<Login,Integer> {

	Login findByEmailidAndPassword(String emailid, String password);

	
	

}
