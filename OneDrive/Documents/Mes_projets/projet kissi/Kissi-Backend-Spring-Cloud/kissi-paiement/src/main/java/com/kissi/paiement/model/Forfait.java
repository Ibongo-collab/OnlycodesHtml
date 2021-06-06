package com.kissi.paiement.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Forfait {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date datedebut;
    private Date datefin;
    // code qui est généré pour chaque forfait pris par un médecin
    private String code;
    private String etat;
    // id du medecin qui prend le forfait
    private Long idMedecin;
    @ManyToOne
    private Typeforfait typeforfait;
    @OneToMany(mappedBy = "forfait")
    private List<Paiement> paiements = new ArrayList<Paiement>();
}
