package faculdade.pi.cogniventura.model.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.InicioLocacao;
import faculdade.pi.cogniventura.model.entities.TerminoLocacao;
import faculdade.pi.cogniventura.model.entities.Veiculo;
import faculdade.pi.cogniventura.model.repository.VeiculoRepository;
import jakarta.transaction.Transactional;

@Service
public class VeiculoService {
    
    @Autowired
    VeiculoRepository veiculoRepository;

    @Autowired
    InicioLocacaoService inicioLocacaoService;

    @Autowired
    TerminoLocacaoService terminoLocacaoService;

    @Transactional
    public Veiculo saveOrMergeVeiculo(Veiculo veiculo){
        InicioLocacao inicio = inicioLocacaoService.saveOrMergeInicioLocacao(veiculo.getInicioLocacao());
        TerminoLocacao termino = terminoLocacaoService.saveOrMergeTerminoLocacao(veiculo.getTerminoLocacao());
        veiculo.setInicioLocacao(inicio);
        veiculo.setTerminoLocacao(termino);
        return veiculoRepository.save(veiculo);
    }

    public void deletar(int veiculo){
		veiculoRepository.deleteById(veiculo);
	}
    
}
