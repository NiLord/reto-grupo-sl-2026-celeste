package com.rally.team_celeste.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rally.team_celeste.Model.BandejaModel;

public interface BandejaRepository extends JpaRepository<BandejaModel,Long> {
    
}
