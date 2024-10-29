import { getInformation } from '@/utils/sanity'

import { ChannelSectionLayout } from './ChannelSectionLayout'

export const ChannelSection = async () => {
  const { channel, links } = await getInformation()
  return <>{links.telegram_url && <ChannelSectionLayout channel={channel} links={links} />}</>
}
