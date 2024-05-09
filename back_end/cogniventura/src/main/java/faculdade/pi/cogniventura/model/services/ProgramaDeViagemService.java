package faculdade.pi.cogniventura.model.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.ProgramaDeViagem;
import faculdade.pi.cogniventura.model.entities.Usuario;
import faculdade.pi.cogniventura.model.repository.ProgramaDeViagemRepository;

@Service
public class ProgramaDeViagemService {

    @Autowired
    ProgramaDeViagemRepository programaDeViagemRepository;

    public ProgramaDeViagem save(ProgramaDeViagem programaDeViagem) {
        return programaDeViagemRepository.save(programaDeViagem);
    }

    public List<ProgramaDeViagem> findByIdUsuario(int id_usuario) {
        Usuario usuario = new Usuario();
        usuario.setIdUsuario(id_usuario);
        return programaDeViagemRepository.findByUsuarios(usuario);
    }
}
