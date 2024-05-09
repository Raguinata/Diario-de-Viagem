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
public class Endereco {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_endereco")
    private int idEndereco;

    @Column(name = "numero", nullable = false)
    private int numero;

    @Column(name = "complemento", length = 500)
    private String complemento;

    @ManyToOne
    @JoinColumn(name = "id_cep", referencedColumnName = "id_cep")
    private Cep cep;

    @ManyToOne
    @JoinColumn(name = "id_cidade", nullable = false, referencedColumnName = "id_cidade")
    private Cidade cidade;

}
