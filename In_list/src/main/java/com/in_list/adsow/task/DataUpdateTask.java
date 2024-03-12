package com.in_list.adsow.task;

import jakarta.validation.constraints.NotNull;

public record DataUpdateTask(		
		@NotNull
		Long id, 
		Status status) {

}
