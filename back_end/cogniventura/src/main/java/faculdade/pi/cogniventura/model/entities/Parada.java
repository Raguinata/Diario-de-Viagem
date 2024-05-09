package faculdade.pi.cogniventura.model.entities;

import java.sql.Time;
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
public class Parada {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_parada")
    private int idParada;

    //Essa data não esta formatada
    @Temporal(TemporalType.TIME)
    @Column(name = "hora", nullable = false)
    private Time hora;

    @ManyToOne
    @JoinColumn(name = "id_cronograma", referencedColumnName = "id_cronograma", nullable = false)
    private Cronograma cronograma;

    @ManyToOne
    @JoinColumn(name = "id_evento", referencedColumnName = "id_evento", nullable = false)
    private Evento evento;
}
