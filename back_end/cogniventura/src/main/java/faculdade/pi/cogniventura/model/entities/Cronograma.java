package faculdade.pi.cogniventura.model.entities;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

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
public class Cronograma {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cronograma")
    private int idCronograma;

    @JsonFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.DATE)
    @Column(name = "data", nullable = false)
    private Date data;

    @Column(name = "nome", length = 45, nullable = false)
    private String nome;

    @Column(name = "descricao", columnDefinition = "TEXT")
    private String descricao;

    @ManyToOne
    @JoinColumn(name = "id_roteiro", referencedColumnName = "id_roteiro", nullable = false)
    private Roteiro roteiro;

    @ManyToOne
    @JoinColumn(name = "id_cidade", referencedColumnName = "id_cidade", nullable = false)
    private Cidade cidade;

}
