package com.datn.repository;

import com.datn.entity.NhanVien;
import com.datn.repository.impl.NhanVienRepoImpl;

import java.util.List;

public interface NhanVienRepo {

    boolean add(NhanVien nhanVien);

    List<NhanVien> findAll();

    NhanVien findById(String maNhanVien);

    NhanVien update(NhanVien nhanVien);

    void delete(String maNhanVien);

    void checkSoCMNDExists(String soCMND);

    void checkSoDienThoaiExists(String soDienThoai);

    void checkEmailExists(String email);

}
