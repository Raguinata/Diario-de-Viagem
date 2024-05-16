package faculdade.pi.cogniventura.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import faculdade.pi.cogniventura.model.entities.Cronograma;
import faculdade.pi.cogniventura.model.entities.Roteiro;

public interface CronogramaRepository extends JpaRepository<Cronograma, Integer> {

    @Query(value = """
            SELECT cro.* FROM Cronograma cro INNER JOIN Roteiro ro
            ON cro.id_roteiro = ro.id_roteiro WHERE
            ro.id_programa_de_viagem = :id_programa_de_viagem
            """, nativeQuery = true)
    List<Cronograma> findCronogramaByProgramaId(int id_programa_de_viagem);

    void deleteByRoteiro(Roteiro roteiro);
}
