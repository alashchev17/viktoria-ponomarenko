import { defineType, defineField } from 'sanity'

const serviceSchema = defineType({
  name: 'service',
  title: 'Послуги',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Назва послуги',
      type: 'string',
      validation: (rule) => [
        rule.required().error('Поле "Назва послуги" обов\'язкове!'),
        rule.min(5).error('Дане поле має бути більше 5 символів!'),
        rule.max(40).error('Дане поле має бути менше 40 символів!'),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Опис послуги',
      type: 'string',
      validation: (rule) => [
        rule.required().error('Поле "Опис послуги" обов\'язкове!'),
        rule.min(25).error('Дане поле має бути більше 25 символів!'),
        rule.max(100).error('Дане поле має бути менше 100 символів!'),
      ],
    }),
    defineField({
      name: 'questions',
      title: 'Найчастіші запитання',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'question' }] }],
    }),
    defineField({
      name: 'duration',
      title: 'Тривалість',
      type: 'string',
      validation: (rule) => [
        rule.required().error('Поле "Тривалість" обов\'язкове!'),
        rule.max(35).error('Дане поле має бути менше 35 символів!'),
      ],
    }),
    defineField({
      name: 'price',
      title: 'Вартість послуги (в євро)',
      type: 'number',
      validation: (rule) => rule.required().error('Поле "Вартість послуги" обов\'язкове!'),
    }),
    defineField({
      name: 'image',
      title: 'Фотографія послуги',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required().error('Поле "Фотографія послуги" обов\'язкове!'),
      fields: [
        defineField({
          name: 'alt',
          title: 'Альтернативний текст на випадок помилки завантаження фото',
          type: 'string',
          validation: (rule) => rule.required().error('Поле "Альтернативний текст" обов\'язкове!'),
        }),
      ],
    }),
  ],
})

export default serviceSchema
