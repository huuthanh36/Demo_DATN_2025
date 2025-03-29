import React from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";

const HomePageUsers = () => {
  return (
    <div>
      <Hero />
      <Services />
    </div>
  );
};

export default HomePageUsers;

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function HomePageUser() {
//   interface Brand {
//     MaHangSX: number;
//     TenHang: string;
//   }

//   interface Product {
//     MaSP: number;
//     TenSP: string;
//     Anh: string;
//     GiaBan: number;
//   }

//   const [brands, setBrands] = useState<Brand[]>([]);
//   const [products, setProducts] = useState<{ [key: number]: Product[] }>({});

//   useEffect(() => {
//     // Giả sử API trả về danh sách hãng sản xuất
//     axios.get("/api/brands").then((res) => setBrands(res.data));
//   }, []);

//   useEffect(() => {
//     brands.forEach((brand) => {
//       axios.get(`/api/products?brandId=${brand.MaHangSX}`).then((res) => {
//         setProducts((prev) => ({ ...prev, [brand.MaHangSX]: res.data }));
//       });
//     });
//   }, [brands]);

//   const addToCart = async (productId: number) => {
//     try {
//       const res = await axios.post(
//         `/GioHang/ThemVaoGioHang?id=${productId}&soLuong=1`
//       );
//       alert(res.data);
//       window.location.reload();
//     } catch (err: any) {
//       alert("Đã xảy ra lỗi: " + err.response?.data || err.message);
//     }
//   };

//   return (
//     <div>
//       {/* Banner */}
//       <div className="grid grid-cols-3 gap-4 p-6">
//         {[
//           {
//             img: "/images/abt-1.jpg",
//             title: "Đồng hồ Thụy Sĩ",
//             desc: "Sang trọng - Quý phái",
//           },
//           {
//             img: "/images/abt-2.jpg",
//             title: "Đồng hồ Rolex",
//             desc: "Mạnh mẽ - Sang trọng",
//           },
//           {
//             img: "/images/abt-3.jpg",
//             title: "Đồng hồ Titan",
//             desc: "Phong cách - Thời trang",
//           },
//         ].map((item, idx) => (
//           <div
//             key={idx}
//             className="relative group overflow-hidden rounded-lg shadow-lg"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-60 object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
//               <h2 className="text-white text-xl font-bold">{item.title}</h2>
//               <p className="text-white">{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Products */}
//       <div className="container mx-auto p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {brands.map((brand) => (
//             <div key={brand.MaHangSX}>
//               <div className="flex justify-between items-center border-b pb-2 mb-4">
//                 <h2 className="text-xl font-semibold">{brand.TenHang}</h2>
//                 <a
//                   href={`/Home/ChiTietChuyenMuc/${brand.MaHangSX}`}
//                   className="text-blue-500"
//                 >
//                   Xem thêm
//                 </a>
//               </div>
//               <div className="grid grid-cols-3 gap-4">
//                 {products[brand.MaHangSX]?.slice(0, 3).map((sp) => (
//                   <div key={sp.MaSP} className="border rounded-lg p-4 shadow">
//                     <a href={`/Home/ChiTietSp/${sp.MaSP}`}>
//                       <img
//                         src={sp.Anh}
//                         alt={sp.TenSP}
//                         className="w-full h-40 object-cover rounded"
//                       />
//                     </a>
//                     <h3 className="mt-2 text-center">{sp.TenSP}</h3>
//                     <div className="flex justify-between items-center mt-2">
//                       <span className="text-red-500 font-bold">
//                         {parseFloat(sp.GiaBan).toLocaleString()} VNĐ
//                       </span>
//                       <button
//                         onClick={() => addToCart(sp.MaSP)}
//                         className="bg-blue-500 text-white px-3 py-1 rounded"
//                       >
//                         Thêm
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Search */}
//       <div className="mt-6 p-4 bg-gray-100 text-center">
//         <form action="/Home/TimKiem" method="GET">
//           <input
//             type="text"
//             name="search"
//             placeholder="Tìm kiếm..."
//             className="p-2 border rounded w-2/3"
//           />
//           <button
//             type="submit"
//             className="ml-2 bg-blue-500 text-white px-3 py-2 rounded"
//           >
//             Tìm
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
