package faculdade.pi.cogniventura.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import faculdade.pi.cogniventura.model.entities.Cronograma;
import faculdade.pi.cogniventura.model.entities.Parada;

public interface ParadaRepository extends JpaRepository<Parada, Integer>{

    List<Parada> findByCronograma(Cronograma cronograma);

    void deleteByCronograma(Cronograma cronograma);
    
}
