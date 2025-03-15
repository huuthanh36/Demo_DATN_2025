package com.datn.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class NhanVienUpdateDTO {

    @NotBlank(message = "Số CMND không được để trống")
    @Size(min = 9, max = 9, message = "Số CMND phải có đúng 9 ký tự")
    private String soCMND;

    @NotBlank(message = "Số điện thoại không được để trống")
    @Pattern(regexp = "\\d{10}", message = "Số điện thoại phải có đúng 10 chữ số")
    private String soDienThoai;

    @NotBlank(message = "Email không được để trống")
    @Email(message = "Email không đúng định dạng")
    private String email;

    private String diaChi;

    private String maChucVu;

    private String nguoiNhapThongTin;

    private String ghiChu;

    private String uriHinhDaiDien;

    public NhanVienUpdateDTO() {

    }

    public NhanVienUpdateDTO(String soCMND, String soDienThoai, String email, String diaChi, String maChucVu, String nguoiNhapThongTin, String ghiChu, String uriHinhDaiDien) {
        this.soCMND = soCMND;
        this.soDienThoai = soDienThoai;
        this.email = email;
        this.diaChi = diaChi;
        this.maChucVu = maChucVu;
        this.nguoiNhapThongTin = nguoiNhapThongTin;
        this.ghiChu = ghiChu;
        this.uriHinhDaiDien = uriHinhDaiDien;
    }

    public @NotBlank(message = "Số CMND không được để trống") @Size(min = 9, max = 9, message = "Số CMND phải có đúng 9 ký tự") String getSoCMND() {
        return soCMND;
    }

    public void setSoCMND(@NotBlank(message = "Số CMND không được để trống") @Size(min = 9, max = 9, message = "Số CMND phải có đúng 9 ký tự") String soCMND) {
        this.soCMND = soCMND;
    }

    public @NotBlank(message = "Số điện thoại không được để trống") @Pattern(regexp = "\\d{10}", message = "Số điện thoại phải có đúng 10 chữ số") String getSoDienThoai() {
        return soDienThoai;
    }

    public void setSoDienThoai(@NotBlank(message = "Số điện thoại không được để trống") @Pattern(regexp = "\\d{10}", message = "Số điện thoại phải có đúng 10 chữ số") String soDienThoai) {
        this.soDienThoai = soDienThoai;
    }

    public @NotBlank(message = "Email không được để trống") @Email(message = "Email không đúng định dạng") String getEmail() {
        return email;
    }

    public void setEmail(@NotBlank(message = "Email không được để trống") @Email(message = "Email không đúng định dạng") String email) {
        this.email = email;
    }

    public String getDiaChi() {
        return diaChi;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public String getMaChucVu() {
        return maChucVu;
    }

    public void setMaChucVu(String maChucVu) {
        this.maChucVu = maChucVu;
    }

    public String getNguoiNhapThongTin() {
        return nguoiNhapThongTin;
    }

    public void setNguoiNhapThongTin(String nguoiNhapThongTin) {
        this.nguoiNhapThongTin = nguoiNhapThongTin;
    }

    public String getGhiChu() {
        return ghiChu;
    }

    public void setGhiChu(String ghiChu) {
        this.ghiChu = ghiChu;
    }

    public String getUriHinhDaiDien() {
        return uriHinhDaiDien;
    }

    public void setUriHinhDaiDien(String uriHinhDaiDien) {
        this.uriHinhDaiDien = uriHinhDaiDien;
    }

}
