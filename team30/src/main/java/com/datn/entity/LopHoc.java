package com.datn.entity;/*
 * @project team30
 * @author Huy
 */

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "LOPHOCS")
@Getter
@Setter
public class LopHoc {
    @Id
    private String maLopHoc;

    private String tenLopHoc;
    private String lichHoc;
    private String tinhTrang;

    private LocalDate ngayBatDau;
    private LocalDate ngayKetThuc;

    private double thuLao;
    private double daThanhToan;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "MAKHOAHOC")
    private KhoaHoc khoaHoc;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "MAPHONGHOC")
    private PhongHoc phongHoc;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "MAGIANGVIEN")
    private GiangVien giangVien;

    @Lob
    private String ghiChu;

}
