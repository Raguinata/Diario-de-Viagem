package faculdade.pi.cogniventura.model.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import faculdade.pi.cogniventura.model.entities.ProgramaDeViagem;
import faculdade.pi.cogniventura.model.entities.Usuario;
import jakarta.transaction.Transactional;

public interface ProgramaDeViagemRepository extends JpaRepository<ProgramaDeViagem, Integer> {

    List<ProgramaDeViagem> findByUsuarios(Usuario usuario);

    @Modifying
    @Transactional
    @Query(value = "UPDATE programa_de_viagem SET orcamento = :orcamento"
            + " WHERE id_programa_de_viagem = :id_programa_de_viagem", nativeQuery = true)
    public int atualizarOrcamento(
            @Param("id_programa_de_viagem") int id_programa_de_viagem,
            @Param("orcamento") BigDecimal orcamento);

}
