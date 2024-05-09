package faculdade.pi.cogniventura.model.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
public class Cep {
    
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Column(name = "id_cep")
    private int id;

    @Column(name = "cep", length = 8, nullable = false, unique = true)
    private String cep;
}
