import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  interface Brand {
    id: number;
    name: string;
  }

  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    axios.get("/api/brands").then((res) => setBrands(res.data));
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:underline">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/products" className="hover:underline">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href="/news" className="hover:underline">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Liên hệ
                </a>
              </li>
            </ul>
          </nav>
          <a href="/cart" className="bg-blue-500 px-4 py-2 rounded">
            Giỏ hàng
          </a>
        </div>
      </div>

      {/* Banner */}
      <div className="grid grid-cols-3 gap-4 p-6">
        {["abt-1.jpg", "abt-2.jpg", "abt-3.jpg"].map((img, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={`/images/${img}`}
              alt="Banner"
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Products */}
      <div className="container mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">Sản phẩm</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {brands.map((brand) => (
            <div key={brand.id} className="border p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold">{brand.name}</h3>
              <a href={`/products/${brand.id}`} className="text-blue-500">
                Xem chi tiết
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white p-6 mt-6">
        <div className="container mx-auto flex justify-between">
          <p>&copy; 2025 Siêu thị đồng hồ. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="hover:underline">
              Facebook
            </a>
            <a href="https://twitter.com" className="hover:underline">
              Twitter
            </a>
            <a href="https://www.google.com" className="hover:underline">
              Google+
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
