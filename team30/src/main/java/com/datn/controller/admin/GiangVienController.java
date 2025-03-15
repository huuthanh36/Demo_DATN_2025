package com.datn.controller.admin;

import com.datn.dto.request.GiangVienAddDTO;
import com.datn.dto.response.ApiResponse;
import com.datn.entity.GiangVien;
import com.datn.entity.LinhVuc;
import com.datn.exception.chucvu.LinhVucNotFoundException;
import com.datn.service.GiangVienService;
import com.datn.service.LinhVucService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/giangvien")
public class GiangVienController {

    private final GiangVienService giangVienService;

    private final LinhVucService linhVucService;

    @Autowired
    public GiangVienController(GiangVienService giangVienService, LinhVucService linhVucService) {
        this.giangVienService = giangVienService;
        this.linhVucService = linhVucService;
    }

    @PostMapping("/add")
    public ResponseEntity<ApiResponse<GiangVien>> add(@Valid @RequestBody GiangVienAddDTO giangVienAddDTO) {
        GiangVien giangVien = new GiangVien();
        giangVien.setTenGiangVien(giangVienAddDTO.getTenGiangVien());
        giangVien.setNgaySinh(giangVienAddDTO.getNgaySinh());
        giangVien.setGioiTinh(giangVienAddDTO.isGioiTinh());
        giangVien.setSoCMND(giangVienAddDTO.getSoCMND());
        giangVien.setSoDienThoai(giangVienAddDTO.getSoDienThoai());
        giangVien.setEmail(giangVienAddDTO.getEmail());
        giangVien.setDiaChi(giangVienAddDTO.getDiaChi());
        giangVien.setCoQuanCongTac(giangVienAddDTO.getCoQuanCongTac());
        giangVien.setTinhTrangCongTac(giangVienAddDTO.getTinhTrangCongTac());
        giangVien.setGhiChu(giangVienAddDTO.getGhiChu());
        giangVien.setUrlHinhDaiDien(giangVienAddDTO.getUrlHinhDaiDien());

        LinhVuc linhVuc = this.linhVucService.findById(giangVienAddDTO.getMaLinhVuc());
        if(linhVuc == null) {
            throw new LinhVucNotFoundException("Không tìm thấy lĩnh vực với mã " + giangVienAddDTO.getMaLinhVuc());
        }

        giangVien.setLinhVuc(linhVuc);

        GiangVien gvResponse = this.giangVienService.add(giangVien);
        ApiResponse<GiangVien> response = new ApiResponse<>(HttpStatus.CREATED.value(), "Thêm giảng viên thành công", gvResponse);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

}
