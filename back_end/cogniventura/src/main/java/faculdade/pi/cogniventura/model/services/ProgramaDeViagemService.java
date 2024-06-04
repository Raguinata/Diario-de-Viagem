package faculdade.pi.cogniventura.model.services;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

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

    // Enpoint feito em Programa pois é necessário adicionar na tabela de
    // programa_veiculo também
    @Transactional
    public ProgramaDeViagem saveOrMergeVeiculo(ProgramaVeiculoDTO dto) {
        Veiculo veiculo = veiculoService.saveOrMergeVeiculo(dto.getVeiculo());
        ProgramaDeViagem programa = findByIdPrograma(dto.getId_programa());
        List<Veiculo> veiculos = programa.getVeiculos();
        veiculos.add(veiculo);
        programa.setVeiculos(veiculos);
        return programaDeViagemRepository.save(programa);
    }

    // Não é possível que não exista outra forma, isso está horrivel
    @Transactional
    public void deletaVeiculoDoPrograma(ProgramaVeiculoDTO dto) {
        ProgramaDeViagem programa = findByIdPrograma(dto.getId_programa());
        List<Veiculo> veiculos = programa.getVeiculos();
        Veiculo veiculo = dto.getVeiculo();
        for (int i = 0; i < veiculos.size(); i++) {
            if (veiculo.getIdVeiculo() == veiculos.get(i).getIdVeiculo()) {
                veiculos.remove(i);
            }
        }
        // Verificar esse endpoint, talvez faltando setVeiculos
        programaDeViagemRepository.save(programa);
        veiculoService.deletar(veiculo.getIdVeiculo());
    }

    public int atualizarOrcamento(int id_programa_de_viagem, BigDecimal orcamento) {
        return programaDeViagemRepository.atualizarOrcamento(id_programa_de_viagem, orcamento);
    }

    @Transactional
    public ProgramaDeViagem adicionarPorEmail(String email, int id_programa) {
        Usuario usuario = usuarioService.findByEmail(email);
        ProgramaDeViagem programa = findByIdPrograma(id_programa); 
        if (usuario != null) {
            for (Usuario usu_lista : programa.getUsuarios()) {
                if(usu_lista.getIdUsuario() == usuario.getIdUsuario())
                    return null;
            }
            programa.getUsuarios().add(usuario);
            return programaDeViagemRepository.save(programa);
        }
        return null;
    }

    @Transactional
    public ProgramaDeViagem deletarDoGrupo(int id_usuario, int id_programa) {
        ProgramaDeViagem programa = findByIdPrograma(id_programa);
        List<Usuario> usuarios = programa.getUsuarios();
        for (int i = 0; i < usuarios.size(); i++) {
            if (id_usuario == usuarios.get(i).getIdUsuario()) {
                usuarios.remove(i);
            }
        }
        programa.setUsuarios(usuarios);
        return programaDeViagemRepository.save(programa);
    }

    public ProgramaDeViagem findByIdPrograma(int id_programa) {
        Optional<ProgramaDeViagem> programa = programaDeViagemRepository.findById(id_programa);
        return programa.orElse(null);
    }
}
