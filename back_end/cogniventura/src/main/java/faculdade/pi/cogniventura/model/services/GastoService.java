package faculdade.pi.cogniventura.model.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.Cronograma;
import faculdade.pi.cogniventura.model.entities.Gasto;
import faculdade.pi.cogniventura.model.repository.GastoRepository;

@Service
public class GastoService {
    
    @Autowired
    GastoRepository gastoRepository;

    public Gasto saveOrMerge(Gasto gasto, Cronograma cronograma) {
        gasto.setCronograma(cronograma);
        return gastoRepository.save(gasto);
    }

    public List<Gasto> findByCronograma(Cronograma cronograma) {
        return gastoRepository.findByCronograma(cronograma);
    }
}
