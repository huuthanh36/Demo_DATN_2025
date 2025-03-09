package com.datn.entity;/*
 * @project team30
 * @author Huy
 */

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "GIANGVIENS")
@Getter
@Setter
public class GiangVien {
    @Id
    private String maGiangVien;

    private String tenGiangVien;
    private LocalDate ngaySinh;
    private boolean gioiTinh;
    private String soCMND;
    private String soDienThoai;
    private String email;
    private String diaChi;
    private String coQuanCongTac;
    private String tinhTrangCongTac;

    @Lob
    private String ghiChu;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "MALINHVUC")
    private LinhVuc linhVuc;

    private String urlHinhDaiDien;

}
