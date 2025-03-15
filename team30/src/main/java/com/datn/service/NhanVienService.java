package com.datn.service;

import com.datn.dto.request.NhanVienUpdateDTO;
import com.datn.entity.NhanVien;

import java.util.List;

public interface NhanVienService {

    boolean add(NhanVien nhanVien, String maChucVu);

    NhanVien update(String maNhanVien, NhanVienUpdateDTO nhanVienUpdateDTO);

    void delete(String maNhanVien);

    List<NhanVien> findAll();

}
