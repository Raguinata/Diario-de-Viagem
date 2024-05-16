package faculdade.pi.cogniventura.model.DTOs;

import faculdade.pi.cogniventura.model.entities.Cidade;
import faculdade.pi.cogniventura.model.entities.Cronograma;
import faculdade.pi.cogniventura.model.entities.Roteiro;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class CroRoteCidDTO {
    
    private Cronograma cronograma;
    private Cidade cidade;
    private Roteiro roteiro;
}
