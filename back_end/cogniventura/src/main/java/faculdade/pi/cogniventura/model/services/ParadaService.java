package faculdade.pi.cogniventura.model.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.Cronograma;
import faculdade.pi.cogniventura.model.entities.Evento;
import faculdade.pi.cogniventura.model.entities.Parada;
import faculdade.pi.cogniventura.model.repository.ParadaRepository;
import jakarta.transaction.Transactional;

@Service
public class ParadaService {

    @Autowired
    ParadaRepository paradaRepository;

    @Autowired
    EventoService eventoService;

    public List<Parada> findByCronograma(Cronograma cronograma) {
        return paradaRepository.findByCronograma(cronograma);
    }

    public void deleteById(int id_parada) {
        paradaRepository.deleteById(id_parada);
    }

    //Deleta todas as paradas relacionados ao cronograma que está sendo deletado;
    public void deleteByCronograma(Cronograma cronograma) {
        paradaRepository.deleteByCronograma(cronograma);
    }

    //Utilizado para deletar as paradas relacionadas aos cronogramas deletados quando um roteiro é deletado
    public void deleteByIdRoteiro(int id_roteiro) {
        paradaRepository.deleteByIdRoteiro(id_roteiro);
    }

    @Transactional
    public Parada saveOrMerge(Parada parada, Cronograma cronograma, Evento evento) {
        evento = eventoService.saveOrMerge(evento);
        parada.setCronograma(cronograma);
        parada.setEvento(evento);
        return paradaRepository.save(parada);
    }
}
