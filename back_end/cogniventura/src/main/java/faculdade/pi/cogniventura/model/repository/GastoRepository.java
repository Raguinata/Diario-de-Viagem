package faculdade.pi.cogniventura.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import faculdade.pi.cogniventura.model.entities.Cronograma;
import faculdade.pi.cogniventura.model.entities.Gasto;

public interface GastoRepository extends JpaRepository<Gasto, Integer>{

    List<Gasto> findByCronograma(Cronograma cronograma);

    
}
