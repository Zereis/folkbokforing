package com.example.folkbokforing.repository;

import com.example.folkbokforing.model.HistoryLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryLogRepository extends JpaRepository<HistoryLog, Long> {
}