# Ban Truyền Thông – Giới Trẻ Bùi Chu Miền Nam

Giải nén toàn bộ gói và mở index.html bằng Chrome hoặc Edge. Đăng nhập thử bằng admin / admin123. Các tệp trong data là dữ liệu ban đầu. Khi mở trực tiếp từ ổ đĩa, ứng dụng lấy bản dữ liệu đi kèm trong offline.js.

Ở mục Công việc, chọn Thêm công việc, nhập tên, loại việc, ngày giao và hạn hoàn thành rồi bấm Lưu. Có thể lọc theo tháng, năm hoặc trạng thái. Mục Thành viên cho phép xem theo nhiệm kỳ, tìm theo tên và cập nhật hồ sơ.

Nội dung và Tư liệu hỗ trợ thêm đường dẫn. Một số mục mẫu chỉ có tên và đường dẫn minh họa. Các tệp ảnh, video và tài liệu tương ứng chưa được cung cấp.

Các thay đổi được lưu trong trình duyệt. Dùng Cài đặt → Sao lưu để tải bản JSON trước khi đổi máy hoặc xóa dữ liệu trình duyệt. Bản sao chứa dữ liệu tài khoản và thông tin thành viên, hãy lưu riêng.

Để chạy cấu hình và ứng dụng trên cùng địa chỉ cục bộ, mở thư mục bằng Live Server hoặc chạy python -m http.server 8000 --bind 127.0.0.1 tại thư mục này rồi truy cập http://127.0.0.1:8000. Khi chạy qua HTTP, ứng dụng đọc config.json và data/*.json. admin.html cho phép chỉnh cấu hình tại trình duyệt và xuất JSON.

Đây là phiên bản cục bộ. Tài khoản mẫu nằm trong mã nguồn, việc đăng nhập và phân quyền diễn ra tại trình duyệt. Trước khi triển khai với dữ liệu thật cho nhiều người, cần bổ sung xác thực và phân quyền phía máy chủ và kết nối cơ sở dữ liệu dùng chung. database.sql là tệp SQL gốc để tham khảo khi triển khai. Mã khôi phục mật khẩu hiện hiển thị trên máy ở chế độ demo.
