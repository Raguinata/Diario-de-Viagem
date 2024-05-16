package faculdade.pi.cogniventura.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import faculdade.pi.cogniventura.model.entities.Cronograma;
import faculdade.pi.cogniventura.model.services.CronogramaService;

@RestController
@RequestMapping(value = "/cronograma")
@CrossOrigin(origins = "*")
public class CronogramaController {
    
    @Autowired
    CronogramaService cronogramaService;

    @GetMapping("/{id_programa}")
    public ResponseEntity<List<Cronograma>> findCronogramaByProgramaId(@PathVariable int id_programa) {
        List<Cronograma> cronogramas = cronogramaService.findCronogramaByProgramaId(id_programa);
        return ResponseEntity.ok().body(cronogramas);
    }

    @DeleteMapping("/{id_roteiro}")
    public void deleteByIdRoteiro(@PathVariable int id_roteiro) {
        cronogramaService.deleteByRoteiro(id_roteiro);
    }

}
