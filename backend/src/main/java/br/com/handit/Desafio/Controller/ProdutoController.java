package br.com.handit.Desafio.Controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.handit.Desafio.Model.Produto;
import br.com.handit.Desafio.Repository.ProdutoRepository;

@RestController
@RequestMapping("api/produtos")
@CrossOrigin(origins ="http://localhost:3000" )
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository produtoRepository;
		
	
	
	@RequestMapping(method = {RequestMethod.POST, RequestMethod.PUT})
	public @ResponseBody Produto novoProduto(@Valid Produto produto) {
		
		
		produtoRepository.save(produto);
		return produto;
	}
	
	@GetMapping
	public Iterable<Produto>obterProdutos() {
		return produtoRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<Produto> obterProdutoPorId(@PathVariable int id) {
		return produtoRepository.findById(id);
	}
	
	@DeleteMapping("/{id}")
	public void excluirProduto(@PathVariable int id) {
		produtoRepository.deleteById(id);
	}
	
	
}
