export default {
  name: 'user',
  title: '유저',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: '이름',
      description: '이름은 필수입니다.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: '이메일',
      description: '이메일은 필수입니다.',
      type: 'text',
      rows: 1,
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'portrait',
      title: '프로필 사진',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
