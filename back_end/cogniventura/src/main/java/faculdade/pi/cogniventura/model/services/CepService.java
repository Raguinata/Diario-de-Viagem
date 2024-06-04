package faculdade.pi.cogniventura.model.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.Cep;
import faculdade.pi.cogniventura.model.repository.CepRepository;

@Service
public class CepService {
    
    @Autowired
    CepRepository cepRepository;

    public Cep findByCep(String cep) {
        return cepRepository.findByCep(cep);
    }

    public Cep adicionarCep(Cep cep){
        Cep cep_ternario = findByCep(cep.getCep());
        if(cep_ternario != null)
            cep = cep_ternario;
        return cepRepository.save(cep);
    }

}
