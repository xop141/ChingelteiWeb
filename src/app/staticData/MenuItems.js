import { Home, FileText, BarChart2, Eye, Book } from "lucide-react";

 const menuItems = [
    {
      label: "Эхлэл",
      href: "/home",
      icon: <Home className="w-12 h-12 mb-2" />,
    },
    {
      label: "Мэдээ",
      href: "/news",
      icon: <FileText className="w-12 h-12 mb-2" />,
    },
    {
      label: "Статистик",
      href: "/statistics",
      icon: <BarChart2 className="w-12 h-12 mb-2" />,
    },
    {
      label: "Ил тод байдал",
      href: "/transparency",
      icon: <Eye className="w-12 h-12 mb-2" />,
    },
    {
      label: "Хууль, эрх зүй",
      href: "/law",
      icon: <Book className="w-12 h-12 mb-2" />,
    },
  ];
export default menuItems;