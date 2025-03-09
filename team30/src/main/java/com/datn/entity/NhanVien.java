package com.datn.entity;/*
 * @project team30
 * @author Huy
 */

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "NHANVIENS")
@Getter
@Setter
public class NhanVien {
    @Id
    private String maNhanVien;

    private String tenNhanVien;
    private LocalDate ngaySinh;
    private boolean gioiTinh;
    private String soCMND;
    private String soDienThoai;
    private String email;
    private String diaChi;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "MACHUCVU")
    private ChucVu chucVu;

    private String nguoiNhapThongTin;

    @Lob
    private String ghiChu;

    private String uriHinhDaiDien;

}
