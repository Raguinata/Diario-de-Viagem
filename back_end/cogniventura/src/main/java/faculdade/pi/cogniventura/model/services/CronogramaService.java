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

    @Autowired
    ParadaService paradaService;

    @Autowired
    GastoService gastoService;


    public List<Cronograma> findCronogramaByProgramaId(int id_programa_de_viagem){
        return cronogramaRepository.findCronogramaByProgramaId(id_programa_de_viagem);
    }

    //Deleta todos os cronogramas relacionados ao roteiro que está sendo deletado;
    @Transactional
    public void deleteByRoteiro(int id_roteiro) {
        paradaService.deleteByIdRoteiro(id_roteiro);
        gastoService.deleteByIdRoteiro(id_roteiro);
        Roteiro roteiro = new Roteiro();
        roteiro.setIdRoteiro(id_roteiro);
        cronogramaRepository.deleteByRoteiro(roteiro);
    }

    @Transactional
    public void deleteById(int id_cronograma) {
        Cronograma cronograma = new Cronograma();
        cronograma.setIdCronograma(id_cronograma);
        gastoService.deleteByCronograma(cronograma);
        paradaService.deleteByCronograma(cronograma);
        cronogramaRepository.deleteById(id_cronograma);
    }

    public Cronograma saveOrMerge(Cronograma cronograma, Roteiro roteiro, Cidade cidade) {
        cronograma.setRoteiro(roteiro);
        cronograma.setCidade(cidade);
        return cronogramaRepository.save(cronograma);
    }
}