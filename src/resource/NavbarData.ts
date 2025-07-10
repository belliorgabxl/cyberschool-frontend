interface NavbarProps {
  id: number;
  label: string;
  href: string;
  pathCheck: string;
}

export const NavBarData: NavbarProps[] = [
  {
    id: 1,
    label: "หน้าแรก",
    href: "/",
    pathCheck: "/",
  },
  { id: 2, label: "กิจกรรมการเรียนรู้", href: "/cybersafekids-events", pathCheck: "/cybersafekids-events" },
  { id: 3, label: "ความรู้สำหรับครูผู้สอน", href: "/teacher", pathCheck: "/" },
  { id: 4, label: "แนะนำโปรแกรมการเรียนรู้", href: "/suggest", pathCheck: "/practices" },
  { id: 5, label: "ติดต่อเรา", href: "/cybersafekids-contact", pathCheck: "/cybersafekids-contact" },
];
