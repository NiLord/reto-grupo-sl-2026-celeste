package com.rally.team_celeste.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(origins = "*")
public class ProductosController {
    @Autowired
    private ProductosRepo productosRepo;

    @GetMapping("/productos")
    public List<ProductosModel> getProductList(){
        return productosRepo.findAll();
    }

    @PutMapping("/comprar/productos")
    public List<ProductosModel> putProductosActualizados(@RequestBody List<ProductosModel> productosParaActualizar) {

        ProductosModel productoActualizado;

        for (ProductosModel producto : productosParaActualizar) {
            productoActualizado = productosRepo.findById(producto.getId()).get();

            productoActualizado.setCantidad(producto.getCantidad());

            productosRepo.save(productoActualizado);
        }
        
        return productosRepo.findAll();
    }
    /*
    @PutMapping("/update/{id}")
    public String updateUser(@PathVariable long id, @RequestBody User user){
        User updatedUser = userRepo.findById(id).get();

        updatedUser.setAge(user.getAge());
        updatedUser.setFirstName(user.getFirstName());
        updatedUser.setLastName(user.getLastName());
        updatedUser.setOccupation(user.getOccupation());

        userRepo.save(updatedUser);
        return "Updated";
    }
    
    */
}
