package faculdade.pi.cogniventura.model.services;

import java.math.BigDecimal;
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

    public BigDecimal findByIdPrograma(int id_programa) {
        List<Gasto> gastos = gastoRepository.findByIdPrograma(id_programa);
        BigDecimal gasto_total_atual = new BigDecimal(0);
        for(Gasto gasto: gastos){
            gasto_total_atual = gasto_total_atual.add(gasto.getValor());
        }
        return gasto_total_atual;
    }
}
