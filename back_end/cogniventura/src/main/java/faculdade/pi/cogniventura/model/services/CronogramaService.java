package faculdade.pi.cogniventura.model.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.Cronograma;
import faculdade.pi.cogniventura.model.repository.CronogramaRepository;

@Service
public class CronogramaService {
    
    @Autowired
    CronogramaRepository cronogramaRepository;

    public List<Cronograma> findCronogramaByProgramaId(int id_programa_de_viagem){
        return cronogramaRepository.findCronogramaByProgramaId(id_programa_de_viagem);
    }
}
