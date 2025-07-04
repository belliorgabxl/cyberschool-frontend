import { Coins, ShieldAlert, Bug, CreditCard, Lock } from "lucide-react";

export const TopicData = [
  {
    topic: "ภัยคุกคามทางการเงิน",
    description: "การเกิดภัยคุกคามนั้นเพราะว่า บริการการเงินออนไลน์มีช่องโหว่ที่ผู้ไม่หวังดีสามารถโจมตีได้",
    icon: <Coins className="w-6 h-6" />,
    amount: 10,
  },
  {
    topic: "การหลอกลวงทางไซเบอร์",
    description: "การฟิชชิ่งอีเมลและเว็บไซต์ปลอมมักถูกใช้เพื่อล้วงข้อมูลส่วนตัวจากเหยื่อ",
    icon: <ShieldAlert className="w-6 h-6" />,
    amount: 7,
  },
  {
    topic: "มัลแวร์และไวรัส",
    description: "มัลแวร์สามารถติดตั้งในเครื่องคอมพิวเตอร์และขโมยข้อมูลสำคัญของคุณได้",
    icon: <Bug className="w-6 h-6" />,
    amount: 12,
  },
  {
    topic: "การโจมตีด้วยบัตรเครดิต",
    description: "แฮกเกอร์สามารถดักจับข้อมูลบัตรเครดิตจากร้านค้าออนไลน์ที่ไม่ปลอดภัย",
    icon: <CreditCard className="w-6 h-6" />,
    amount: 5,
  },
  {
    topic: "การขโมยตัวตน",
    description: "ผู้ไม่หวังดีอาจขโมยข้อมูลส่วนตัวของคุณเพื่อใช้สมัครบริการต่าง ๆ โดยไม่รับอนุญาต",
    icon: <Lock className="w-6 h-6" />,
    amount: 8,
  },
];
