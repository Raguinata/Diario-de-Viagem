package faculdade.pi.cogniventura.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import faculdade.pi.cogniventura.model.entities.Cronograma;
import faculdade.pi.cogniventura.model.entities.Parada;
import jakarta.transaction.Transactional;

public interface ParadaRepository extends JpaRepository<Parada, Integer>{

    List<Parada> findByCronograma(Cronograma cronograma);

    void deleteByCronograma(Cronograma cronograma);

    @Modifying
    @Transactional
    @Query(value = 
        """
            DELETE FROM Parada parada WHERE 
            parada.cronograma.roteiro.idRoteiro = :id_roteiro
        """)
    public void deleteByIdRoteiro(@Param("id_roteiro") int id_roteiro);
    
}
