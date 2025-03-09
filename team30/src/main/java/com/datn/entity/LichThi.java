package com.datn.entity;/*
 * @project team30
 * @author Huy
 */

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "LICHTHIS")
@Getter
@Setter
public class LichThi {
    @Id
    private String maLichThi;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "MALINHVUC")
    private LinhVuc linhVuc;

    private String tenChungChi;
    private LocalDate ngayThi;

    @Lob
    private String thongTinChiTiet;

    private double lePhiThi;

}
