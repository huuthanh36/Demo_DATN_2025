import { useState } from "react";

const categories = [
  {
    id: 1,
    name: "DANH MỤC 1",
    description: "Tristique libero interdum sit molestie",
    courses: 3,
    share: "Toàn hệ thống",
  },
  {
    id: 2,
    name: "DANH MỤC 2",
    description: "Elementum justo, cras pretium molestie",
    courses: 5,
    share: "DS Tài khoản",
  },
  {
    id: 3,
    name: "DANH MỤC 3",
    description: "Vitae sit sit tempor elementum",
    courses: 10,
    share: "Không chia sẻ",
  },
];

// const menuItems = [
//   "Khóa học trên Blids",
//   "Danh mục khóa học",
//   "Khóa học",
//   "Tài liệu giảng dạy",
// ];

export default function CourseCategory() {
  const [search, setSearch] = useState("");
  const [isDropdownKhoaHoc, setIsDropdownKhoaHoc] = useState(false);
  const [isDropdownTL, setIsDropdownTL] = useState(false);
  const [isDropdownCuocThi, setIsDropdownCuocThi] = useState(false);
  const [isDropdownCauHoi, setIsDropdownCauHoi] = useState(false);

  const toggleDropdownKhoaHoc = () => {
    setIsDropdownKhoaHoc((prev) => !prev);
  };

  const toggleDropdownTL = () => {
    setIsDropdownTL((prev) => !prev);
  };
  const toggleDropdownCT = () => {
    setIsDropdownCuocThi((prev) => !prev);
  };
  const toggleDropdownCH = () => {
    setIsDropdownCauHoi((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-white p-4 shadow-md">
        <button
          className="flex w-full py-2.5 text-xl font-medium rounded-xl
           bg-gray-50 hover:bg-gray-400 items-center px-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 inline mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Trang chủ
        </button>

        {/* Chức năng chính */}
        <div className="gap-y-1">
          <a className="flex items-center py-4 text-lg text-orange-500 rounded-md">
            CHỨC NĂNG CHÍNH
          </a>
          <button
            onClick={toggleDropdownKhoaHoc}
            className="w-full flex items-center justify-between px-4 py-2.5 text-lg font-medium rounded-lg hover:bg-gray-700 hover:text-white"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 inline mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              Khoá học trên HANTA
            </div>
            <svg
              className={`h-5 w-5 transform transition-transform duration-200
                ${isDropdownKhoaHoc ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isDropdownKhoaHoc && (
            <div className=" bg-gray-100 rounded-md shadow-md">
              <a
                href="#"
                className="block py-2 text-lg px-8 rounded-md hover:bg-gray-200"
              >
                Danh mục khoá học
              </a>
              <a
                href="#"
                className="block px-8 py-2 text-lg  rounded-md hover:bg-gray-200"
              >
                Khoá học
              </a>
            </div>
          )}
        </div>

        {/* Tài liệu giảng dạy */}
        <div className="gap-y-1">
          <button
            onClick={toggleDropdownTL}
            className="w-full flex items-center justify-between px-4 py-2.5 text-lg font-medium rounded-lg hover:bg-gray-700 hover:text-white"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 inline mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              Tài liệu giảng dạy
            </div>
            <svg
              className={`h-5 w-5 transform transition-transform duration-200
                ${isDropdownTL ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isDropdownTL && (
            <div className=" bg-gray-100 rounded-md shadow-md">
              <a
                href="#"
                className="block py-2 text-lg px-8 rounded-md hover:bg-gray-200"
              >
                Danh mục tài liệu
              </a>
              <a
                href="#"
                className="block px-8 py-2 text-lg  rounded-md hover:bg-gray-200"
              >
                Tài liệu
              </a>
            </div>
          )}
        </div>

        {/*Quản lý cuộc thi */}
        <div className="gap-y-1">
          <button
            onClick={toggleDropdownCT}
            className="w-full flex items-center justify-between px-4 py-2.5 text-lg font-medium rounded-lg hover:bg-gray-700 hover:text-white"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 inline mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              Quản lý cuộc thi
            </div>
            <svg
              className={`h-5 w-5 transform transition-transform duration-200
                ${isDropdownCuocThi ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isDropdownCuocThi && (
            <div className=" bg-gray-100 rounded-md shadow-md">
              <a
                href="#"
                className="block py-2 text-lg px-8 rounded-md hover:bg-gray-200"
              >
                Danh mục cuộc thi
              </a>
              <a
                href="#"
                className="block px-8 py-2 text-lg  rounded-md hover:bg-gray-200"
              >
                Cuộc thi
              </a>
            </div>
          )}
        </div>

        {/*Kho câu hỏi & đề thi */}
        <div className="gap-y-1">
          <button
            onClick={toggleDropdownCH}
            className="w-full flex items-center justify-between px-4 py-2.5 text-lg font-medium rounded-lg hover:bg-gray-700 hover:text-white"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 inline mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              Kho câu hỏi & đề thi
            </div>
            <svg
              className={`h-5 w-5 transform transition-transform duration-200
                ${isDropdownCauHoi ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isDropdownCauHoi && (
            <div className=" bg-gray-100 rounded-md shadow-md">
              <a
                href="#"
                className="block py-2 text-lg px-8 rounded-md hover:bg-gray-200"
              >
                Danh mục câu hỏi
              </a>
              <a
                href="#"
                className="block px-8 py-2 text-lg  rounded-md hover:bg-gray-200"
              >
                Đề thi
              </a>
            </div>
          )}
          <button
            onClick={toggleDropdownCH}
            className="w-full flex items-center justify-between px-4 py-2.5 text-lg font-medium rounded-lg hover:bg-gray-700 hover:text-white"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 inline mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              Quản lý lớp học
            </div>
          </button>
        </div>

        {/* <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
              {item}
            </li>
          ))}
        </ul> */}

        {/* Khác */}
        <div className="gap-y-1">
          <a className="flex items-center py-4 text-lg text-orange-500 rounded-md">
            KHÁC
          </a>
          <button
            onClick={toggleDropdownCH}
            className="w-full flex items-center justify-between px-4 py-2.5 text-lg font-medium rounded-lg hover:bg-gray-700 hover:text-white"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 inline mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              Cài đặt
            </div>
          </button>
          <button
            onClick={toggleDropdownCH}
            className="w-full flex items-center justify-between px-4 py-2.5 text-lg font-medium rounded-lg hover:bg-gray-700 hover:text-white"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 inline mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              Quyền hạn
            </div>
          </button>
          <button
            onClick={toggleDropdownCH}
            className="w-full flex items-center justify-between px-4 py-2.5 text-lg font-medium rounded-lg hover:bg-gray-700 hover:text-white"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 inline mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              Tài khoản
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold mx-4">Danh mục khóa học</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="border p-2 rounded"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-orange-400 text-white py-2 px-4 rounded">
              Thêm
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="bg-white p-4 shadow-md h-auto">
          <table className="w-full border-collapse border rounded-md ">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">STT</th>
                <th>IMG</th>
                <th className="p-2 border">TÊN DANH MỤC</th>
                <th className="p-2 border">MÔ TẢ</th>
                <th className="p-2 border">SỐ KHOÁ HỌC</th>
                <th className="p-2 border">CHIA SẺ</th>
                <th className="p-2 border">HOẠT ĐỘNG</th>
              </tr>
            </thead>
            <tbody>
              {categories
                .filter((c) =>
                  c.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((category, index) => (
                  <tr key={category.id} className="border-b">
                    <td className="p-2 text-center">{index + 1}</td>
                    <img
                      className=" w-16 h-16 p-2"
                      src="https://www.svgrepo.com/show/476364/number-one.svg"
                      alt="--------"
                    />
                    <td className="p-2">{category.name}</td>

                    <td className="p-2">{category.description}</td>
                    <td className="p-2 text-center">{category.courses}</td>
                    <td className="p-2">{category.share}</td>
                    <td className="p-2 text-center">
                      <button
                        onClick={toggleDropdownKhoaHoc}
                        className="text-blue-500 mx-2 border py-1 px-2 rounded-md items-center align-middle"
                      >
                        Xem
                      </button>
                      <button
                        onClick={toggleDropdownKhoaHoc}
                        className="text-blue-500 mx-2 border py-1 px-2 rounded-md items-center align-middle"
                      >
                        Sửa
                      </button>
                      <button
                        onClick={toggleDropdownKhoaHoc}
                        className="text-blue-500 mx-2  border py-1 px-2 rounded-md items-center align-middle"
                      >
                        Xoá
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
