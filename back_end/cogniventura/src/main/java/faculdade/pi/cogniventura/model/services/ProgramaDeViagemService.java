package faculdade.pi.cogniventura.model.services;

import java.math.BigDecimal;
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
    UsuarioService usuarioService;

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

    // Não é possível que não exista outra forma, isso está horrivel
    @Transactional
    public void deletaVeiculoDoPrograma(ProgramaVeiculoDTO dto){
        ProgramaDeViagem programa = dto.getProgramaDeViagem();
        List<Veiculo> veiculos = programa.getVeiculos();
        Veiculo veiculo = dto.getVeiculo();
        for(int i = 0; i < veiculos.size(); i++){
            if(veiculo.getIdVeiculo() == veiculos.get(i).getIdVeiculo()){
                veiculos.remove(i);
            }
        }
        //Verificar esse endpoint, talvez faltando setVeiculos
        programaDeViagemRepository.save(programa);
        veiculoService.deletar(veiculo.getIdVeiculo());
    }

    public int atualizarOrcamento(int id_programa_de_viagem, BigDecimal orcamento) {
        return programaDeViagemRepository.atualizarOrcamento(id_programa_de_viagem, orcamento);
    }

    @Transactional
    public ProgramaDeViagem adicionarPorEmail(String email, ProgramaDeViagem programa) {
        Usuario usuario = usuarioService.findByEmail(email);
        if(usuario != null){
            programa.getUsuarios().add(usuario);
            return programaDeViagemRepository.save(programa);
        }
        return null;
    }

    public ProgramaDeViagem deletarDoGrupo(int id_usuario, ProgramaDeViagem programa) {
        List<Usuario> usuarios = programa.getUsuarios();
        for(int i = 0; i < usuarios.size(); i++){
            if(id_usuario == usuarios.get(i).getIdUsuario()){
                usuarios.remove(i);
            }
        }
        programa.setUsuarios(usuarios);
        return programaDeViagemRepository.save(programa);
    }
}