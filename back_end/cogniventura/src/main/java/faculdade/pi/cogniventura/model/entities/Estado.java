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
public class Estado {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_estado")
    private int idEstado;

    @Column(name = "nome", nullable = false, length = 45)
    private String nome;

    @Column(name = "uf", nullable = false, length = 2)
    private String uf;
}
