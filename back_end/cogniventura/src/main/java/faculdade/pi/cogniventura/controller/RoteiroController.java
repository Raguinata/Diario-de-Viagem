package faculdade.pi.cogniventura.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import faculdade.pi.cogniventura.model.DTOs.ProgramaRoteiroDTO;
import faculdade.pi.cogniventura.model.entities.ProgramaDeViagem;
import faculdade.pi.cogniventura.model.entities.Roteiro;
import faculdade.pi.cogniventura.model.services.RoteiroService;

@RestController
@RequestMapping(value = "/roteiro")
@CrossOrigin(origins = "*")
public class RoteiroController {

    @Autowired
    RoteiroService roteiroService;

    @PutMapping("/adicionar-atualizar")
    public ResponseEntity<Roteiro> saveOrMerge(@RequestBody ProgramaRoteiroDTO dto) {
        Roteiro roteiro = roteiroService.saveOrMerge(dto.getProgramaDeViagem(), dto.getRoteiro());
        return ResponseEntity.ok().body(roteiro);
    }

    @DeleteMapping("/{id_roteiro}")
    public void deleteByid(@PathVariable int id_roteiro) {
        roteiroService.deleteByid(id_roteiro);
    }

    @GetMapping("/")
    public ResponseEntity<List<Roteiro>> findByPrograma(@RequestBody ProgramaDeViagem programaDeViagem) {
        List<Roteiro> roteiros = roteiroService.findByPrograma(programaDeViagem);
        return ResponseEntity.ok().body(roteiros);
    }
}
