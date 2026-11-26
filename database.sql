-- ============================================
-- BAN TRUYỀN THÔNG - SUPABASE DATABASE SETUP
-- Version: 1.0.0
-- Date: 2024-11-26
-- ============================================

-- ============================================
-- 1. TẠO CÁC BẢNG (TABLES)
-- ============================================

-- Bảng người dùng
CREATE TABLE IF NOT EXISTS users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'user' CHECK (role IN ('truongBan', 'phoBan', 'user')),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
  avatar TEXT,
  full_name TEXT,
  phone TEXT,
  last_login TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Bảng thành viên BĐH
CREATE TABLE IF NOT EXISTS members (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT,
  email TEXT,
  phone TEXT,
  birth_year INTEGER CHECK (birth_year >= 1950 AND birth_year <= 2010),
  birthday DATE,
  gender TEXT CHECK (gender IN ('male', 'female', 'other')),
  parish TEXT,
  address TEXT,
  avatar TEXT,
  term TEXT NOT NULL,
  active BOOLEAN DEFAULT true,
  joined_date DATE,
  bio TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Bảng công việc
CREATE TABLE IF NOT EXISTS works (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT,
  assign_date DATE NOT NULL,
  deadline DATE NOT NULL,
  time TEXT,
  assignee TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'inprogress', 'completed', 'cancelled')),
  goal TEXT,
  reason TEXT,
  photographer TEXT,
  videographer TEXT,
  editor TEXT,
  designer TEXT,
  note TEXT,
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  created_by TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Bảng tư liệu
CREATE TABLE IF NOT EXISTS media (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT,
  year TEXT,
  month TEXT,
  file_url TEXT,
  file_size TEXT,
  category TEXT,
  uploaded_by TEXT,
  downloads INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Bảng content
CREATE TABLE IF NOT EXISTS content (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  type TEXT CHECK (type IN ('image', 'design', 'logo', 'video')),
  year TEXT,
  month TEXT,
  link TEXT,
  description TEXT,
  file_url TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  shares INTEGER DEFAULT 0,
  created_by TEXT,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Bảng lịch sử thao tác
CREATE TABLE IF NOT EXISTS audit_log (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  action TEXT NOT NULL,
  description TEXT,
  username TEXT,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- 2. TẠO INDEXES (Tối ưu tìm kiếm)
-- ============================================

CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_status ON users(status);

CREATE INDEX idx_members_term ON members(term);
CREATE INDEX idx_members_name ON members(name);
CREATE INDEX idx_members_position ON members(position);
CREATE INDEX idx_members_active ON members(active);

CREATE INDEX idx_works_status ON works(status);
CREATE INDEX idx_works_deadline ON works(deadline);
CREATE INDEX idx_works_assignee ON works(assignee);
CREATE INDEX idx_works_type ON works(type);
CREATE INDEX idx_works_created_at ON works(created_at);

CREATE INDEX idx_media_year_month ON media(year, month);
CREATE INDEX idx_media_type ON media(type);
CREATE INDEX idx_media_category ON media(category);

CREATE INDEX idx_content_status ON content(status);
CREATE INDEX idx_content_year_month ON content(year, month);
CREATE INDEX idx_content_type ON content(type);

CREATE INDEX idx_audit_username ON audit_log(username);
CREATE INDEX idx_audit_created_at ON audit_log(created_at);

-- ============================================
-- 3. TẠO FUNCTIONS (Tự động cập nhật)
-- ============================================

-- Function tự động cập nhật updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- 4. TẠO TRIGGERS
-- ============================================

-- Trigger cho bảng users
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger cho bảng members
CREATE TRIGGER update_members_updated_at
  BEFORE UPDATE ON members
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger cho bảng works
CREATE TRIGGER update_works_updated_at
  BEFORE UPDATE ON works
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger cho bảng media
CREATE TRIGGER update_media_updated_at
  BEFORE UPDATE ON media
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger cho bảng content
CREATE TRIGGER update_content_updated_at
  BEFORE UPDATE ON content
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 5. CHÈN DỮ LIỆU MẪU
-- ============================================

-- Chèn tài khoản admin mặc định
INSERT INTO users (username, password, email, role, full_name, phone, status)
VALUES 
  ('admin', 'admin123', 'admin@bantruyenthong.com', 'truongBan', 'Nguyễn Văn Admin', '0901234567', 'active'),
  ('phoban', 'phoban123', 'phoban@bantruyenthong.com', 'phoBan', 'Trần Thị Phó Ban', '0907654321', 'active'),
  ('thanhvien', 'user123', 'thanhvien@bantruyenthong.com', 'user', 'Lê Văn Thành Viên', '0912345678', 'active')
ON CONFLICT (username) DO NOTHING;

-- Chèn thành viên BĐH mẫu
INSERT INTO members (name, position, email, phone, birth_year, birthday, gender, parish, address, term, active)
VALUES 
  ('Nguyễn Văn A', 'Trưởng Ban', 'nguyenvana@gmail.com', '0901111111', 1998, '1998-05-15', 'male', 'Giáo xứ Thánh Tâm', 'Quận 1, TP.HCM', '2023-2026', true),
  ('Trần Thị B', 'Phó Ban', 'tranthib@gmail.com', '0902222222', 1999, '1999-08-20', 'female', 'Giáo xứ Thánh Tâm', 'Quận 3, TP.HCM', '2023-2026', true),
  ('Lê Văn C', 'Thư ký', 'levanc@gmail.com', '0903333333', 2000, '2000-12-10', 'male', 'Giáo xứ Thánh Tâm', 'Quận 5, TP.HCM', '2023-2026', true),
  ('Phạm Thị D', 'Trưởng Ban', 'phamthid@gmail.com', '0904444444', 2001, '2001-03-25', 'female', 'Giáo xứ Thánh Tâm', 'Quận 7, TP.HCM', '2026-2029', true),
  ('Hoàng Văn E', 'Phó Ban', 'hoangvane@gmail.com', '0905555555', 2002, '2002-07-18', 'male', 'Giáo xứ Thánh Tâm', 'Quận 10, TP.HCM', '2026-2029', true);

-- Chèn công việc mẫu
INSERT INTO works (name, type, assign_date, deadline, time, assignee, status, goal, note, priority, created_by)
VALUES 
  ('Họp Ban định kỳ tháng 11', 'Họp Ban', '2024-11-01', '2024-11-30', '19:00', 'Trưởng Ban', 'inprogress', 'Đánh giá công việc tháng 11', 'Tất cả thành viên BĐH tham gia', 'high', 'admin'),
  ('Livestream Thánh lễ Chúa Nhật', 'Livestream', '2024-11-20', '2024-11-24', '09:00', 'Nhóm Livestream', 'pending', 'Livestream Thánh lễ cho giáo dân', 'Kiểm tra thiết bị trước 30 phút', 'high', 'admin'),
  ('Thiết kế poster Giáng Sinh 2024', 'Content đăng bài', '2024-11-15', '2024-12-01', '', 'Nhóm Content', 'inprogress', 'Tạo poster chào mừng Giáng Sinh', 'Concept: ấm áp, gia đình', 'high', 'admin');

-- ============================================
-- 6. TẮT ROW LEVEL SECURITY (Chỉ để TEST)
-- ⚠️ BẬT LẠI KHI PRODUCTION!
-- ============================================

ALTER TABLE users DISABLE ROW LEVEL SECURITY;
ALTER TABLE members DISABLE ROW LEVEL SECURITY;
ALTER TABLE works DISABLE ROW LEVEL SECURITY;
ALTER TABLE media DISABLE ROW LEVEL SECURITY;
ALTER TABLE content DISABLE ROW LEVEL SECURITY;
ALTER TABLE audit_log DISABLE ROW LEVEL SECURITY;

-- ============================================
-- 7. TẠO ROW LEVEL SECURITY POLICIES (Bảo mật)
-- ⚠️ Uncomment phần này khi production
-- ============================================

/*
-- Bật RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE works ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE content ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

-- Policy cho users (chỉ admin mới thấy tất cả)
CREATE POLICY users_select_policy ON users
  FOR SELECT
  USING (auth.uid() IS NOT NULL);

CREATE POLICY users_insert_policy ON users
  FOR INSERT
  WITH CHECK (auth.jwt() ->> 'role' = 'truongBan');

CREATE POLICY users_update_policy ON users
  FOR UPDATE
  USING (auth.jwt() ->> 'role' = 'truongBan');

CREATE POLICY users_delete_policy ON users
  FOR DELETE
  USING (auth.jwt() ->> 'role' = 'truongBan');

-- Policy cho members (tất cả xem được, chỉ admin/phoBan sửa)
CREATE POLICY members_select_policy ON members
  FOR SELECT
  USING (auth.uid() IS NOT NULL);

CREATE POLICY members_insert_policy ON members
  FOR INSERT
  WITH CHECK (auth.jwt() ->> 'role' IN ('truongBan', 'phoBan'));

CREATE POLICY members_update_policy ON members
  FOR UPDATE
  USING (auth.jwt() ->> 'role' IN ('truongBan', 'phoBan'));

CREATE POLICY members_delete_policy ON members
  FOR DELETE
  USING (auth.jwt() ->> 'role' = 'truongBan');

-- Policy cho works (tất cả xem được, có quyền mới sửa)
CREATE POLICY works_select_policy ON works
  FOR SELECT
  USING (auth.uid() IS NOT NULL);

CREATE POLICY works_insert_policy ON works
  FOR INSERT
  WITH CHECK (auth.jwt() ->> 'role' IN ('truongBan', 'phoBan'));

CREATE POLICY works_update_policy ON works
  FOR UPDATE
  USING (
    auth.jwt() ->> 'role' IN ('truongBan', 'phoBan') OR
    assignee = auth.jwt() ->> 'username'
  );

CREATE POLICY works_delete_policy ON works
  FOR DELETE
  USING (auth.jwt() ->> 'role' = 'truongBan');

-- Policy cho media
CREATE POLICY media_select_policy ON media
  FOR SELECT
  USING (auth.uid() IS NOT NULL);

CREATE POLICY media_insert_policy ON media
  FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY media_update_policy ON media
  FOR UPDATE
  USING (uploaded_by = auth.jwt() ->> 'username' OR auth.jwt() ->> 'role' IN ('truongBan', 'phoBan'));

CREATE POLICY media_delete_policy ON media
  FOR DELETE
  USING (uploaded_by = auth.jwt() ->> 'username' OR auth.jwt() ->> 'role' = 'truongBan');

-- Policy cho content
CREATE POLICY content_select_policy ON content
  FOR SELECT
  USING (auth.uid() IS NOT NULL);

CREATE POLICY content_insert_policy ON content
  FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY content_update_policy ON content
  FOR UPDATE
  USING (created_by = auth.jwt() ->> 'username' OR auth.jwt() ->> 'role' IN ('truongBan', 'phoBan'));

CREATE POLICY content_delete_policy ON content
  FOR DELETE
  USING (created_by = auth.jwt() ->> 'username' OR auth.jwt() ->> 'role' = 'truongBan');

-- Policy cho audit_log (chỉ xem, không sửa xóa)
CREATE POLICY audit_select_policy ON audit_log
  FOR SELECT
  USING (auth.jwt() ->> 'role' IN ('truongBan', 'phoBan'));

CREATE POLICY audit_insert_policy ON audit_log
  FOR INSERT
  WITH CHECK (true);
*/

-- ============================================
-- 8. TẠO VIEWS (Báo cáo)
-- ============================================

-- View thống kê công việc
CREATE OR REPLACE VIEW work_statistics AS
SELECT 
  COUNT(*) as total_works,
  COUNT(*) FILTER (WHERE status = 'completed') as completed_works,
  COUNT(*) FILTER (WHERE status = 'inprogress') as inprogress_works,
  COUNT(*) FILTER (WHERE status = 'pending') as pending_works,
  COUNT(*) FILTER (WHERE deadline < CURRENT_DATE AND status != 'completed') as overdue_works
FROM works;

-- View thống kê thành viên theo nhiệm kỳ
CREATE OR REPLACE VIEW member_statistics AS
SELECT 
  term,
  COUNT(*) as total_members,
  COUNT(*) FILTER (WHERE active = true) as active_members,
  COUNT(*) FILTER (WHERE gender = 'male') as male_members,
  COUNT(*) FILTER (WHERE gender = 'female') as female_members
FROM members
GROUP BY term;

-- View sinh nhật sắp tới
CREATE OR REPLACE VIEW upcoming_birthdays AS
SELECT 
  id,
  name,
  position,
  birthday,
  EXTRACT(DAY FROM birthday) as day,
  EXTRACT(MONTH FROM birthday) as month,
  DATE_PART('day', 
    DATE(EXTRACT(YEAR FROM CURRENT_DATE) || '-' || EXTRACT(MONTH FROM birthday) || '-' || EXTRACT(DAY FROM birthday)) - CURRENT_DATE
  ) as days_until
FROM members
WHERE 
  active = true 
  AND birthday IS NOT NULL
  AND DATE_PART('day', 
    DATE(EXTRACT(YEAR FROM CURRENT_DATE) || '-' || EXTRACT(MONTH FROM birthday) || '-' || EXTRACT(DAY FROM birthday)) - CURRENT_DATE
  ) BETWEEN 0 AND 7
ORDER BY days_until;

-- ============================================
-- 9. TẠO FUNCTIONS (Báo cáo & Thống kê)
-- ============================================

-- Function lấy công việc theo tháng
CREATE OR REPLACE FUNCTION get_works_by_month(p_year INTEGER, p_month INTEGER)
RETURNS TABLE (
  id BIGINT,
  name TEXT,
  type TEXT,
  deadline DATE,
  status TEXT,
  assignee TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT w.id, w.name, w.type, w.deadline, w.status, w.assignee
  FROM works w
  WHERE 
    EXTRACT(YEAR FROM w.deadline) = p_year
    AND EXTRACT(MONTH FROM w.deadline) = p_month
  ORDER BY w.deadline;
END;
$$ LANGUAGE plpgsql;

-- Function đếm hoạt động theo user
CREATE OR REPLACE FUNCTION get_user_activity_count(p_username TEXT)
RETURNS INTEGER AS $$
DECLARE
  activity_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO activity_count
  FROM audit_log
  WHERE username = p_username
  AND created_at >= CURRENT_DATE - INTERVAL '30 days';
  
  RETURN activity_count;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- 10. SAO LƯU & KHÔI PHỤC
-- ============================================

-- Function sao lưu dữ liệu (export to JSON)
CREATE OR REPLACE FUNCTION backup_all_data()
RETURNS JSON AS $$
DECLARE
  backup_data JSON;
BEGIN
  SELECT json_build_object(
    'users', (SELECT json_agg(row_to_json(u.*)) FROM users u),
    'members', (SELECT json_agg(row_to_json(m.*)) FROM members m),
    'works', (SELECT json_agg(row_to_json(w.*)) FROM works w),
    'media', (SELECT json_agg(row_to_json(md.*)) FROM media md),
    'content', (SELECT json_agg(row_to_json(c.*)) FROM content c),
    'backup_date', NOW()
  ) INTO backup_data;
  
  RETURN backup_data;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- HOÀN TẤT!
-- ============================================

-- Hiển thị thông báo
DO $$
BEGIN
  RAISE NOTICE '✅ Database setup completed successfully!';
  RAISE NOTICE '📊 Tables created: users, members, works, media, content, audit_log';
  RAISE NOTICE '🔑 Indexes created for performance optimization';
  RAISE NOTICE '🛡️ Triggers created for auto-update';
  RAISE NOTICE '👤 Sample data inserted';
  RAISE NOTICE '⚠️ RLS is DISABLED for testing. Enable it for production!';
END $$;