package com.datn.repository.impl;

import com.datn.entity.ChucVu;
import com.datn.repository.ChucVuRepo;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ChucVuRepoImpl implements ChucVuRepo {

    private final EntityManager entityManager;

    @Autowired
    public ChucVuRepoImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public List<ChucVu> findAll() {
        TypedQuery<ChucVu> typedQuery =
                this.entityManager.createQuery("FROM ChucVu", this.getEntityClass());

        return typedQuery.getResultList();
    }

    private Class<ChucVu> getEntityClass() {
        return ChucVu.class;
    }

}
