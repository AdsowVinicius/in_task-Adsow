package com.in_list.adsow.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.in_list.adsow.task.DataListTask;
import com.in_list.adsow.task.DataRegisterTask;
import com.in_list.adsow.task.DataUpdateTask;
import com.in_list.adsow.task.Task;
import com.in_list.adsow.task.TaskRepository;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/tasks")
public class TaskController {
	@Autowired
	private TaskRepository repository;
	
	@PostMapping
	@Transactional
	public void register(@RequestBody @Valid DataRegisterTask data){
		repository.save(new Task(data));
	}
	
	@GetMapping
	public List<DataListTask> listar(){
		return repository.findAll().stream().map(DataListTask :: new).toList();
	}

	@PutMapping("/{id}") // Adicionando o id ao mapeamento
	@Transactional
	public void update(@PathVariable Long id, @RequestBody @Valid DataUpdateTask data) {
		var task = repository.getReferenceById(id);
		task.updateStatus(data);
	}


	@GetMapping("/{id}")
	public ResponseEntity<DataListTask> detail(@PathVariable long id) {
		var task = repository.getReferenceById(id);
		
		return ResponseEntity.ok(new DataListTask(task));
		
	}
	
	
	
	
	
	
	
	
}
