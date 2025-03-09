import { useState } from "react";
import CourseCategory from "./CourseCategory";
import CourseList from "./CourseList";
import SourceCategory from "./Source/SourceCategory";
import SourceList from "./Source/SourceList";
import ExamList from "./Exam/ExamList";
import ExamDetail from "./Exam/ExamDetail";
import QuestionList from "./Question/QuestionList";
import TestDetails from "./Question/TestDetails";
import Courses from "../HomePage/Course";

// const menuItems = [
//   "Khóa học trên Blids",
//   "Danh mục khóa học",
//   "Khóa học",
//   "Tài liệu giảng dạy",
// ];

export default function CourseHomePage() {
  const [activeDropdown, setActiveDropdown] = useState("");
  const [isDropdownKhoaHoc, setIsDropdownKhoaHoc] = useState(false);

  const [isDropdownTL, setIsDropdownTL] = useState(false);
  const [isDropdownCuocThi, setIsDropdownCuocThi] = useState(false);
  const [isDropdownCauHoi, setIsDropdownCauHoi] = useState(false);

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };
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
  const resetDropdowns = () => {
    setActiveDropdown("");
    setIsDropdownKhoaHoc(false);
    setIsDropdownTL(false);
    setIsDropdownCuocThi(false);
    setIsDropdownCauHoi(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-white p-4 shadow-md">
        <button
          onClick={resetDropdowns}
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
            onClick={() => {
              toggleDropdownKhoaHoc();
            }}
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
              <button
                onClick={() => toggleDropdown("danhMucKH")}
                className="py-2 text-lg text-left pl-12 w-full rounded-md hover:bg-gray-300"
              >
                Danh mục khoá học
              </button>
              <button
                onClick={() => {
                  toggleDropdown("khoaHoc");
                }}
                className=" py-2  text-lg text-left pl-12 w-full rounded-md hover:bg-gray-300"
              >
                Khoá học
              </button>
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
              <button
                onClick={() => toggleDropdown("danhMucTL")}
                className="py-2 text-lg text-left pl-12 w-full rounded-md hover:bg-gray-300"
              >
                Danh mục tài liệu
              </button>
              <button
                onClick={() => toggleDropdown("taiLieu")}
                className="py-2 text-lg text-left pl-12 w-full rounded-md hover:bg-gray-300"
              >
                Tài liệu
              </button>
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
              <button
                onClick={() => toggleDropdown("danhMucCT")}
                className="py-2 text-lg text-left pl-12 w-full rounded-md hover:bg-gray-300"
              >
                Danh mục cuộc thi
              </button>
              <button
                onClick={() => toggleDropdown("cuocThi")}
                className="py-2 text-lg text-left pl-12 w-full rounded-md hover:bg-gray-300"
              >
                Cuộc thi
              </button>
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
              <button
                onClick={() => toggleDropdown("danhMucCH")}
                className="py-2 text-lg text-left pl-12 w-full rounded-md hover:bg-gray-300"
              >
                Danh mục câu hỏi
              </button>
              <button
                onClick={() => toggleDropdown("deThi")}
                className="py-2 text-lg text-left pl-12 w-full rounded-md hover:bg-gray-300"
              >
                Đề thi
              </button>
            </div>
          )}
          <button
            // onClick={toggleDropdownCH}
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

        {/* Khác */}
        <div className="gap-y-1">
          <a className="flex items-center py-4 text-lg text-orange-500 rounded-md">
            KHÁC
          </a>
          <button
            // onClick={toggleDropdownCH}
            className="w-full flex items-center justify-between px-4 py-2.5 text-lg font-medium rounded-lg hover:bg-gray-700 hover:text-white"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Cài đặt
            </div>
          </button>
          <button
            // onClick={toggleDropdownCH}
            className="w-full flex items-center justify-between px-4 py-2.5 text-lg font-medium rounded-lg hover:bg-gray-700 hover:text-white"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6  mr-2"
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
            // onClick={toggleDropdownCH}
            className="w-full flex items-center justify-between px-4 py-2.5 text-lg font-medium rounded-lg hover:bg-gray-700 hover:text-white"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              Tài khoản
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-6">
        {activeDropdown === "danhMucKH" && <CourseCategory />}
        {activeDropdown === "khoaHoc" && <CourseList />}
        {activeDropdown === "danhMucTL" && <SourceCategory />}
        {activeDropdown === "taiLieu" && <SourceList />}
        {activeDropdown === "danhMucCT" && <ExamList />}
        {activeDropdown === "cuocThi" && <ExamDetail />}
        {activeDropdown === "danhMucCH" && <QuestionList />}
        {activeDropdown === "deThi" && <TestDetails />}
        {activeDropdown === "" && <Courses />}
      </div>
    </div>
  );
}
