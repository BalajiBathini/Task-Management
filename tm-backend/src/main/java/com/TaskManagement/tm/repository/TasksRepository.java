package com.TaskManagement.tm.repository;

import com.TaskManagement.tm.entity.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TasksRepository extends JpaRepository<Tasks,Long> {
}
