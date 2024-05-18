package faculdade.pi.cogniventura.model.DTOs;

import faculdade.pi.cogniventura.model.entities.Cronograma;
import faculdade.pi.cogniventura.model.entities.Evento;
import faculdade.pi.cogniventura.model.entities.Parada;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class ParaCronoEvenDTO {
    
    private Parada parada;
    private Cronograma cronograma;
    private Evento evento;
}
