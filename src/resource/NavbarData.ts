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
  { id: 2, label: "สื่อการเรียนรู้", href: "/", pathCheck: "/" },
  { id: 3, label: "แผนการสอบ", href: "/", pathCheck: "/" },
  { id: 4, label: "แบบทดสอบ", href: "/", pathCheck: "/" },
  { id: 5, label: "ติดต่อเรา", href: "/", pathCheck: "/" },
];
