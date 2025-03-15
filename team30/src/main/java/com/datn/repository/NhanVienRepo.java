package com.datn.repository;

import com.datn.entity.NhanVien;

public interface NhanVienRepo {

    boolean add(NhanVien nhanVien);

    void checkSoCMNDExists(String soCMND);

    void checkSoDienThoaiExists(String soDienThoai);

    void checkEmailExists(String email);

}
