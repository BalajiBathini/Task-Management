package com.TaskManagement.tm.service;

import com.TaskManagement.tm.dto.TaskDto;

import java.util.List;

public interface TasksService {
    TaskDto createTasks(TaskDto taskDto);
    TaskDto getTaskById(Long id);
    List<TaskDto> getAllTasks();
    TaskDto updateTask( Long id,TaskDto updatedTask);
    void deteleTask(Long id);
}
