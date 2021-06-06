package com.kissi.paiement.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Typeforfait {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private float prix;
    private String duree;
    private String description;
    @OneToMany(mappedBy = "typeforfait")
    private List<Forfait> forfaits = new ArrayList<Forfait>();
}
