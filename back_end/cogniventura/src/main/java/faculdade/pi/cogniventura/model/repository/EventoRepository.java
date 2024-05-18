package faculdade.pi.cogniventura.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import faculdade.pi.cogniventura.model.entities.Evento;

public interface EventoRepository extends JpaRepository<Evento, Integer>{
    
}
