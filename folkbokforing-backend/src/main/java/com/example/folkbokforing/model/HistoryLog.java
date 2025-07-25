package com.example.folkbokforing.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HistoryLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String action; // CREATE, UPDATE, DELETE
    private String personnummer;
    private String details;
    private LocalDateTime timestamp;
}