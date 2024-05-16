package faculdade.pi.cogniventura.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import faculdade.pi.cogniventura.model.entities.Cidade;
import faculdade.pi.cogniventura.model.entities.Estado;

public interface CidadeRepository extends JpaRepository<Cidade, Integer>{

    List<Cidade> findByEstado(Estado estado);
    
}
