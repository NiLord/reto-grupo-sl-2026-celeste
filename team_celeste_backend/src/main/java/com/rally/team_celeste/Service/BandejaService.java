package com.rally.team_celeste.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.rally.team_celeste.Model.BandejaModel;
import com.rally.team_celeste.Repo.BandejaRepository;

@Service
public class BandejaService {

    private final BandejaRepository bandejaRepository;

    public BandejaService(BandejaRepository bandejaRepository){
        this.bandejaRepository = bandejaRepository;
    }

    //listar todos
    public List<BandejaModel> obtenerTodos(){
        return bandejaRepository.findAll();
    }

    //Buscar por id
    public BandejaModel findById(Long id){
        return bandejaRepository.findById(id).orElseThrow(() -> new RuntimeException("Denominación no encontrada"));
    }

    //Actualizar cantidad de bandeja
    public BandejaModel actualizarCantidad(Long id, Integer cantidad){
        BandejaModel bandeja = findById(id);
        bandeja.setCantidad(cantidad);
        return bandejaRepository.save(bandeja);
    }
}
