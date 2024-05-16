package faculdade.pi.cogniventura.model.DTOs;

import faculdade.pi.cogniventura.model.entities.ProgramaDeViagem;
import faculdade.pi.cogniventura.model.entities.Roteiro;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class ProgramaRoteiroDTO {
    
    private ProgramaDeViagem programaDeViagem;
    private Roteiro roteiro;
}
