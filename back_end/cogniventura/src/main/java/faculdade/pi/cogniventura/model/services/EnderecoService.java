package faculdade.pi.cogniventura.model.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faculdade.pi.cogniventura.model.entities.Cep;
import faculdade.pi.cogniventura.model.entities.Endereco;
import faculdade.pi.cogniventura.model.repository.EnderecoRepository;
import jakarta.transaction.Transactional;

@Service
public class EnderecoService {

    @Autowired
    EnderecoRepository enderecoRepository;

    @Autowired
    CepService cepService;

    @Transactional
    public Endereco saveOrMergeEndereco(Endereco endereco) {
        if(endereco.getCep().getCep() != null) {
            Cep cep = cepService.adicionarCep(endereco.getCep());
            endereco.setCep(cep);
        }
        else{
            endereco.setCep(null);
        }
        return enderecoRepository.save(endereco);
    }
}
