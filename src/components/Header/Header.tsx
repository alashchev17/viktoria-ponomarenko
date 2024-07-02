import { getInformation } from '@/utils/sanity'

export const Header = async () => {
  const title = (await getInformation()).name

  return <header>{title}</header>
}
