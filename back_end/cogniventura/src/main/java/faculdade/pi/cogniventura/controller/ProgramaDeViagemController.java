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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import faculdade.pi.cogniventura.model.DTOs.ProgramaVeiculoDTO;
import faculdade.pi.cogniventura.model.entities.ProgramaDeViagem;
import faculdade.pi.cogniventura.model.services.ProgramaDeViagemService;

@RestController
@RequestMapping(value = "/programa")
@CrossOrigin(origins = "*")
public class ProgramaDeViagemController {

    @Autowired
    ProgramaDeViagemService programaDeViagemService;

    @GetMapping("/listar/{id_usuario}")
    public ResponseEntity<List<ProgramaDeViagem>> findByIdUsuario(@PathVariable int id_usuario) {
        List<ProgramaDeViagem> programas = programaDeViagemService.findByIdUsuario(id_usuario);
        return ResponseEntity.ok().body(programas);
    }

    @PostMapping("/cadastro")
    public ResponseEntity<ProgramaDeViagem> cadastro(@RequestBody ProgramaDeViagem programaDeViagem) {
        programaDeViagem = programaDeViagemService.cadastro(programaDeViagem);
        return ResponseEntity.ok().body(programaDeViagem);
    }

    @PutMapping("veiculo/adcionaOuAtualiza")
    public ResponseEntity<ProgramaDeViagem> saveOrMergeVeiculo(@RequestBody ProgramaVeiculoDTO dto) {
        ProgramaDeViagem programa = programaDeViagemService.saveOrMergeVeiculo(dto);
        return ResponseEntity.ok().body(programa);
    }

    @DeleteMapping("veiculo/delete")
    public ResponseEntity<Void> deletarVeiculo(
            @RequestBody ProgramaVeiculoDTO programaVeiculoDTO) {

        programaDeViagemService.deletaVeiculoDoPrograma(programaVeiculoDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/atualizar-orcamento")
    public ResponseEntity<Integer> atualizarOrcamento(
            @RequestParam int idProgramaDeViagem,
            @RequestParam BigDecimal orcamento) {
        int status = programaDeViagemService.atualizarOrcamento(idProgramaDeViagem, orcamento);
        return ResponseEntity.ok().body(status);
    }
}
