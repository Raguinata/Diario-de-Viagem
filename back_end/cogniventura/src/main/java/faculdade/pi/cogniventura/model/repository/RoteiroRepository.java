package faculdade.pi.cogniventura.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import faculdade.pi.cogniventura.model.entities.ProgramaDeViagem;
import faculdade.pi.cogniventura.model.entities.Roteiro;


public interface RoteiroRepository extends JpaRepository<Roteiro, Integer> {

    List<Roteiro> findByProgramaDeViagem(ProgramaDeViagem programaDeViagem);
    
}
