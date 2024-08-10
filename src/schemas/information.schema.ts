import { defineType, defineField } from 'sanity'

const informationSchema = defineType({
  name: 'information',
  title: 'Інформація',
  type: 'document',
  groups: [
    {
      name: 'main',
      title: 'Основні поля',
      default: true,
    },
    {
      name: 'links',
      title: 'Посилання',
    },
    {
      name: 'channel',
      title: 'Інформація про канал в Telegram',
    },
    {
      name: 'administrative',
      title: 'Адміністративні поля',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: "Ім'я",
      type: 'string',
      validation: rule => [
        rule.required().error('Поле "Ім\'я" обов\'язкове!'),
        rule.min(5).error('Дане поле має бути більше 5 символів!'),
        rule.max(25).error('Дане поле має бути менше 25 символів!'),
      ],
      group: 'main',
    }),
    defineField({
      name: 'description',
      title: 'Опис',
      type: 'text',
      validation: rule => [
        rule.required().error('Поле "Опис" обов\'язкове!'),
        rule.min(20).error('Дане поле має бути більше 20 символів'),
        rule.max(400).error('Дане поле має бути менше 400 символів!'),
      ],
      group: 'main',
    }),
    defineField({
      name: 'image',
      title: 'Головне фото',
      type: 'image',
      options: { hotspot: true },
      validation: rule => rule.required().assetRequired().error('Поле "Головне фото" обов\'язкове!'),
      fields: [
        defineField({
          name: 'alt',
          title: 'Альтернативний текст на випадок помилки завантаження фото',
          type: 'string',
          validation: rule => rule.required().error('Поле "Альтернативний текст" обов\'язкове!'),
        }),
      ],
      group: 'main',
    }),
    defineField({
      name: 'telegram',
      title: 'Посилання на Telegram',
      type: 'url',
      group: 'channel',
    }),
    defineField({
      name: 'youtube',
      title: 'Посилання на YouTube',
      type: 'url',
      group: 'links',
    }),
    defineField({
      name: 'instagram',
      title: 'Посилання на Instagram',
      type: 'url',
      group: 'links',
    }),
    defineField({
      name: 'tiktok',
      title: 'Посилання на TikTok',
      type: 'url',
      group: 'links',
    }),
    defineField({
      name: 'telegram_name',
      title: 'Назва каналу в Telegram',
      type: 'string',
      group: 'channel',
    }),
    defineField({
      name: 'telegram_description',
      title: 'Опис каналу в Telegram',
      type: 'text',
      group: 'channel',
    }),
    defineField({
      name: 'telegram_image',
      title: 'Фото для каналу в Telegram',
      description:
        'Фотографія, що буде використана в якості фонового зображення для секції з інформацію про канал в Telegram',
      type: 'image',
      options: { hotspot: true },
      validation: rule => rule.required().assetRequired().error('Поле "Головне фото" обов\'язкове!'),
      fields: [
        defineField({
          name: 'alt',
          title: 'Альтернативний текст на випадок помилки завантаження фото',
          type: 'string',
          validation: rule => rule.required().error('Поле "Альтернативний текст" обов\'язкове!'),
        }),
      ],
      group: 'channel',
    }),
    defineField({
      name: 'copyright',
      title: 'Текст копірайту у футері сайту',
      type: 'string',
      group: 'administrative',
    }),
  ],
})

export default informationSchema
