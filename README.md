# 🎓 MPNMJEC Attendance System

**M.P. Nachimuthu M. Jaganadhan Engineering College**
Erode-Chennimalai Rd, Erode, Tamil Nadu 638112

---

## 🌐 Live Demo
🔗 [mpnmj.vercel.app](https://mpnmj.vercel.app)

---

## 📌 Project Overview

A **mobile-friendly web application** for managing student attendance, IAT marks, and timetables for the CSE Department of MPNMJEC. Built with pure HTML, CSS, and JavaScript — powered by Firebase Realtime Database for real-time cloud sync across all devices.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Database** | Firebase Realtime Database |
| **Hosting** | Vercel |
| **Icons** | Font Awesome 6 |
| **Fonts** | Google Fonts (Inter) |

---

## ✨ Features

### 👨‍🎓 Student
- View personal attendance percentage with circular chart
- View IAT-1 and IAT-2 marks with Pass/Fail status
- View class timetable

### 👩‍🏫 Staff
- Take attendance (Morning / Afternoon sessions)
- Mark students as Present / Absent / OD
- Enter IAT-1 and IAT-2 marks for any subject
- View class timetable

### 👨‍💼 HOD
- View attendance overview by date and class
- Update class timetables
- View IAT overall report for all students

### 🏛️ Principal
- View all attendance across classes and dates
- View timetables for all years
- View IAT reports

### ⚙️ Common
- Dark Mode toggle
- Email absentee report via Gmail
- Real-time sync across all devices (Firebase)
- Mobile-first responsive design

---

## 🏫 Classes Supported

- CSE 2nd Year (51 Students)
- CSE 3rd Year
- CSE 4th Year

---

## 🔐 Login Credentials

| Role | Username | Password |
|---|---|---|
| Student | Register Number (e.g. 731724104001) | cc2cse |
| Staff | e.g. d.suganthi | 235689 |
| HOD | k.n.sivakumar | hod@cse |
| Principal | dr.ramesh | mpnmj@cse |

---

## 🔥 Firebase Structure

```
Firebase Realtime Database
├── attendance/
│   └── {date}/
│       └── {class}/
│           └── {session}/
│               └── {studentId}: { name, status, sess, date }
├── iat_marks/
│   └── {iat_year}/
│       └── {subjectCode}/
│           └── {studentId}: { name, internal, exam, subjName }
└── timetables/
    └── {class}/
        └── {Day_Hour}: { subj, staff }
```

---

## 📁 Project Structure

```
mpnmjec-attendance/
├── index.html       # Main app (Frontend + Firebase logic)
├── style.css        # Styles + Dark mode + Responsive
└── README.md        # Project documentation
```

---

## 🚀 How to Deploy

### 1. Clone / Download
```bash
git clone https://github.com/yourusername/mpnmjec-attendance.git
```

### 2. Firebase Setup
- Go to [console.firebase.google.com](https://console.firebase.google.com)
- Create project → Enable Realtime Database
- Copy your config and paste in `index.html`

### 3. Deploy to Vercel
- Push to GitHub
- Import repo in [vercel.com](https://vercel.com)
- Deploy ✅

---

## 📱 Screenshots

> Mobile-first design — works on any device!

- Login Page with Role Selection
- Student Dashboard with Attendance Chart
- Staff Attendance Taking Page
- HOD Attendance Overview
- IAT Marks Entry & Report

---

## 👨‍💻 Developer Notes

- No separate backend server needed — Firebase SDK handles all database operations directly
- Data syncs in real-time across all devices
- localStorage used only for session management and theme preference
- All passwords should be changed before production use

---

## 📄 License

This project is developed for **MPNMJEC College** internal use only.

---

## 🙏 Acknowledgements

- Firebase by Google
- Font Awesome Icons
- Vercel Hosting
- Google Fonts
  
