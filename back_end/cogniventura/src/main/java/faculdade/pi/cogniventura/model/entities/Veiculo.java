package faculdade.pi.cogniventura.model.entities;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
public class Veiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_veiculo")
    private int idVeiculo;

    @Column(name = "placa", nullable = false, length = 20)
    private String placa;

    @Column(name = "modelo", nullable = false, length = 45)
    private String modelo;

    @Column(name = "locador", nullable = false, length = 45)
    private String locador;

    @Column(name = "valor_aluguel", precision = 10, scale = 2)
    private BigDecimal valorAluguel;

    @OneToOne
    @JoinColumn(name = "id_inicio_locacao", 
    referencedColumnName = "id_inicio_locacao",
    nullable = false)
    private InicioLocacao inicioLocacao;

    @OneToOne
    @JoinColumn(name = "id_termino_locacao", 
    referencedColumnName = "id_termino_locacao", 
    nullable = false)
    private TerminoLocacao terminoLocacao;

}
