package faculdade.pi.cogniventura.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import faculdade.pi.cogniventura.model.entities.ProgramaDeViagem;
import faculdade.pi.cogniventura.model.entities.Usuario;

public interface ProgramaDeViagemRepository extends JpaRepository<ProgramaDeViagem, Integer>{

    List<ProgramaDeViagem> findByUsuarios(Usuario usuario);
    
}
