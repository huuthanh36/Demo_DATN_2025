package com.datn.entity;/*
 * @project team30
 * @author Huy
 */


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "HOCVIENS")
@Getter
@Setter
public class HocVien {
    @Id
    private String maHocVien;

    private String tenHocVien;
    private LocalDate ngaySinh;
    private boolean gioiTinh;
    private String soCMND;
    private String soDienThoai;
    private String email;
    private String diaChi;
    private String tinhTrangHocTap;
    private String nguoiNhapThongTin;

    @Lob
    private String ghiChu;

    private String uriHinhDaiDien;

    private String khoaHocQuanTam1;
    private String khoaHocQuanTam2;
    private LocalDate ngayCapNhatGanNhat;

}