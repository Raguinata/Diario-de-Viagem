package faculdade.pi.cogniventura.model.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.DTOs.ProgramaVeiculoDTO;
import faculdade.pi.cogniventura.model.entities.ProgramaDeViagem;
import faculdade.pi.cogniventura.model.entities.Usuario;
import faculdade.pi.cogniventura.model.entities.Veiculo;
import faculdade.pi.cogniventura.model.repository.ProgramaDeViagemRepository;
import jakarta.transaction.Transactional;

@Service
public class ProgramaDeViagemService {

    @Autowired
    ProgramaDeViagemRepository programaDeViagemRepository;

    @Autowired
    VeiculoService veiculoService;

    public ProgramaDeViagem cadastro(ProgramaDeViagem programaDeViagem) {
        return programaDeViagemRepository.save(programaDeViagem);
    }

    public List<ProgramaDeViagem> findByIdUsuario(int id_usuario) {
        Usuario usuario = new Usuario();
        usuario.setIdUsuario(id_usuario);
        return programaDeViagemRepository.findByUsuarios(usuario);
    }

    //Enpoint feito em Programa pois é necessário adicionar na tabela de programa_veiculo também
    @Transactional
    public ProgramaDeViagem saveOrMergeVeiculo(ProgramaVeiculoDTO dto) {
        Veiculo veiculo = veiculoService.saveOrMergeVeiculo(dto.getVeiculo());
        List<Veiculo> veiculos = dto.getProgramaDeViagem().getVeiculos();
        veiculos.add(veiculo);
        dto.getProgramaDeViagem().setVeiculos(veiculos);
        return programaDeViagemRepository.save(dto.getProgramaDeViagem());
    }

}
