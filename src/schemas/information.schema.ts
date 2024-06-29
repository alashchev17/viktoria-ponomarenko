import { defineType, defineField } from 'sanity'

const informationSchema = defineType({
  name: 'information',
  title: 'Інформація',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: "Ім'я",
      type: 'string',
      validation: (rule) => [
        rule.required().error('Поле "Ім\'я" обов\'язкове!'),
        rule.min(5).error('Дане поле має бути більше 5 символів!'),
        rule.max(25).error('Дане поле має бути менше 25 символів!'),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Опис',
      type: 'string',
      validation: (rule) => [
        rule.required().error('Поле "Опис" обов\'язкове!'),
        rule.min(20).error('Дане поле має бути більше 20 символів'),
        rule.max(150).error('Дане поле має бути менше 150 символів!'),
      ],
    }),
    defineField({
      name: 'image',
      title: 'Головне фото',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required().error('Поле "Головне фото" обов\'язкове!'),
      fields: [
        defineField({
          name: 'alt',
          title: 'Альтернативний текст на випадок помилки завантаження фото',
          type: 'string',
          validation: (rule) => rule.required().error('Поле "Альтернативний текст" обов\'язкове!'),
        }),
      ],
    }),
    defineField({
      name: 'telegram',
      title: 'Посилання на Telegram',
      type: 'url',
    }),
    defineField({
      name: 'youtube',
      title: 'Посилання на YouTube',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Посилання на Instagram',
      type: 'url',
    }),
    defineField({
      name: 'tiktok',
      title: 'Посилання на TikTok',
      type: 'url',
    }),
  ],
})

export default informationSchema
