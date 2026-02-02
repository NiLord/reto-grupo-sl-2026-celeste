package com.rally.team_celeste.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.rally.team_celeste.Model.ProductosModel;
import com.rally.team_celeste.Repo.ProductosRepo;

@Service
public class ProductoService {
    private final ProductosRepo productosRepo = null;



    //listar todos
    public List<ProductosModel> obtenerTodos(){
        return productosRepo.findAll();
    }
    
}
