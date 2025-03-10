package com.datn.repository.impl;

import com.datn.entity.NhanVien;
import com.datn.repository.NhanVienRepo;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

@Repository
public class NhanVienRepoImpl implements NhanVienRepo {

    private EntityManager entityManager;

    public NhanVienRepoImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public boolean add(NhanVien nhanVien) {
        try {
            this.entityManager.persist(nhanVien);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
