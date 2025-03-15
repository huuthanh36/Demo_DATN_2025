package com.datn.controller.admin;

import com.datn.dto.request.NhanVienAddDTO;
import com.datn.dto.request.NhanVienUpdateDTO;
import com.datn.dto.response.ApiResponse;
import com.datn.entity.NhanVien;
import com.datn.service.NhanVienService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/nhanvien")
public class NhanVienController {

    private final NhanVienService nhanvienService;

    public NhanVienController(NhanVienService nhanvienService) {
        this.nhanvienService = nhanvienService;
    }

    @GetMapping("/nhanviens")
    public ResponseEntity<ApiResponse<List<NhanVien>>> get() {
        List<NhanVien> nhanViens = this.nhanvienService.findAll();
        ApiResponse<List<NhanVien>> response = new ApiResponse<>(HttpStatus.OK.value(), "Danh sách các nhân viên", nhanViens);

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/pagination")
    public ResponseEntity<ApiResponse<List<NhanVien>>> pagination(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        List<NhanVien> nhanViens = this.nhanvienService.findAll(page, size);
        String message = "Danh sách các nhân viên ở trang " + page;
        ApiResponse<List<NhanVien>> response = new ApiResponse<>(HttpStatus.OK.value(), "Danh sách các nhân viên", nhanViens);

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<NhanVien>>> search(
            @RequestParam String tenNhanVien
    ) {
        List<NhanVien> nhanViens = this.nhanvienService.findByTenNhanVien(tenNhanVien);
        ApiResponse<List<NhanVien>> response = new ApiResponse<>(HttpStatus.OK.value(), "Danh sách các nhân viên", nhanViens);

        return ResponseEntity.status(HttpStatus.OK).body(response);
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

    @PutMapping("/update/{maNhanVien}")
    public ResponseEntity<ApiResponse<NhanVien>> update(
            @PathVariable String maNhanVien,
            @Valid @RequestBody NhanVienUpdateDTO nhanvienUpdateDTO) {
        NhanVien nhanVien = this.nhanvienService.update(maNhanVien, nhanvienUpdateDTO);
        ApiResponse<NhanVien> response = new ApiResponse<>(HttpStatus.OK.value(), "Cập nhật thành công", nhanVien);

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @DeleteMapping("/delete/{maNhanVien}")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable String maNhanVien) {
        this.nhanvienService.delete(maNhanVien);
        ApiResponse<Void> response = new ApiResponse<>(HttpStatus.OK.value(), "Xóa nhân viên thành công", null);

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

}
