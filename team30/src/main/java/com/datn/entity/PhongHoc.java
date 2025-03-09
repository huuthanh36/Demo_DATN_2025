package com.datn.entity;/*
 * @project team30
 * @author Huy
 */

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "PHONGHOCS")
@Getter
@Setter
public class PhongHoc {
    @Id
    private String maPhongHoc;

    private String tenPhongHoc;
    private int soChoNgoi;

    @Lob
    private String ghiChu;

}