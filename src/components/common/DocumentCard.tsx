import {
  FileText,
  Download,
  Star,
  Eye,
  GraduationCap,
  Users,
  Mail,
} from "lucide-react";

export default function DocumentCard() {
  return (
    <div className="grid place-items-center lg:grid-cols-2  gap-5 w-full">
      <div className="w-full max-w-2xl mx-auto bg-blue-50 border-2 border-blue-200 rounded-lg">
        <div className="p-6">
          {" "}
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-blue-500 rounded-2xl p-3 flex-shrink-0">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-600 mb-1">หน้าหลักงานรัฐ</p>
              <h2 className="text-xl font-semibold text-slate-900 leading-tight">
                คู่มือหน่วยงานภาครัฐด้านความปลอดภัยไซเบอร์
              </h2>
            </div>
          </div>
          {/* Description */}
          <p className="text-slate-700 mb-6 leading-relaxed">
            รวบรวมข้อมูลหน่วยงานรัฐที่ให้ข้อมูลและแนวทางด้านความปลอดภัยไซเบอร์
            พร้อมรายละเอียดการติดต่อและบริการ
          </p>
          {/* Statistics */}
          <div className="grid grid-cols-4 gap-4 mb-2 py-2 rounded-lg bg-white">
            <div className="text-center">
              <FileText className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">หน้า</p>
              <p className="text-lg font-semibold text-slate-900">24</p>
            </div>
            <div className="text-center">
              <Download className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">ขนาด</p>
              <p className="text-lg font-semibold text-slate-900">2.1 MB</p>
            </div>
            <div className="text-center">
              <FileText className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">องค์กร</p>
              <p className="text-lg font-semibold text-slate-900">6</p>
            </div>
            <div className="text-center">
              <Star className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">อัปเดต</p>
              <p className="text-lg font-semibold text-slate-900">
                มกราคม 2024
              </p>
            </div>
          </div>
          {/* Content Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-blue-500" />
              <h3 className="font-medium text-slate-900">เนื้อหาในคู่มือ</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ
                  (NCSA)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  ศูนย์ประสานการรักษาความมั่นคงปลอดภัยระบบคอมพิวเตอร์แห่งชาติ
                  (ThaiCERT)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>ศูนย์ปราบปรามอาชญากรรมทางเทคโนโลยีสารสนเทศ</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-3">และอีก 3 รายการ</p>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center">
              <Download className="w-4 h-4 mr-2" />
              ดาวน์โหลด PDF
            </button>
            <button className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center">
              <Eye className="w-4 h-4 mr-2" />
              ดูตัวอย่าง
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto bg-green-50 border-2 border-green-200 rounded-lg">
        <div className="px-6 py-6">
          {" "}
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-green-500 rounded-2xl p-3 flex-shrink-0">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-600 mb-1">สถาบันการศึกษา</p>
              <h2 className="text-xl font-semibold text-slate-900 leading-tight">
                ไดเรกทอรีสถาบันการศึกษาและวิจัยไซเบอร์เซีียวริตี้
              </h2>
            </div>
          </div>
          {/* Description */}
          <p className="text-slate-700 mb-6 leading-relaxed">
            รายชื่อมหาวิทยาลัยและสถาบันที่มีงานวิจัยและหลักสูตรด้านไซเบอร์ซีเคียวริตี้
            พร้อมข้อมูลการติดต่อ
          </p>
          {/* Statistics */}
          <div className="grid grid-cols-4 gap-4 mb-2 py-2 rounded-lg bg-white">
            <div className="text-center">
              <FileText className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">หน้า</p>
              <p className="text-lg font-semibold text-slate-900">18</p>
            </div>
            <div className="text-center">
              <Download className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">ขนาด</p>
              <p className="text-lg font-semibold text-slate-900">1.8 MB</p>
            </div>
            <div className="text-center">
              <FileText className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">องค์กร</p>
              <p className="text-lg font-semibold text-slate-900">7</p>
            </div>
            <div className="text-center">
              <Star className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">อัปเดต</p>
              <p className="text-lg font-semibold text-slate-900">
                มกราคม 2024
              </p>
            </div>
          </div>
          {/* Content Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-green-500" />
              <h3 className="font-medium text-slate-900">เนื้อหาในคู่มือ</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>สถาบันบัณฑิตพัฒนบริหารศาสตร์ (NIDA)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>ศูมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>มหาวิทยาลัยเชียงใหม่ (CMU)</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-3">และอีก 3 รายการ</p>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center">
              <Download className="w-4 h-4 mr-2" />
              ดาวน์โหลด PDF
            </button>
            <button className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center">
              <Eye className="w-4 h-4 mr-2" />
              ดูตัวอย่าง
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto bg-purple-50 border-2 border-purple-200 rounded-lg">
        <div className="px-6 py-6">
          {" "}
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-purple-500 rounded-2xl p-3 flex-shrink-0">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-600 mb-1">องค์กรเอกชน</p>
              <h2 className="text-xl font-semibold text-slate-900 leading-tight">
                รายชื่อบริษัทและองค์กรเอกชนด้านไซเบอร์ซีเคียวริตี้
              </h2>
            </div>
          </div>
          {/* Description */}
          <p className="text-slate-700 mb-6 leading-relaxed">
            ข้อมูลบริษัทเอกชนที่ให้บริการและข้อมูลด้านความปลอดภัยไซเบอร์
            พร้อมรายละเอียดบริการ
          </p>
          {/* Statistics */}
          <div className="grid grid-cols-4 gap-4 mb-2 py-2 rounded-lg bg-white">
            <div className="text-center">
              <FileText className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">หน้า</p>
              <p className="text-lg font-semibold text-slate-900">18</p>
            </div>
            <div className="text-center">
              <Download className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">ขนาด</p>
              <p className="text-lg font-semibold text-slate-900">1.8 MB</p>
            </div>
            <div className="text-center">
              <FileText className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">องค์กร</p>
              <p className="text-lg font-semibold text-slate-900">7</p>
            </div>
            <div className="text-center">
              <Star className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">อัปเดต</p>
              <p className="text-lg font-semibold text-slate-900">
                มกราคม 2024
              </p>
            </div>
          </div>
          {/* Content Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-purple-500" />
              <h3 className="font-medium text-slate-900">เนื้อหาในคู่มือ</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  บริษัท ไอ-ซีเคียว จำกัด - การทดสอบและประเมินความปลอดภัย
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>บริษัท เอ็นฟอร์ซ ซีเคียว จำกัด - โซลูชันความปลอดภัย</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>บริษัท ACIS Professional Center - คำปรึกษาและบริการ</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-3">และอีก 3 รายการ</p>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center">
              <Download className="w-4 h-4 mr-2" />
              ดาวน์โหลด PDF
            </button>
            <button className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center">
              <Eye className="w-4 h-4 mr-2" />
              ดูตัวอย่าง
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto bg-orange-50 border-2 border-orange-200 rounded-lg">
        <div className="px-6 py-6">
          {" "}
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-orange-500 rounded-2xl p-3 flex-shrink-0">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-600 mb-1">สื่อและชุมชน</p>
              <h2 className="text-xl font-semibold text-slate-900 leading-tight">
                รวบรวมแหล่งข้อมูลข่าวสารและชุมชนออนไลน์ด้านความปลอดภัยไซเบอร์ที่น่าเชื่อถือ
              </h2>
            </div>
          </div>
          {/* Description */}
          <p className="text-slate-700 mb-6 leading-relaxed">
            ข้อมูลบริษัทเอกชนที่ให้บริการและข้อมูลด้านความปลอดภัยไซเบอร์
            พร้อมรายละเอียดบริการ
          </p>
          {/* Statistics */}
          <div className="grid grid-cols-4 gap-4 mb-2 py-2 rounded-lg bg-white">
            <div className="text-center">
              <FileText className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">หน้า</p>
              <p className="text-lg font-semibold text-slate-900">18</p>
            </div>
            <div className="text-center">
              <Download className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">ขนาด</p>
              <p className="text-lg font-semibold text-slate-900">1.8 MB</p>
            </div>
            <div className="text-center">
              <FileText className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">องค์กร</p>
              <p className="text-lg font-semibold text-slate-900">7</p>
            </div>
            <div className="text-center">
              <Star className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">อัปเดต</p>
              <p className="text-lg font-semibold text-slate-900">
                มกราคม 2024
              </p>
            </div>
          </div>
          {/* Content Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-orange-500" />
              <h3 className="font-medium text-slate-900">เนื้อหาในคู่มือ</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  บริษัท ไอ-ซีเคียว จำกัด - การทดสอบและประเมินความปลอดภัย
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>บริษัท เอ็นฟอร์ซ ซีเคียว จำกัด - โซลูชันความปลอดภัย</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>บริษัท ACIS Professional Center - คำปรึกษาและบริการ</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-3">และอีก 3 รายการ</p>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center">
              <Download className="w-4 h-4 mr-2" />
              ดาวน์โหลด PDF
            </button>
            <button className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center">
              <Eye className="w-4 h-4 mr-2" />
              ดูตัวอย่าง
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto bg-emerald-50 border-2 border-emerald-200 rounded-lg">
        <div className="px-6 py-6">
          {" "}
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-emerald-500 rounded-2xl p-3 flex-shrink-0">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-600 mb-1">แหล่งข้อมูลสากล</p>
              <h2 className="text-xl font-semibold text-slate-900 leading-tight">
                แหล่งข้อมูลต่างประเทศสำหรับการศึกษาไซเบอร์เซีียวริตี้
              </h2>
            </div>
          </div>
          {/* Description */}
          <p className="text-slate-700 mb-6 leading-relaxed">
            รวบรวมแหล่งข้อมูลภัยไซเบอร์สำหรับเด็กและเยาวชนจากต่างประเทศ
            ที่ครูสามารถนำไปใช้เป็นแหล่งอ้างอิง
          </p>
          {/* Statistics */}
          <div className="grid grid-cols-4 gap-4 mb-2 py-2 rounded-lg bg-white">
            <div className="text-center">
              <FileText className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">หน้า</p>
              <p className="text-lg font-semibold text-slate-900">18</p>
            </div>
            <div className="text-center">
              <Download className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">ขนาด</p>
              <p className="text-lg font-semibold text-slate-900">1.8 MB</p>
            </div>
            <div className="text-center">
              <FileText className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">องค์กร</p>
              <p className="text-lg font-semibold text-slate-900">7</p>
            </div>
            <div className="text-center">
              <Star className="w-6 h-6 text-slate-500 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-1">อัปเดต</p>
              <p className="text-lg font-semibold text-slate-900">
                มกราคม 2024
              </p>
            </div>
          </div>
          {/* Content Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-emerald-500" />
              <h3 className="font-medium text-slate-900">เนื้อหาในคู่มือ</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  บริษัท ไอ-ซีเคียว จำกัด - การทดสอบและประเมินความปลอดภัย
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>บริษัท เอ็นฟอร์ซ ซีเคียว จำกัด - โซลูชันความปลอดภัย</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>บริษัท ACIS Professional Center - คำปรึกษาและบริการ</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-3">และอีก 3 รายการ</p>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center">
              <Download className="w-4 h-4 mr-2" />
              ดาวน์โหลด PDF
            </button>
            <button className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center">
              <Eye className="w-4 h-4 mr-2" />
              ดูตัวอย่าง
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
