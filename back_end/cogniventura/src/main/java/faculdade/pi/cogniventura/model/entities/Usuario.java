package faculdade.pi.cogniventura.model.entities;

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
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private int idUsuario;

    @Column(name = "nome", length = 45, nullable = false)
    private String nome;

    @Column(name = "senha", length = 45, nullable = false)
    private String senha;

    @Column(name = "email", length = 300, nullable = false, unique = true)
    private String email;

    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @Temporal(TemporalType.DATE)
    @Column(name = "nascimento", nullable = false)
    private Date nascimento;

    @ManyToMany
    @JoinTable(name = "usuario_programa",
    joinColumns = @JoinColumn(name = "id_usuario"),
    inverseJoinColumns = @JoinColumn(name = "id_programa_de_viagem"))
    private List<ProgramaDeViagem> programasDeViagem;
}
