package faculdade.pi.cogniventura.model.entities;

import java.sql.Timestamp;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
public class TerminoLocacao {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_termino_locacao")
    private int idTerminoLocacao;

    @ManyToOne
    @JoinColumn(name = "id_endereco", referencedColumnName = "id_endereco", 
    nullable = false)
    private Endereco endereco;

    //Essa data não esta formatada
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "data", nullable = false)
    private Timestamp data;

    @Column(name = "descricao", columnDefinition = "TEXT")
    private String descricao;

    
}
