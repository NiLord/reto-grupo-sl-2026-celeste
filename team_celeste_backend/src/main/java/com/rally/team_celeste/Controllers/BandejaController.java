package com.rally.team_celeste.Controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rally.team_celeste.DTO.BandejaDTO;
import com.rally.team_celeste.Model.BandejaModel;
import com.rally.team_celeste.Service.BandejaService;

@RestController
@RequestMapping("/api/bandeja")
public class BandejaController {
    private final BandejaService bandejaService;

    public BandejaController(BandejaService bandejaService){
        this.bandejaService = bandejaService;
    }

        //Leer todos
    @GetMapping("/todos")
    public ResponseEntity<List<BandejaDTO>> obtenerTodos() {
        List<BandejaModel> bandejas = bandejaService.obtenerTodos();
        List<BandejaDTO> bandejasDTOs = bandejas.stream()
            .map(b -> new BandejaDTO(
                b.getId(),
                b.getCantidad(),
                b.getDenominacion().getNombre(),
                b.getDenominacion().getValor()
            ))
            .collect(Collectors.toList());
        return ResponseEntity.ok(bandejasDTOs);
    }
}
