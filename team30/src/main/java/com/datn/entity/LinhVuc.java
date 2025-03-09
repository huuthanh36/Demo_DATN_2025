package com.datn.entity;/*
 * @project team30
 * @author Huy
 */

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "LINHVUCS")
@Getter
@Setter
public class LinhVuc {
    @Id
    private String maLinhVuc;

    private String tenLinhVuc;

}