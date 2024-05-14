package faculdade.pi.cogniventura.model.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.Endereco;
import faculdade.pi.cogniventura.model.entities.InicioLocacao;
import faculdade.pi.cogniventura.model.repository.InicioLocacaoRepository;
import jakarta.transaction.Transactional;

@Service
public class InicioLocacaoService {
    
    @Autowired
    InicioLocacaoRepository inicioLocacaoRepository;

    @Autowired
    EnderecoService enderecoService;

    @Transactional
    public InicioLocacao saveOrMergeInicioLocacao(InicioLocacao inicioLocacao) {
        Endereco endereco = enderecoService.saveOrMergeEndereco(inicioLocacao.getEndereco());
        inicioLocacao.setEndereco(endereco);
        return inicioLocacaoRepository.save(inicioLocacao);
    }
    
}

