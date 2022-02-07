package com.canteen;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;




@RestController
@CrossOrigin(origins = "http://localhost:4200")
// @RequestMapping("/api/v1/")
public class FoodController 
{
	@Autowired
	private FoodRepo foodrepo ;
	
	
	@GetMapping(path="/foods")
	public Iterable<Food> getAllFoods()
	{
		//System.out.println("Hello");
		return foodrepo.findAll();
	}
	
	  @PostMapping(path="/foods") 
	  public Food addFood(@RequestBody Food food){
		return foodrepo.save(food) ;
	  }
	  
	  @GetMapping("/foods/{id}")
	  public ResponseEntity<Food> getFoodById(@PathVariable Integer id) 
	  {
		Food food=foodrepo.findById(id)
				.orElseThrow(() ->new ResourceNotFoundException("Food not found with id:"+id));
		  return ResponseEntity.ok(food) ;
	  }
	  
	  @PutMapping("/foods/{id}")
	  public ResponseEntity<Food>updateFood(@PathVariable Integer id,@RequestBody Food foodDetails)
	  {
		  Food food=foodrepo.findById(id)
					.orElseThrow(() ->new ResourceNotFoundException("Food not found with id:"+id));
		  food.setFname(foodDetails.getFname());
		  food.setFtype(foodDetails.getFtype());
		  food.setPrice(foodDetails.getPrice());
		  food.setQuantity(foodDetails.getQuantity());
		  Food UpdatedFood=foodrepo.save(food);
		  return ResponseEntity.ok(UpdatedFood) ;
	  }
	  
	  @DeleteMapping("/foods/{id}")
	  public ResponseEntity<Map<String,Boolean>>deleteFood(@PathVariable Integer id){
		  Food food=foodrepo.findById(id)
					.orElseThrow(() ->new ResourceNotFoundException("Food not found with id:"+id));
		  foodrepo.delete(food);
		  Map<String,Boolean> response=new HashMap<>();
		  response.put("deleted",Boolean.TRUE);
		  return ResponseEntity.ok(response);
	  }

		
		

	 

}
	  

