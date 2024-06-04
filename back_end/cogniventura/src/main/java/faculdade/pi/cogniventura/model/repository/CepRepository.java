package faculdade.pi.cogniventura.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import faculdade.pi.cogniventura.model.entities.Cep;

public interface CepRepository extends JpaRepository<Cep, Integer> {

    Cep findByCep(String cep);
    
}
