import { defineType, defineField } from 'sanity'

const categorySchema = defineType({
  name: 'category',
  title: 'Категорії',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Назва категорії',
      type: 'string',
      validation: rule => [
        rule.required().error('Поле "Назва категорії" обов\'язкове!'),
        rule.min(5).error('Дане поле має бути більше 5 символів!'),
        rule.max(40).error('Дане поле має бути менше 40 символів!'),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Акронімічне посилання (slug)',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: rule => rule.required().error('Поле "Акронімічне посилання (slug)" обов\'язкове!'),
    }),
  ],
})

export default categorySchema
