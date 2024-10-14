package com.TaskManagement.tm.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.security.PrivateKey;
import java.time.LocalDateTime;

@Getter

@Setter@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tasks")
public class Tasks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
@Column(nullable = false)
    private String title;
@Column(length = 1000)
    private String Description;
@Column(nullable = false)
    private String status;
    @Column(name = "creation_date",nullable = false)
private LocalDateTime CreationDate;


}
