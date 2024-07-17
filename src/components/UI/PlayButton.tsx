import { PlayIcon } from '@/components/Icons/PlayIcon'

export const PlayButton = () => {
  return (
    <button className="w-[120px] h-[120px] inline-flex justify-center items-center bg-white bg-opacity-50 rounded-full">
      <PlayIcon width={37} height={49} className="ml-[6px]" />
    </button>
  )
}
