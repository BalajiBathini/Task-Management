package com.TaskManagement.tm.controller;

import com.TaskManagement.tm.dto.TaskDto;
import com.TaskManagement.tm.service.TasksService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("/api/tasks")
public class TasksController {
    private TasksService tasksService;
    //Build Task Add REST API
    @PostMapping

    public ResponseEntity<TaskDto> createTasks(@RequestBody TaskDto taskDto){
        TaskDto savedTask= tasksService.createTasks(taskDto);
        return new ResponseEntity<>(savedTask,HttpStatus.CREATED);
    }
    //Build Task View REST API
    @GetMapping("{id}")
    public ResponseEntity<TaskDto> getTaskById( @PathVariable("id") Long id){
        TaskDto savedTask= tasksService.getTaskById(id);
        return ResponseEntity.ok(savedTask);
    }
    //Build all Task Rest API
    @GetMapping
    public ResponseEntity<List<TaskDto>> getAllTasks(){
        List<TaskDto> tasks=tasksService.getAllTasks();
        return ResponseEntity.ok(tasks);

    }
    @PutMapping("{id}")
    public ResponseEntity<TaskDto> updateTask(@PathVariable("id") Long id,@RequestBody TaskDto updatedTask){
        TaskDto taskDto=tasksService.updateTask(id,updatedTask);
        return ResponseEntity.ok(taskDto);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTask(@PathVariable("id") Long id){
        tasksService.deteleTask(id);
        return ResponseEntity.ok("Task Deteled Succussfullyyyy.....!");
    }

}
