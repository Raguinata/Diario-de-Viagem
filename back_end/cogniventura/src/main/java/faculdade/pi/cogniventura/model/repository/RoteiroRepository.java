package faculdade.pi.cogniventura.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import faculdade.pi.cogniventura.model.entities.Roteiro;


public interface RoteiroRepository extends JpaRepository<Roteiro, Integer> {
    
}
