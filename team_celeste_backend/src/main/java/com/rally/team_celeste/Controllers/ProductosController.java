package com.rally.team_celeste.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rally.team_celeste.Model.ProductosModel;
import com.rally.team_celeste.Repo.ProductosRepo;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class ProductosController {
    @Autowired
    private ProductosRepo productosRepo;

    @GetMapping("/productos")
    public List<ProductosModel> getProductList(){
        return productosRepo.findAll();
    }
    
}
