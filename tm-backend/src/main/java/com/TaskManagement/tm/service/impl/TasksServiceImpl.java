package com.TaskManagement.tm.service.impl;

import com.TaskManagement.tm.dto.TaskDto;
import com.TaskManagement.tm.entity.Tasks;
import com.TaskManagement.tm.exception.ResourceNotFoundException;
import com.TaskManagement.tm.mapper.TasksMapper;
import com.TaskManagement.tm.repository.TasksRepository;
import com.TaskManagement.tm.service.TasksService;
import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TasksServiceImpl implements TasksService {
private final TasksRepository tasksRepository;
    @Override
    public TaskDto createTasks(TaskDto taskDto) {
         Tasks tasks=TasksMapper.mapToTasks(taskDto);
         tasks.setCreationDate(LocalDateTime.now());
         Tasks savedTask=tasksRepository.save(tasks);

        return TasksMapper.mapToTasksDto(savedTask);

    }

    @Override
    public TaskDto getTaskById(Long id) {
        Tasks task=tasksRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Task not Found with id:"+ id));
        return TasksMapper.mapToTasksDto(task);
    }

    @Override
    public List<TaskDto> getAllTasks() {
        List<Tasks> tasks=tasksRepository.findAll();

        return tasks.stream().map((task)->TasksMapper.mapToTasksDto(task)).collect(Collectors.toList());
    }

    @Override
    public TaskDto updateTask(Long id, TaskDto updatedTask) {
        Tasks task=tasksRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Task not Found with id:"+ id));
        task.setTitle(updatedTask.getTitle());
        task.setDescription(updatedTask.getDescription());
        task.setStatus(updatedTask.getStatus());

        Tasks updatedTaskObj=tasksRepository.save(task);

        return TasksMapper.mapToTasksDto(updatedTaskObj);
    }

    @Override
    public void deteleTask(Long id) {
        Tasks task=tasksRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Task not Found with id:"+ id));
        tasksRepository.deleteById(id);
    }


}
