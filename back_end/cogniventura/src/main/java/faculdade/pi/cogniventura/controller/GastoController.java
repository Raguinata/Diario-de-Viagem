package faculdade.pi.cogniventura.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import faculdade.pi.cogniventura.model.DTOs.GastoCronogramaDTO;
import faculdade.pi.cogniventura.model.entities.Cronograma;
import faculdade.pi.cogniventura.model.entities.Gasto;
import faculdade.pi.cogniventura.model.services.GastoService;

@RestController
@RequestMapping(value = "/gasto")
@CrossOrigin(origins = "*")
public class GastoController {
    
    @Autowired
    GastoService gastoService;

    @PutMapping("/adicionar-atualizar")
    public ResponseEntity<Gasto> saveOrMerge(@RequestBody GastoCronogramaDTO dto) {
        Gasto gasto = gastoService.saveOrMerge(dto.getGasto(), dto.getCronograma());
        return ResponseEntity.ok().body(gasto);
    }

    @GetMapping("/busca-por-cronograma")
    public ResponseEntity<List<Gasto>> findByCronograma(@RequestBody Cronograma cronograma) {
        List<Gasto> gastos = gastoService.findByCronograma(cronograma);
        return ResponseEntity.ok().body(gastos);
    }
}
