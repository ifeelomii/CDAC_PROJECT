//package com.demo.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.demo.models.Gramsevak;
//import com.demo.service.GramsevakService;
//
//
//
//@RestController
//@RequestMapping("/gramsevak")
//public class  GramsevakController{
//		
//	@Autowired
//	private GramsevakService gservice;
//		
//	@GetMapping("/gramsevak")
//	public ResponseEntity<List<Gramsevak>> getAllGramsevak(){
//		return ResponseEntity.ok(gservice.getAllGramsevaksServices());
//	}
//		
//	@GetMapping("/gramsevak/{gsId}")
//	public ResponseEntity<Gramsevak> getGsById(@PathVariable int gsId){
//		Gramsevak gs = gservice.getByIdServices(gsId);
//		if(gs!=null) {
//			return ResponseEntity.ok(gs);
//		}
//		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//	}
//		
//	@PostMapping("/gramsevak/{gsId}")
//	public ResponseEntity<String> addNewGramsevak(@RequestBody Gramsevak gs){
//		gservice.addNewGramsevakServices(gs);
//		return ResponseEntity.ok("GRAMSEVAK ADDED SUCCESSFULLY");
//	}
//		
//	@PutMapping("/gramsevak/{gsId}")
//	public ResponseEntity<String> updateGramsevak(@RequestBody Gramsevak gs){
//		gservice.updateGramsevakServices(gs);
//		return ResponseEntity.ok("GRAMSEVAK UPDATED SUCCESSFULLY");
//	}
//		
//	@DeleteMapping("/gramsevak/{gsId}")
//	public ResponseEntity<String> deleteGramsevak(@PathVariable int gsId){
//		gservice.deleteGramsevakByIdServices(gsId);
//		return ResponseEntity.ok("GRAMSEVAK DELETED SUCCESSFULLY");
//	}
//
//}
