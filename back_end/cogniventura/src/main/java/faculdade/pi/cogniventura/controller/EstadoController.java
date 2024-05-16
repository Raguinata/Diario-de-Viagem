package faculdade.pi.cogniventura.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import faculdade.pi.cogniventura.model.entities.Estado;
import faculdade.pi.cogniventura.model.services.EstadoService;

@RestController
@RequestMapping(value = "/estado")
@CrossOrigin(origins = "*")
public class EstadoController {
    
    @Autowired
    EstadoService estadoService;

    @GetMapping("/")
    public ResponseEntity<List<Estado>> findAll() {
        List<Estado> estados = estadoService.findAll();
        return ResponseEntity.ok().body(estados);
    }
}
