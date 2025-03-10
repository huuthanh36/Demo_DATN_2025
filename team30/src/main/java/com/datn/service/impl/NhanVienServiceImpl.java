package com.datn.service.impl;

import com.datn.entity.ChucVu;
import com.datn.entity.NhanVien;
import com.datn.repository.NhanVienRepo;
import com.datn.service.NhanVienService;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Service;

@Service
public class NhanVienServiceImpl implements NhanVienService {

    private final NhanVienRepo nhanvienRepo;
    private final EntityManager entityManager;

    public NhanVienServiceImpl(NhanVienRepo nhanvienRepo, EntityManager entityManager) {
        this.nhanvienRepo = nhanvienRepo;
        this.entityManager = entityManager;
    }

    @Override
    public boolean add(NhanVien nhanVien, String maChucVu) {
        try {
            ChucVu chucVu = entityManager.find(ChucVu.class, maChucVu);
            if (chucVu == null) {
                return false;
            }

            nhanVien.setChucVu(chucVu);

            return nhanvienRepo.add(nhanVien);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
