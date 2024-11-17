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
      validation: rule => [
        rule.required().error('Поле "Назва послуги" обов\'язкове!'),
        rule.min(5).error('Дане поле має бути більше 5 символів!'),
        rule.max(40).error('Дане поле має бути менше 40 символів!'),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Опис послуги',
      type: 'text',
      rows: 5,
      validation: rule => [
        rule.required().error('Поле "Опис послуги" обов\'язкове!'),
        rule.min(50).error('Дане поле має бути більше 50 символів!'),
      ],
    }),
    defineField({
      name: 'questionServices',
      title: 'Найчастіші запитання',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'questionServices' }] }],
      validation: rule => rule.required().error('Поле "Найчастіші запитання" обов\'язкове!'),
    }),
    defineField({
      name: 'duration',
      title: 'Тривалість',
      type: 'string',
      validation: rule => [
        rule.required().error('Поле "Тривалість" обов\'язкове!'),
        rule.max(120).error('Дане поле має бути менше 120 символів!'),
      ],
    }),
    defineField({
      name: 'price',
      title: 'Вартість послуги (в євро)',
      type: 'number',
      validation: rule => rule.required().error('Поле "Вартість послуги" обов\'язкове!'),
    }),
    defineField({
      name: 'link',
      title: 'Call-To-Action (посилання)',
      type: 'url',
      validation: rule => rule.required().error('Поле "Call-To-Action" обов\'язкове!'),
    }),
    defineField({
      name: 'image',
      title: 'Фотографія послуги',
      type: 'image',
      options: { hotspot: true },
      validation: rule => rule.required().error('Поле "Фотографія послуги" обов\'язкове!'),
      fields: [
        defineField({
          name: 'alt',
          title: 'Альтернативний текст на випадок помилки завантаження фото',
          type: 'string',
          validation: rule => rule.required().error('Поле "Альтернативний текст" обов\'язкове!'),
        }),
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Категорії',
      description: 'Категорії, в яких буде відображатися послуга',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      validation: rule => rule.required().error('Поле "Категорії" обов\'язкове!'),
    }),
  ],
})

export default serviceSchema
