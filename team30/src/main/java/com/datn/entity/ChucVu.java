package com.datn.entity;/*
 * @project team30
 * @author Huy
 */

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "CHUCVUS")
@Getter
@Setter
public class ChucVu {
    @Id
    private String maChucVu;

    private String tenChucVu;
    private boolean trangThai;

}