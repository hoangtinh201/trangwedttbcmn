const initialData = {
  "config": {
    "version": "1.0.0",
    "lastUpdate": "2024-11-26",
    "site": {
      "name": "Ban Truyền Thông",
      "shortName": "BTT",
      "description": "Giới Trẻ Bùi Chu Miền Nam",
      "logo": "assets/logo.svg",
      "favicon": "assets/logo.svg"
    },
    "organization": {
      "name": "Giới Trẻ Bùi Chu Miền Nam",
      "fullName": "Ban Truyền Thông – Giới Trẻ Bùi Chu Miền Nam",
      "email": "",
      "phone": "",
      "address": "",
      "website": ""
    },
    "theme": {
      "primaryNavy": "#1e3a8a",
      "primaryBlue": "#3b82f6",
      "accentGold": "#fbbf24",
      "bgLight": "#f8fafc",
      "bgWhite": "#ffffff",
      "textDark": "#1e293b",
      "textGray": "#64748b",
      "borderColor": "#e2e8f0",
      "success": "#10b981",
      "danger": "#ef4444",
      "warning": "#f59e0b",
      "info": "#0ea5e9"
    },
    "features": {
      "dashboard": true,
      "workManagement": true,
      "mediaLibrary": true,
      "contentManagement": true,
      "memberManagement": true,
      "userManagement": true,
      "auditLog": true,
      "settings": true,
      "notifications": true,
      "emailNotifications": true,
      "forgotPassword": true,
      "darkMode": true,
      "search": true
    },
    "settings": {
      "yearRange": {
        "start": 2024,
        "count": 7
      },
      "terms": [
        {
          "id": "2023-2026",
          "name": "Nhiệm kỳ 2023-2026",
          "startYear": 2023,
          "endYear": 2026,
          "active": false
        },
        {
          "id": "2026-2029",
          "name": "Nhiệm kỳ 2026-2029",
          "startYear": 2026,
          "endYear": 2029,
          "active": true
        }
      ],
      "workTypes": [
        "Họp Ban",
        "Lịch công tác",
        "Sinh nhật",
        "Sự kiện",
        "Deadline",
        "Content đăng bài",
        "Livestream",
        "Chương trình"
      ],
      "positions": [
        "Trưởng Ban",
        "Phó Ban",
        "Thư ký",
        "Thủ quỹ",
        "Trưởng nhóm Content",
        "Trưởng nhóm Media",
        "Trưởng nhóm Livestream",
        "Thành viên"
      ],
      "roles": {
        "truongBan": {
          "name": "Trưởng Ban",
          "permissions": [
            "all"
          ]
        },
        "phoBan": {
          "name": "Phó Ban",
          "permissions": [
            "manageStaff",
            "assignWork",
            "approveContent",
            "updateProgress",
            "uploadDocs",
            "viewCalendar"
          ]
        },
        "user": {
          "name": "Thành viên",
          "permissions": [
            "updateProgress",
            "viewCalendar",
            "viewDocs"
          ]
        }
      }
    },
    "api": {
      "useLocalStorage": true,
      "useSupabase": false,
      "supabaseUrl": "",
      "supabaseKey": "",
      "endpoints": {
        "users": "data/users.json",
        "members": "data/members.json",
        "works": "data/works.json",
        "content": "data/content.json",
        "media": "data/media.json"
      }
    },
    "email": {
      "enabled": false,
      "notifications": {
        "workCreated": true,
        "workUpdated": true,
        "workCompleted": true,
        "birthdayReminder": true,
        "deadlineReminder": true
      }
    },
    "backup": {
      "autoBackup": true,
      "backupInterval": 86400000,
      "maxBackups": 30,
      "lastBackup": null
    },
    "security": {
      "preventRightClick": true,
      "preventDevTools": true,
      "preventDownload": true,
      "sessionTimeout": 3600000,
      "maxLoginAttempts": 5,
      "passwordMinLength": 6
    },
    "ui": {
      "itemsPerPage": 20,
      "dateFormat": "DD/MM/YYYY",
      "timeFormat": "HH:mm",
      "language": "vi"
    }
  },
  "members": {
    "lastUpdate": "2024-11-26T00:00:00Z",
    "terms": {
      "2023-2026": [
        {
          "id": 1,
          "name": "Nguyễn Văn A",
          "position": "Trưởng Ban",
          "email": "nguyenvana@gmail.com",
          "phone": "0901111111",
          "birthYear": 1998,
          "birthday": "1998-05-15",
          "gender": "male",
          "parish": "Giáo xứ Thánh Tâm",
          "address": "Quận 1, TP.HCM",
          "avatar": "assets/images/members/member1.jpg",
          "active": true,
          "term": "2023-2026",
          "joinedDate": "2023-01-01",
          "bio": "Trưởng Ban nhiệm kỳ 2023-2026"
        },
        {
          "id": 2,
          "name": "Trần Thị B",
          "position": "Phó Ban",
          "email": "tranthib@gmail.com",
          "phone": "0902222222",
          "birthYear": 1999,
          "birthday": "1999-08-20",
          "gender": "female",
          "parish": "Giáo xứ Thánh Tâm",
          "address": "Quận 3, TP.HCM",
          "avatar": "assets/images/members/member2.jpg",
          "active": true,
          "term": "2023-2026",
          "joinedDate": "2023-01-01",
          "bio": "Phó Ban nhiệm kỳ 2023-2026"
        },
        {
          "id": 3,
          "name": "Lê Văn C",
          "position": "Thư ký",
          "email": "levanc@gmail.com",
          "phone": "0903333333",
          "birthYear": 2000,
          "birthday": "2000-12-10",
          "gender": "male",
          "parish": "Giáo xứ Thánh Tâm",
          "address": "Quận 5, TP.HCM",
          "avatar": "assets/images/members/member3.jpg",
          "active": true,
          "term": "2023-2026",
          "joinedDate": "2023-01-01",
          "bio": "Thư ký nhiệm kỳ 2023-2026"
        }
      ],
      "2026-2029": [
        {
          "id": 4,
          "name": "Phạm Thị D",
          "position": "Trưởng Ban",
          "email": "phamthid@gmail.com",
          "phone": "0904444444",
          "birthYear": 2001,
          "birthday": "2001-03-25",
          "gender": "female",
          "parish": "Giáo xứ Thánh Tâm",
          "address": "Quận 7, TP.HCM",
          "avatar": "assets/images/members/member4.jpg",
          "active": true,
          "term": "2026-2029",
          "joinedDate": "2026-01-01",
          "bio": "Trưởng Ban nhiệm kỳ 2026-2029"
        },
        {
          "id": 5,
          "name": "Hoàng Văn E",
          "position": "Phó Ban",
          "email": "hoangvane@gmail.com",
          "phone": "0905555555",
          "birthYear": 2002,
          "birthday": "2002-07-18",
          "gender": "male",
          "parish": "Giáo xứ Thánh Tâm",
          "address": "Quận 10, TP.HCM",
          "avatar": "assets/images/members/member5.jpg",
          "active": true,
          "term": "2026-2029",
          "joinedDate": "2026-01-01",
          "bio": "Phó Ban nhiệm kỳ 2026-2029"
        }
      ]
    }
  },
  "content": {
    "lastUpdate": "2024-11-26T00:00:00Z",
    "content": [
      {
        "id": 1,
        "title": "Poster Chúa Nhật 24 Thường Niên",
        "type": "image",
        "year": "2024",
        "month": "9",
        "link": "https://facebook.com/post123",
        "description": "Poster thông báo chương trình Chúa Nhật",
        "fileUrl": "assets/images/content/poster-cn24.jpg",
        "status": "published",
        "views": 1250,
        "likes": 89,
        "shares": 12,
        "createdBy": "Phạm Thị D",
        "createdAt": "2024-09-15T00:00:00Z",
        "publishedAt": "2024-09-18T06:00:00Z"
      },
      {
        "id": 2,
        "title": "Video Clip Thánh lễ Tạ ơn",
        "type": "design",
        "year": "2024",
        "month": "10",
        "link": "https://youtube.com/watch?v=abc123",
        "description": "Video recap Thánh lễ Tạ ơn 2024",
        "fileUrl": "assets/videos/content/taon2024.mp4",
        "status": "published",
        "views": 3420,
        "likes": 245,
        "shares": 56,
        "createdBy": "Hoàng Văn E",
        "createdAt": "2024-10-05T00:00:00Z",
        "publishedAt": "2024-10-08T18:00:00Z"
      },
      {
        "id": 3,
        "title": "Logo Ban Truyền Thông 2024",
        "type": "logo",
        "year": "2024",
        "month": "1",
        "link": "",
        "description": "Logo chính thức BTT năm 2024",
        "fileUrl": "assets/logo.svg",
        "status": "published",
        "views": 850,
        "likes": 102,
        "shares": 8,
        "createdBy": "Phạm Thị D",
        "createdAt": "2024-01-10T00:00:00Z",
        "publishedAt": "2024-01-15T00:00:00Z"
      },
      {
        "id": 4,
        "title": "Infographic Mùa Vọng",
        "type": "image",
        "year": "2024",
        "month": "11",
        "link": "https://facebook.com/post456",
        "description": "Giới thiệu về ý nghĩa Mùa Vọng",
        "fileUrl": "assets/images/content/muavong2024.jpg",
        "status": "draft",
        "views": 0,
        "likes": 0,
        "shares": 0,
        "createdBy": "admin",
        "createdAt": "2024-11-20T00:00:00Z",
        "publishedAt": null
      }
    ]
  },
  "works": {
    "lastUpdate": "2024-11-26T00:00:00Z",
    "works": [
      {
        "id": 1,
        "name": "Họp Ban định kỳ tháng 11",
        "type": "Họp Ban",
        "assign_date": "2024-11-01",
        "deadline": "2024-11-30",
        "time": "19:00",
        "assignee": "Trưởng Ban",
        "status": "inprogress",
        "goal": "Đánh giá công việc tháng 11 và lên kế hoạch tháng 12",
        "reason": "Họp định kỳ hàng tháng",
        "photographer": "",
        "videographer": "",
        "editor": "",
        "designer": "",
        "note": "Tất cả thành viên BĐH tham gia",
        "priority": "high",
        "createdBy": "admin",
        "createdAt": "2024-11-01T00:00:00Z",
        "updatedAt": "2024-11-20T10:00:00Z"
      },
      {
        "id": 2,
        "name": "Livestream Thánh lễ Chúa Nhật",
        "type": "Livestream",
        "assign_date": "2024-11-20",
        "deadline": "2024-11-24",
        "time": "09:00",
        "assignee": "Nhóm Livestream",
        "status": "pending",
        "goal": "Livestream Thánh lễ cho giáo dân theo dõi từ xa",
        "reason": "Chương trình định kỳ",
        "photographer": "Lê Văn C",
        "videographer": "Hoàng Văn E",
        "editor": "",
        "designer": "",
        "note": "Kiểm tra thiết bị trước 30 phút",
        "priority": "high",
        "createdBy": "admin",
        "createdAt": "2024-11-20T00:00:00Z",
        "updatedAt": "2024-11-20T00:00:00Z"
      },
      {
        "id": 3,
        "name": "Sinh nhật Trần Thị B",
        "type": "Sinh nhật",
        "assign_date": "2024-08-15",
        "deadline": "2024-08-20",
        "time": "",
        "assignee": "",
        "status": "completed",
        "goal": "Tổ chức sinh nhật cho thành viên",
        "reason": "Sinh nhật thành viên BĐH",
        "photographer": "",
        "videographer": "",
        "editor": "",
        "designer": "",
        "note": "Đã tổ chức thành công",
        "priority": "medium",
        "createdBy": "system",
        "createdAt": "2024-08-01T00:00:00Z",
        "updatedAt": "2024-08-20T00:00:00Z"
      },
      {
        "id": 4,
        "name": "Thiết kế poster Giáng Sinh 2024",
        "type": "Content đăng bài",
        "assign_date": "2024-11-15",
        "deadline": "2024-12-01",
        "time": "",
        "assignee": "Nhóm Content",
        "status": "inprogress",
        "goal": "Tạo poster chào mừng Giáng Sinh",
        "reason": "Mùa Giáng Sinh",
        "photographer": "",
        "videographer": "",
        "editor": "",
        "designer": "Phạm Thị D",
        "note": "Concept: ấm áp, gia đình",
        "priority": "high",
        "createdBy": "admin",
        "createdAt": "2024-11-15T00:00:00Z",
        "updatedAt": "2024-11-22T00:00:00Z"
      },
      {
        "id": 5,
        "name": "Deadline báo cáo quý 4",
        "type": "Deadline",
        "assign_date": "2024-11-01",
        "deadline": "2024-12-15",
        "time": "17:00",
        "assignee": "Thư ký",
        "status": "pending",
        "goal": "Hoàn thành báo cáo tổng kết quý 4",
        "reason": "Báo cáo định kỳ",
        "photographer": "",
        "videographer": "",
        "editor": "",
        "designer": "",
        "note": "Gửi trước 17:00 ngày 15/12",
        "priority": "high",
        "createdBy": "admin",
        "createdAt": "2024-11-01T00:00:00Z",
        "updatedAt": "2024-11-01T00:00:00Z"
      }
    ]
  },
  "media": {
    "lastUpdate": "2024-11-26T00:00:00Z",
    "media": [
      {
        "id": 1,
        "name": "Báo cáo tháng 9",
        "type": "pdf",
        "year": "2024",
        "month": "9",
        "fileUrl": "assets/media/2024/09/baocao-t9.pdf",
        "fileSize": "2.5MB",
        "category": "Báo cáo",
        "uploadedBy": "admin",
        "uploadedAt": "2024-09-30T00:00:00Z",
        "downloads": 15
      },
      {
        "id": 2,
        "name": "Hình ảnh Thánh lễ Tạ ơn",
        "type": "jpg",
        "year": "2024",
        "month": "10",
        "fileUrl": "assets/media/2024/10/taon-images.zip",
        "fileSize": "45.8MB",
        "category": "Hình ảnh",
        "uploadedBy": "Lê Văn C",
        "uploadedAt": "2024-10-10T00:00:00Z",
        "downloads": 23
      },
      {
        "id": 3,
        "name": "Video Raw Livestream 15/11",
        "type": "mp4",
        "year": "2024",
        "month": "11",
        "fileUrl": "assets/media/2024/11/livestream-1511.mp4",
        "fileSize": "1.2GB",
        "category": "Video",
        "uploadedBy": "Hoàng Văn E",
        "uploadedAt": "2024-11-15T00:00:00Z",
        "downloads": 5
      },
      {
        "id": 4,
        "name": "Template Design Poster",
        "type": "psd",
        "year": "2024",
        "month": "11",
        "fileUrl": "assets/media/2024/11/template-poster.psd",
        "fileSize": "125MB",
        "category": "Design",
        "uploadedBy": "Phạm Thị D",
        "uploadedAt": "2024-11-18T00:00:00Z",
        "downloads": 8
      },
      {
        "id": 5,
        "name": "Danh sách email giáo dân",
        "type": "xlsx",
        "year": "2024",
        "month": "1",
        "fileUrl": "assets/media/2024/01/email-list.xlsx",
        "fileSize": "156KB",
        "category": "Tài liệu",
        "uploadedBy": "admin",
        "uploadedAt": "2024-01-05T00:00:00Z",
        "downloads": 42
      }
    ]
  },
  "users": {
    "lastUpdate": "2024-11-26T00:00:00Z",
    "users": [
      {
        "id": 1,
        "username": "admin",
        "password": "admin123",
        "email": "admin@bantruyenthong.com",
        "role": "truongBan",
        "status": "active",
        "avatar": "assets/images/users/admin.jpg",
        "fullName": "Nguyễn Văn Admin",
        "phone": "0901234567",
        "lastLogin": "2024-11-26T10:00:00Z",
        "createdAt": "2024-01-01T00:00:00Z"
      },
      {
        "id": 2,
        "username": "phoban",
        "password": "phoban123",
        "email": "phoban@bantruyenthong.com",
        "role": "phoBan",
        "status": "active",
        "avatar": "assets/images/users/phoban.jpg",
        "fullName": "Trần Thị Phó Ban",
        "phone": "0907654321",
        "lastLogin": "2024-11-25T15:30:00Z",
        "createdAt": "2024-01-01T00:00:00Z"
      },
      {
        "id": 3,
        "username": "thanhvien",
        "password": "user123",
        "email": "thanhvien@bantruyenthong.com",
        "role": "user",
        "status": "active",
        "avatar": "assets/images/users/user.jpg",
        "fullName": "Lê Văn Thành Viên",
        "phone": "0912345678",
        "lastLogin": "2024-11-24T09:00:00Z",
        "createdAt": "2024-02-01T00:00:00Z"
      }
    ]
  }
};