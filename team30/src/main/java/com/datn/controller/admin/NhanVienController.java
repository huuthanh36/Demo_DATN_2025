package com.datn.controller.admin;

import com.datn.dto.request.NhanVienAddDTO;
import com.datn.dto.response.ApiResponse;
import com.datn.entity.NhanVien;
import com.datn.service.NhanVienService;
import jakarta.validation.Valid;
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
    public ResponseEntity<ApiResponse<String>> add(@Valid @RequestBody NhanVienAddDTO nhanvienAddDTO) {
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

        ApiResponse<String> response = new ApiResponse<>(
                success ? HttpStatus.CREATED.value() : HttpStatus.BAD_REQUEST.value(),
                success ? "Thêm nhân viên thành công" : "Thêm nhân viên thất bại",
                null
        );

        return ResponseEntity.status(success ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST).body(response);
    }

}
