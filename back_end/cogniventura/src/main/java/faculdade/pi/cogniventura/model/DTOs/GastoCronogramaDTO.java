package faculdade.pi.cogniventura.model.DTOs;

import faculdade.pi.cogniventura.model.entities.Cronograma;
import faculdade.pi.cogniventura.model.entities.Gasto;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class GastoCronogramaDTO {
    
    private Gasto gasto;
    private Cronograma cronograma;
    
}
