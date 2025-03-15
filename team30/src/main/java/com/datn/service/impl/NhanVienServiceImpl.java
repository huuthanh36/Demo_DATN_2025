package com.datn.service.impl;

import com.datn.entity.ChucVu;
import com.datn.entity.NhanVien;
import com.datn.repository.NhanVienRepo;
import com.datn.service.NhanVienService;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Service;

import java.util.List;

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
        ChucVu chucVu = entityManager.find(ChucVu.class, maChucVu);
        if (chucVu == null) {
            return false;
        }
        this.nhanvienRepo.checkSoCMNDExists(nhanVien.getSoCMND());
        this.nhanvienRepo.checkSoDienThoaiExists(nhanVien.getSoDienThoai());
        this.nhanvienRepo.checkEmailExists(nhanVien.getEmail());

        nhanVien.setChucVu(chucVu);

        return nhanvienRepo.add(nhanVien);
    }

    @Override
    public List<NhanVien> findAll() {
        return this.nhanvienRepo.findAll();
    }
}
