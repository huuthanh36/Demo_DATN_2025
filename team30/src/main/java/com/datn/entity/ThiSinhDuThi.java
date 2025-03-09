package com.datn.entity;/*
 * @project team30
 * @author Huy
 */

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "THISINHDUTHIS")
@Getter
@Setter
public class ThiSinhDuThi {
    @Id
    private String maThiSinhDuThi;

    private String tenThiSinhDuThi;
    private LocalDate ngaySinh;
    private boolean gioiTinh;
    private String soCMND;
    private String soDienThoai;
    private String email;
    private String diaChi;
    private String dienDangKy;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "MALICHTHI")
    private LichThi lichThi;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "MAPHONGTHI")
    private PhongHoc phongThi;

    private double diem;
    private String xepLoai;

    private LocalDate ngayCapChungChi;

    @Lob
    private String ghiChu;

    private String urlHinhDaiDien;

}
