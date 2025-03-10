package com.datn.controller.admin;

import com.datn.dto.NhanVienAddDTO;
import com.datn.entity.NhanVien;
import com.datn.service.NhanVienService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/nhanvien")
public class NhanVienController {

    private final NhanVienService nhanvienService;

    public NhanVienController(NhanVienService nhanvienService) {
        this.nhanvienService = nhanvienService;
    }

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody NhanVienAddDTO nhanvienAddDTO) {
        NhanVien nhanVien = new NhanVien();
        nhanVien.setTenNhanVien(nhanvienAddDTO.getTenNhanVien());
        nhanVien.setNgaySinh(nhanvienAddDTO.getNgaySinh());
        nhanVien.setGioiTinh(nhanvienAddDTO.isGioiTinh());
        nhanVien.setSoCMND(nhanvienAddDTO.getSoCMND());
        nhanVien.setSoDienThoai(nhanvienAddDTO.getSoDienThoai());
        nhanVien.setEmail(nhanvienAddDTO.getEmail());
        nhanVien.setDiaChi(nhanvienAddDTO.getDiaChi());
        nhanVien.setNguoiNhapThongTin(nhanvienAddDTO.getNguoiNhapThongTin());
        nhanVien.setGhiChu(nhanvienAddDTO.getGhiChu());
        nhanVien.setUriHinhDaiDien(nhanvienAddDTO.getUriHinhDaiDien());

        boolean success = nhanvienService.add(nhanVien, nhanvienAddDTO.getMaChucVu());

        return success
                ? ResponseEntity.ok("Thêm nhân viên thành công")
                : ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Thêm nhân viên thất bại");
    }

}
