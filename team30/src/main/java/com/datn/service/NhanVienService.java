package com.datn.service;

import com.datn.entity.NhanVien;

import java.util.List;

public interface NhanVienService {

    boolean add(NhanVien nhanVien, String maChucVu);

    List<NhanVien> findAll();

}
