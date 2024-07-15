import { defineField, defineType } from 'sanity'

const reviewSchema = defineType({
  name: 'review',
  title: 'Відгуки',
  type: 'document',
  groups: [
    {
      name: 'personGroup',
      title: 'Людина, що залишає відгук',
      default: true,
    },
    {
      name: 'reviewGroup',
      title: 'Відгук',
    },
  ],
  fields: [
    defineField({
      name: 'personName',
      title: "Ім'я",
      description: "Ім'я людини, що залишає відгук",
      type: 'string',
      validation: rule => rule.required().error('Поле "Ім\'я" обов\'язкове!'),
      group: 'personGroup',
    }),
    defineField({
      name: 'personPosition',
      title: 'Посада',
      description: "Приклад: 'Frontend Developer в Google'",
      type: 'string',
      validation: rule => [
        rule.required().error('Поле "Посада" обов\'язкове!'),
        rule.max(25).error('Дане поле має бути менше 25 символів!'),
      ],
      group: 'personGroup',
    }),
    defineField({
      name: 'personAvatar',
      title: 'Фотографія людини',
      description: 'Фотографія людини, що залишає відгук',
      type: 'image',
      validation: rule => rule.required().assetRequired().error('Поле "Посада" обов\'язкове!'),
      group: 'personGroup',
      fields: [
        defineField({
          name: 'alt',
          title: 'Альтернативний текст',
          type: 'string',
          validation: rule => rule.required().error('Поле "Альтернативний текст" обов\'язкове!'),
        }),
      ],
    }),
    defineField({
      name: 'reviewType',
      title: 'Тип відгуку',
      type: 'string',
      options: {
        list: [
          { value: 'audio', title: 'Аудіо відгук' },
          { value: 'video', title: 'Відео відгук' },
          { value: 'text', title: 'Текстовий відгук' },
        ],
        layout: 'radio',
      },
      validation: rule => rule.required().error('Поле "Тип відгуку" обов\'язкове!'),
      group: 'reviewGroup',
    }),
    defineField({
      name: 'duration',
      title: 'Тривалість відгуку',
      type: 'string',
      validation: rule => [
        rule.required().error('Поле "Тривалість" обов\'язкове!'),
        rule.max(35).error('Дане поле має бути менше 35 символів!'),
      ],
      group: 'reviewGroup',
    }),
    defineField({
      name: 'reviewAsset',
      title: 'Медіа-файл відгуку',
      type: 'file',
      options: {
        accept: 'video/mp4, audio/mp3, audio/ogg',
      },
      validation: rule => rule.required().assetRequired().error('Поле "Медіа-файл відгуку" обов\'язкове!'),
      group: 'reviewGroup',
    }),
    defineField({
      name: 'reviewSlogan',
      title: 'Слоган відгуку',
      description:
        "Необов'язкове поле. Головна частина відгуку, що зачепить користувача, що досліджує веб-сайт і переглядає відгуки",
      type: 'string',
      validation: rule => rule.max(55).error('Дане поле має бути менше 55 символів!'),
      group: 'reviewGroup',
    }),
    defineField({
      name: 'reviewText',
      title: 'Текст-транскрипція відгуку',
      description: "Необов'язкове поле. Текст відгуку буде використовуватися в модальному віконці.",
      type: 'text',
      group: 'reviewGroup',
    }),
  ],
})

export default reviewSchema
