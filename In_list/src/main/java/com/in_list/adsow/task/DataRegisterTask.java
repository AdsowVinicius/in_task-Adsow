package com.in_list.adsow.task;

import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;

public record DataRegisterTask(

		@NotBlank
		String name_task,
		String description,
		
		@Enumerated 	 	
		Status status) {

}
