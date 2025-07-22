package com.example.folkbokforing.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Person {
    @Id
    private String personnummer;
    private String fornamn;
    private String efternamn;
    private String adress;
    private String postnummer;
    private String stad;
    private String civilstand;
    private String fodelsedatum;
}
