package faculdade.pi.cogniventura.model.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.Cidade;
import faculdade.pi.cogniventura.model.entities.Cronograma;
import faculdade.pi.cogniventura.model.entities.Roteiro;
import faculdade.pi.cogniventura.model.repository.CronogramaRepository;
import jakarta.transaction.Transactional;

@Service
public class CronogramaService {
    
    @Autowired
    CronogramaRepository cronogramaRepository;

    public List<Cronograma> findCronogramaByProgramaId(int id_programa_de_viagem){
        return cronogramaRepository.findCronogramaByProgramaId(id_programa_de_viagem);
    }

    @Transactional
    public void deleteByRoteiro(int id_roteiro) {
        //Deletar parada
        Roteiro roteiro = new Roteiro();
        roteiro.setIdRoteiro(id_roteiro);
        cronogramaRepository.deleteByRoteiro(roteiro);
    }

    @Transactional
    public void deleteById(int id_cronograma) {
        //Deletar parada
        cronogramaRepository.deleteById(id_cronograma);
    }

    public Cronograma saveOrMerge(Cronograma cronograma, Roteiro roteiro, Cidade cidade) {
        cronograma.setRoteiro(roteiro);
        cronograma.setCidade(cidade);
        return cronogramaRepository.save(cronograma);
    }
}
