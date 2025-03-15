package com.datn.repository;

import com.datn.entity.NhanVien;

import java.util.List;

public interface NhanVienRepo {

    boolean add(NhanVien nhanVien);

    List<NhanVien> findAll();

    void checkSoCMNDExists(String soCMND);

    void checkSoDienThoaiExists(String soDienThoai);

    void checkEmailExists(String email);

}
