package faculdade.pi.cogniventura.model.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.Cep;
import faculdade.pi.cogniventura.model.repository.CepRepository;

@Service
public class CepService {
    
    @Autowired
    CepRepository cepRepository;

    public Cep adicionarCep(Cep cep){
        return cepRepository.save(cep);
    }

}
