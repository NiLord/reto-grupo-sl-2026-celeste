package com.rally.team_celeste.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table (name = "Bandeja")
public class BandejaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "cantidad", nullable = false)
    private int cantidad;
    @Column(name = "denominacion", nullable = false)
    @ManyToOne
    @JoinColumn(name = "denominacion")
    private DenominacionesModel denominacion;
    public BandejaModel(Long id, int cantidad, DenominacionesModel denominacion) {
        this.id = id;
        this.cantidad = cantidad;
        this.denominacion = denominacion;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public int getCantidad() {
        return cantidad;
    }
    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
    public DenominacionesModel getDenominacion() {
        return denominacion;
    }
    public void setDenominacion(DenominacionesModel denominacion) {
        this.denominacion = denominacion;
    }
}
