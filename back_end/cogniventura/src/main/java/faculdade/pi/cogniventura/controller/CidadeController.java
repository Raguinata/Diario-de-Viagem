package faculdade.pi.cogniventura.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import faculdade.pi.cogniventura.model.entities.Cidade;
import faculdade.pi.cogniventura.model.entities.Estado;
import faculdade.pi.cogniventura.model.services.CidadeService;

@RestController
@RequestMapping(value = "/cidade")
@CrossOrigin(origins = "*")
public class CidadeController {

    @Autowired
    CidadeService cidadeService;

    @PostMapping("/por-estado")
    public ResponseEntity<List<Cidade>> findByEstado(@RequestBody Estado estado) {
        List<Cidade> cidades = cidadeService.findByEstado(estado);
        return ResponseEntity.ok().body(cidades);
    }

    @GetMapping("/")
    public ResponseEntity<List<Cidade>> findAll() {
        List<Cidade> cidades = cidadeService.findAll();
        return ResponseEntity.ok().body(cidades);
    }
}
