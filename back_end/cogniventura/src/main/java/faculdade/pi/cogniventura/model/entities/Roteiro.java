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
public class Roteiro {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_roteiro")
    private int idRoteiro;

    @Column(name = "nome", nullable = false, length = 45)
    private String nome;

    @ManyToOne
    @JoinColumn(name = "id_programa_de_viagem", referencedColumnName = "id_programa_de_viagem", nullable = false)
    private ProgramaDeViagem programaDeViagem;

    @ManyToOne
    @JoinColumn(name = "id_estado", referencedColumnName = "id_estado", nullable = false)
    private Estado estado;

}
