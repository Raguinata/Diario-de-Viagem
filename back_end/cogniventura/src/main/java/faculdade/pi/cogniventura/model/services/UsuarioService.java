package faculdade.pi.cogniventura.model.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.Usuario;
import faculdade.pi.cogniventura.model.repository.UsuarioRepository;

@Service
public class UsuarioService {
    
    @Autowired
    UsuarioRepository usuarioRepository;

    public Usuario findByEmailAndSenha(String email, String senha){
        Optional<Usuario> usuario = usuarioRepository.findByEmailAndSenha(email, senha);
        return usuario.orElse(null);
    }
}
