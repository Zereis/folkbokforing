package com.example.folkbokforing.repository;

import com.example.folkbokforing.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, String> {
}
