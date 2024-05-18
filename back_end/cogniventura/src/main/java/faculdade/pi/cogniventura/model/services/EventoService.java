package faculdade.pi.cogniventura.model.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.Evento;
import faculdade.pi.cogniventura.model.repository.EventoRepository;

@Service
public class EventoService {
    
    @Autowired
    EventoRepository eventoRepository;

    public Evento saveOrMerge(Evento evento) {
        return eventoRepository.save(evento);
    }
}
