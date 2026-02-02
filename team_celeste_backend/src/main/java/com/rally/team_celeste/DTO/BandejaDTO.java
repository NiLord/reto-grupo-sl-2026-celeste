package com.rally.team_celeste.DTO;

public class BandejaDTO {
    private Long id;
    private Integer cantidad;
    private String nombreDenominacion;
    private double valorDenominacion;

    public BandejaDTO(Long id, Integer cantidad, String nombreDenominacion, double valorDenominacion) {
        this.id = id;
        this.cantidad = cantidad;
        this.nombreDenominacion = nombreDenominacion;
        this.valorDenominacion = valorDenominacion;
    }

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

    public String getNombreDenominacion() {
        return nombreDenominacion;
    }

    public void setNombreDenominacion(String nombreDenominacion) {
        this.nombreDenominacion = nombreDenominacion;
    }

    public double getValorDenominacion() {
        return valorDenominacion;
    }

    public void setValorDenominacion(double valorDenominacion) {
        this.valorDenominacion = valorDenominacion;
    }
}
