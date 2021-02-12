package br.com.handit.Desafio.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import br.com.handit.Desafio.Model.Produto;


public interface ProdutoRepository  extends CrudRepository<Produto, Integer>{

	
}
