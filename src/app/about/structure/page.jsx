"use client";
import React from "react";

const orgData = {
  title: "ДАРГА",
  departments: [
    {
      name: "ЗАХИРГАА, САНХҮҮГИЙН ХЭЛТЭС",
      roles: [
        {
          title: "ЗАХИРГАА, ХҮНИЙ НӨӨЦИЙН АХЛАХ МЭРГЭЖИЛТЭН",
          subRoles: [
            "МЭДЭЭЛЭЛ ЛАВЛАГААНЫ АЖИЛТАН - 2",
            "АРХИВ, БИЧИГ ХЭРГИЙН АЖИЛТАН",
            "ҮЙЛЧЛЭГЧ",
          ],
        },
        { title: "ЕРӨНХИЙ НЯГТЛАН БОДОГЧ", subRoles: ["НЯРАВ"] },
      ],
    },
    {
      name: "ИНЖЕНЕР, ТЕХНИКИЙН ХЭЛТЭС",
      roles: [
        {
          title: "СҮЛЖЭЭНИЙ ИНЖЕНЕР",
          subRoles: ["СҮЛЖЭЭНИЙ ТЕХНИКЧ - 2", "ЦАХИЛГААНЧИН", "ЖОЛООЧ"],
        },
        { title: "СИСТЕМИЙН ИНЖЕНЕР", subRoles: [] },
        { title: "ХӨДӨЛМӨРИЙН АЮУЛГҮЙ БАЙДЛЫН МЭРГЭЖИЛТЭН", subRoles: [] },
      ],
    },
  ],
};

const OrgChartNode = ({ title, children, color = "green-400" }) => (
  <div className="flex flex-col items-center">
    <div
      className={`bg-${color} rounded-md p-4 shadow-md min-w-[180px] text-center`}
    >
      <div className="text-white font-bold">{title}</div>
    </div>
    {children && <div className="flex mt-4 gap-4">{children}</div>}
  </div>
);

const page = () => {
  return (
    <div className="p-6 overflow-x-auto">
      <OrgChartNode title={orgData.title}>
        {orgData.departments.map((dept, idx) => (
          <OrgChartNode
            key={idx}
            title={dept.name}
            color="green-600"
          >
            {dept.roles.map((role, rIdx) => (
              <OrgChartNode
                key={rIdx}
                title={role.title}
                color="blue-500"
              >
                {role.subRoles.length > 0 && (
                  <div className="flex flex-col mt-2 gap-2">
                    {role.subRoles.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-blue-300 p-2 rounded text-center shadow-sm min-w-[160px]"
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
              </OrgChartNode>
            ))}
          </OrgChartNode>
        ))}
      </OrgChartNode>
    </div>
  );
};

export default page;
