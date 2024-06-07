package faculdade.pi.cogniventura.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import faculdade.pi.cogniventura.model.DTOs.ParaCronoEvenDTO;
import faculdade.pi.cogniventura.model.entities.Cronograma;
import faculdade.pi.cogniventura.model.entities.Parada;
import faculdade.pi.cogniventura.model.services.ParadaService;

@RestController
@RequestMapping(value = "/parada")
@CrossOrigin(origins = "*")
public class ParadaController {
    
    @Autowired
    ParadaService paradaService;

    @PostMapping("/busca-por-cronograma")
    public ResponseEntity<List<Parada>> findByCronograma(@RequestBody Cronograma cronograma) {
        List<Parada> paradas = paradaService.findByCronograma(cronograma);
        return ResponseEntity.ok().body(paradas);
    }

    @DeleteMapping("/{id_parada}")
    public ResponseEntity<Void> deleteById(@PathVariable int id_parada) {
        paradaService.deleteById(id_parada);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/adicionar-atualizar")
    public ResponseEntity<Parada> saveOrMerge(@RequestBody ParaCronoEvenDTO dto) {
        Parada parada = paradaService.saveOrMerge(dto.getParada(), dto.getCronograma(), dto.getEvento());
        return ResponseEntity.ok().body(parada);
    }
}
