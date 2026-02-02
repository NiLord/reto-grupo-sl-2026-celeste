package com.rally.team_celeste.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;

@Entity
@Table(name = "Bandeja")
public class BandejaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="bandejaId")
    private Long id;
    
    @Column(name = "cantidad")
    private Integer cantidad;

    @Column(name = "denominacion")
    private Integer denominacion;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Integer getDenominacion() {
        return denominacion;
    }

    public void setDenominacion(Integer denominacion) {
        this.denominacion = denominacion;
    }
    
    
}
