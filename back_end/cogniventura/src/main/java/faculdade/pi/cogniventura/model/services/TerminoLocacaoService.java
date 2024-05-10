package faculdade.pi.cogniventura.model.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.Endereco;
import faculdade.pi.cogniventura.model.entities.TerminoLocacao;
import faculdade.pi.cogniventura.model.repository.TerminoLocacaoRepository;
import jakarta.transaction.Transactional;

@Service
public class TerminoLocacaoService {
    
    @Autowired
    TerminoLocacaoRepository terminoLocacaoRepository;

    @Autowired
    EnderecoService enderecoService;

    @Transactional
    public TerminoLocacao saveOrMergeTerminoLocacao(TerminoLocacao terminoLocacao) {
        Endereco endereco = enderecoService.saveOrMergeEndereco(terminoLocacao.getEndereco());
        terminoLocacao.setEndereco(endereco);
        return terminoLocacaoRepository.save(terminoLocacao);
    }

}
