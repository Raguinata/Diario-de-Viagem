package faculdade.pi.cogniventura.model.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.ProgramaDeViagem;
import faculdade.pi.cogniventura.model.entities.Roteiro;
import faculdade.pi.cogniventura.model.repository.RoteiroRepository;

@Service
public class RoteiroService {

    @Autowired
    RoteiroRepository roteiroRepository;

    public Roteiro saveOrMerge(ProgramaDeViagem programa, Roteiro roteiro) {
        roteiro.setProgramaDeViagem(programa);
        return roteiroRepository.save(roteiro);
    }
}
