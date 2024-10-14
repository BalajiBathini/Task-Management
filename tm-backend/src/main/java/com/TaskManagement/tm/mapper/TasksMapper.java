package com.TaskManagement.tm.mapper;

import com.TaskManagement.tm.dto.TaskDto;
import com.TaskManagement.tm.entity.Tasks;

public class TasksMapper {
    public static TaskDto mapToTasksDto(Tasks tasks){
        return new TaskDto(
                tasks.getId(),
                tasks.getTitle(),
                tasks.getDescription(),
                tasks.getStatus(),
                tasks.getCreationDate()
        );
    }
    public static Tasks mapToTasks(TaskDto tasksDto){
        return new Tasks(
                tasksDto.getId(),
                tasksDto.getTitle(),
                tasksDto.getDescription(),
                tasksDto.getStatus(),
                tasksDto.getCreationDate()
        );
    }
}
