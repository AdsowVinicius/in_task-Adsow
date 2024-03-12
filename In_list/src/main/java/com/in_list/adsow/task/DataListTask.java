package com.in_list.adsow.task;

public record DataListTask(Long id, String name_task, String description, Status status) {
	
	public DataListTask(Task task) {
		this(task.getId(), task.getName_task(),task.getDescription(), task.getStatus());
			
	}

}
