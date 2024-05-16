package faculdade.pi.cogniventura.model.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.Estado;
import faculdade.pi.cogniventura.model.repository.EstadoRepository;

@Service
public class EstadoService {
    
    @Autowired
    EstadoRepository estadoRepository;

    public List<Estado> findAll() {
        return estadoRepository.findAll();
    }
}
