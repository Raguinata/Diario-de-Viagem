package faculdade.pi.cogniventura.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import faculdade.pi.cogniventura.model.entities.Usuario;
import faculdade.pi.cogniventura.model.services.UsuarioService;

@RestController
@RequestMapping(value = "/usuario")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<Usuario> findByEmailAndSenha(
            @RequestParam("email") String email,
            @RequestParam("senha") String senha) {

        Usuario usuario = usuarioService.findByEmailAndSenha(email, senha);
        if(usuario == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok().body(usuario);
    }

    @PostMapping("/cadastro")
    public ResponseEntity<Usuario> cadastro(@RequestBody Usuario usuario) {
        usuario = usuarioService.cadastro(usuario);
        return ResponseEntity.ok().body(usuario);
    }

}
