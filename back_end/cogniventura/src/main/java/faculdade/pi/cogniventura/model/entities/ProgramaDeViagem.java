package faculdade.pi.cogniventura.model.entities;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
public class ProgramaDeViagem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_programa_de_viagem")
    private int idProgramaDeViagem;
    
    @Column(name = "nome", length = 45, nullable = false)
    private String nome;
    
    @Column(name = "orcamento", precision = 10, scale = 2)
    private BigDecimal orcamento;

    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @Temporal(TemporalType.DATE)
    @Column(name = "data_chegada", nullable = false)
    private Date dataChegada;

    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @Temporal(TemporalType.DATE)
    @Column(name = "data_partida", nullable = false)
    private Date dataPartida;

    @ManyToMany
    @JoinTable(name = "usuario_programa",
    joinColumns = @JoinColumn(name = "id_programa_de_viagem"),
    inverseJoinColumns = @JoinColumn(name = "id_usuario"))
    private List<Usuario> usuarios; 

    @ManyToMany
    @JoinTable(name = "veiculo_programa",
    joinColumns = @JoinColumn(name = "id_programa_de_viagem"),
    inverseJoinColumns = @JoinColumn(name = "id_veiculo"))
    private List<Veiculo> veiculos;
    
    @ManyToOne
    @JoinColumn(name = "id_estado", referencedColumnName = "id_estado", nullable = false)
    private Estado estado;

}
