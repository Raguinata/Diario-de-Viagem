package faculdade.pi.cogniventura.model.DTOs;

import faculdade.pi.cogniventura.model.entities.ProgramaDeViagem;
import faculdade.pi.cogniventura.model.entities.Veiculo;
import lombok.Data;
import lombok.ToString;

@ToString
@Data
public class ProgramaVeiculoDTO {
    
    private ProgramaDeViagem programaDeViagem;
    private Veiculo veiculo;
    
}
