import { defineType, defineField } from 'sanity'

const questionServicesSchema = defineType({
  name: 'questionServices',
  title: 'Найчастіші запитання (послуги)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Питання',
      type: 'string',
      validation: (rule) => [
        rule.required().error('Поле "Питання" обов\'язкове!'),
        rule.min(5).error('Дане поле має бути більше 5 символів!'),
        rule.max(25).error('Дане поле має бути менше 25 символів!'),
      ],
    }),
    defineField({
      name: 'answer',
      title: 'Відповідь',
      type: 'string',
      validation: (rule) => [
        rule.required().error('Поле "Відповідь" обов\'язкове!'),
        rule.min(20).error('Дане поле має бути більше 20 символів'),
        rule.max(150).error('Дане поле має бути менше 150 символів!'),
      ],
    }),
  ],
})

export default questionServicesSchema
