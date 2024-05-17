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

import faculdade.pi.cogniventura.model.DTOs.CroRoteCidDTO;
import faculdade.pi.cogniventura.model.entities.Cronograma;
import faculdade.pi.cogniventura.model.services.CronogramaService;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping(value = "/cronograma")
@CrossOrigin(origins = "*")
public class CronogramaController {
    
    @Autowired
    CronogramaService cronogramaService;

    //Está sendo utilizado o id do programa, pois cronogramas já retorna os roteiros
    //Isso possibilitaria não utilizar os endpoints de busca de roteiros
    //Mas talvez não seja uma boa solução, já que o usuário pode adicionar roteiros, sem adicionar cronogramas.
    @GetMapping("/{id_programa}")
    public ResponseEntity<List<Cronograma>> findCronogramaByProgramaId(@PathVariable int id_programa) {
        List<Cronograma> cronogramas = cronogramaService.findCronogramaByProgramaId(id_programa);
        return ResponseEntity.ok().body(cronogramas);
    }

    @DeleteMapping("/{id_cronograma}")
    public void deleteByIdRoteiro(@PathVariable int id_cronograma) {
        cronogramaService.deleteById(id_cronograma);
    }

    @PutMapping("/adicionar-atualizar")
    public ResponseEntity<Cronograma> saveOrMerge(@RequestBody CroRoteCidDTO dto) {
        Cronograma cronograma = cronogramaService.saveOrMerge(dto.getCronograma(), dto.getRoteiro(), dto.getCidade());
        return ResponseEntity.ok().body(cronograma);
    }
    

}
