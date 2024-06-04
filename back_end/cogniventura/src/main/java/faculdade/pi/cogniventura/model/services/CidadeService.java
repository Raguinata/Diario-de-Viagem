package faculdade.pi.cogniventura.model.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.Cidade;
import faculdade.pi.cogniventura.model.entities.Estado;
import faculdade.pi.cogniventura.model.repository.CidadeRepository;

@Service
public class CidadeService {
    
    @Autowired
    CidadeRepository cidadeRepository;

    public List<Cidade> findByEstado(Estado estado) {
        return cidadeRepository.findByEstado(estado);
    }

    public List<Cidade> findAll() {
        return cidadeRepository.findAll();
    }
}
