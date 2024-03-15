package com.in_list.adsow.task;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table (name = "task")
@Entity(name = "tasks")
@Getter 
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@Data
public class Task {
	public Task(DataRegisterTask data) {
		this.name_task = data.name_task();
		this.description = data.description();
		this.status = data.status();
	}
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name_task;
	private String description;
	
	@Enumerated(EnumType.STRING) 	
	private Status status;

	public void updateStatus(@Valid DataUpdateTask data) {
		if(data.status() != null) {
			this.status = data.status();
		}
	}
}
