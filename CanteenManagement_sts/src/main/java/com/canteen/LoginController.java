package com.canteen;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/")
public class LoginController {
	@Autowired
	private LoginRepo loginrepo ;
	@GetMapping(path="/login")
	public List<Login> getAllUser()
	{
		//System.out.println("Hello");
		return loginrepo.findAll();
	}
	
	  @PostMapping(path="login/registration") 
	  public Login User(@RequestBody Login login){
		  Login loginobj=loginrepo.save(login);
			return loginobj;
		
	  }
	 @PostMapping(path="login/logindata") 
	  public Login loginuser(@RequestBody Login login) throws Exception{
		  String emailid=login.getEmailid();
		  String password=login.getPassword();
		  Login loginobj=null;
		  if(emailid !=null && password !=null) {
			  loginobj=loginrepo.findByEmailidAndPassword(emailid,password);
		  }
			
	  if(loginobj==null) { throw new Exception("Incorrect Credentials"); }
			 
		return loginobj ;
	  }
}
