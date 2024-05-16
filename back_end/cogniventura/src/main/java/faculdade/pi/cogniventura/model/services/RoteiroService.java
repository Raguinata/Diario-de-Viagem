package faculdade.pi.cogniventura.model.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.ProgramaDeViagem;
import faculdade.pi.cogniventura.model.entities.Roteiro;
import faculdade.pi.cogniventura.model.repository.RoteiroRepository;
import jakarta.transaction.Transactional;

@Service
public class RoteiroService {

    @Autowired
    RoteiroRepository roteiroRepository;

    @Autowired
    CronogramaService cronogramaService;

    public Roteiro saveOrMerge(ProgramaDeViagem programa, Roteiro roteiro) {
        roteiro.setProgramaDeViagem(programa);
        return roteiroRepository.save(roteiro);
    }

    @Transactional
    public void deleteByid(int id_roteiro) {
        cronogramaService.deleteByRoteiro(id_roteiro);
        roteiroRepository.deleteById(id_roteiro);
    }
}
