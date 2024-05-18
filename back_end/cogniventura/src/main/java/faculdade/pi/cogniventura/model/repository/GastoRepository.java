package faculdade.pi.cogniventura.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import faculdade.pi.cogniventura.model.entities.Cronograma;
import faculdade.pi.cogniventura.model.entities.Gasto;
import jakarta.transaction.Transactional;

public interface GastoRepository extends JpaRepository<Gasto, Integer>{

    List<Gasto> findByCronograma(Cronograma cronograma);

    @Query("SELECT gasto FROM Gasto gasto WHERE " 
    + " gasto.cronograma.roteiro.programaDeViagem.idProgramaDeViagem = :id_programa")
    public List<Gasto> findByIdPrograma(@Param("id_programa") int id_programa);

    void deleteByCronograma(Cronograma cronograma);

    @Modifying
    @Transactional
    @Query(value = 
        """
            DELETE FROM Gasto gasto WHERE 
            gasto.cronograma.roteiro.idRoteiro = :id_roteiro
        """)
    public void deleteByIdRoteiro(@Param("id_roteiro") int id_roteiro);
}
