const nameField = (title, name) => ({
  title,
  name,
  type: "string",
});

const dateField = (title, name, options) => ({
  title,
  name,
  type: "date",
  options,
});

const numberField = (title, name) => ({
  title,
  name,
  type: "number",
})


export default {
  title: "교육예약",
  name: "education",
  type: "document",
  fields: [
    nameField("교육이름", "eduName"),
    dateField("교육 시작일", "eduStartDate", {
      dateFormat: "YYYY-MM-DD",
      calendarTodayLabel: "Today",
    }),
    dateField("교육 종료일", "eduEndDate"),
    nameField("교육 종류", "eduType"),
    nameField("교육 정원", "count"),
    nameField("교육 금액", "money"),
    {
      title: "참가자 정보",
      name: "eduUsersInfo",
      type: "array",
      of: [{
        type: "object",
        name: "userInfo",
        fields: [
          nameField("대표참가자", "name"),
          nameField("회사/단체명", "companyName"),
          nameField("이메일", "email"),
          nameField("연락처", "phone"),
          nameField("수강금액", "totalMoney"),
          numberField('참가인원','eduCount'),
          {
            title: "참가자 명단",
            name: "eduNames",
            type: "array",
            of: [
              {
                type: "object",
                name: "eduName",
                fields: [
                  nameField("참가자 이름", "name"),
                  nameField("참가자 연락처", "phone"),
                  nameField("이전 교육 수강명", "eduSecondName"),
                  nameField("메모", "memo"),
                ],
              },
            ],
            preview: {
              select: {
                title: "name",
                subtitle: "companyName",
              },
            },
          },
        ],
      }],

    },
  ],
  preview: {
    select: {
      title: "eduName",
      subtitle: "eduStartDate",
    },
  },
};