package com.datn.repository.impl;

import com.datn.entity.NhanVien;
import com.datn.exception.nhanvien.DuplicateNhanVienException;
import com.datn.repository.NhanVienRepo;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.persistence.TypedQuery;
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
            String generatedId = (String) entityManager.createNativeQuery(
                    "SELECT CONCAT('NV', LPAD(IFNULL(MAX(CAST(SUBSTRING(MANHANVIEN, 3, 3) AS UNSIGNED)), 0) + 1, 3, '0')) FROM NHANVIENS"
            ).getSingleResult();

            nhanVien.setMaNhanVien(generatedId);

            this.entityManager.persist(nhanVien);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public void checkSoCMNDExists(String soCMND) {
        Long count = (Long) entityManager.createQuery(
                        "SELECT COUNT(n) FROM NhanVien n WHERE n.soCMND = :soCMND"
                )
                .setParameter("soCMND", soCMND)
                .getSingleResult();

        if (count > 0) {
            throw new DuplicateNhanVienException("Số CMND đã tồn tại.");
        }
    }

    public void checkSoDienThoaiExists(String soDienThoai) {
        Long count = (Long) entityManager.createQuery(
                        "SELECT COUNT(n) FROM NhanVien n WHERE n.soDienThoai = :soDienThoai"
                )
                .setParameter("soDienThoai", soDienThoai)
                .getSingleResult();

        if (count > 0) {
            throw new DuplicateNhanVienException("Số điện thoại đã tồn tại.");
        }
    }

    public void checkEmailExists(String email) {
        Long count = (Long) entityManager.createQuery(
                        "SELECT COUNT(n) FROM NhanVien n WHERE n.email = :email"
                )
                .setParameter("email", email)
                .getSingleResult();

        if (count > 0) {
            throw new DuplicateNhanVienException("Email đã tồn tại.");
        }
    }


}
