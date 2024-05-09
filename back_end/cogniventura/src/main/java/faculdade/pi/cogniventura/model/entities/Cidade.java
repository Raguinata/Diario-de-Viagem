package faculdade.pi.cogniventura.model.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
public class Cidade {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cidade")
    private int idCidade;

    @Column(name = "nome", length = 45, nullable = false)
    private String nome;

    @ManyToOne
    @JoinColumn(name = "id_estado", referencedColumnName = "id_estado", nullable = false)
    private Estado estado;

}
