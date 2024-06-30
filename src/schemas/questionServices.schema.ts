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
        rule.max(75).error('Дане поле має бути менше 75 символів!'),
      ],
    }),
    defineField({
      name: 'answer',
      title: 'Відповідь',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required().error('Поле "Відповідь" обов\'язкове!'),
    }),
  ],
})

export default questionServicesSchema
