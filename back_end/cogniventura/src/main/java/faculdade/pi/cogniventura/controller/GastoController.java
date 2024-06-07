package faculdade.pi.cogniventura.controller;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

    @PostMapping("/busca-por-cronograma")
    public ResponseEntity<List<Gasto>> findByCronograma(@RequestBody Cronograma cronograma) {
        List<Gasto> gastos = gastoService.findByCronograma(cronograma);
        return ResponseEntity.ok().body(gastos);
    }

    //Lista todos os gastos relacionados a um programa, para implementar na tela de orçamento
    //Permite que o usuário visualize todos os gastos realizados na viagem
    @GetMapping("/{id_programa}")
    public ResponseEntity<BigDecimal> findByIdPrograma(@PathVariable int id_programa) {
        BigDecimal gasto_total_atual = gastoService.findByIdPrograma(id_programa);
        return ResponseEntity.ok().body(gasto_total_atual);
    }

    @DeleteMapping("/{id_gasto}")
    public ResponseEntity<Void> deleteById(@PathVariable int id_gasto){
        gastoService.deleteById(id_gasto);
        return ResponseEntity.ok().build();
    }
}
