package com.example.folkbokforing.controller;

import com.example.folkbokforing.model.Person;
import com.example.folkbokforing.model.HistoryLog;
import com.example.folkbokforing.repository.PersonRepository;
import com.example.folkbokforing.repository.HistoryLogRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/personer")
@CrossOrigin(origins = "*")
public class PersonController {

    private final PersonRepository repo;
    private final HistoryLogRepository historyRepo;

    public PersonController(PersonRepository repo, HistoryLogRepository historyRepo) {
        this.repo = repo;
        this.historyRepo = historyRepo;
    }

    @GetMapping
    public List<Person> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Person create(@RequestBody Person person) {
        Person saved = repo.save(person);
        historyRepo.save(new HistoryLog(null, "CREATE", person.getPersonnummer(), person.toString(), LocalDateTime.now()));
        return saved;
    }

    @PutMapping("/{id}")
    public Person update(@PathVariable String id, @RequestBody Person person) {
        person.setPersonnummer(id);
        Person saved = repo.save(person);
        historyRepo.save(new HistoryLog(null, "UPDATE", id, person.toString(), LocalDateTime.now()));
        return saved;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        repo.deleteById(id);
        historyRepo.save(new HistoryLog(null, "DELETE", id, "", LocalDateTime.now()));
    }

    @GetMapping("/history")
    public List<HistoryLog> getHistory() {
        return historyRepo.findAll();
    }
}
