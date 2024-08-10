type CloseButtonProps = {
  handleClose: () => void
  bgColor?: string
}

export const CloseButton = ({ handleClose, bgColor = '' }: CloseButtonProps) => {
  return (
    <button onClick={handleClose} className="relative w-[20px] h-[20px]">
      <span
        className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[2px] h-[25.93px] rotate-45 ${bgColor}`}
      ></span>
      <span
        className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[2px] h-[25.93px] -rotate-45 ${bgColor}`}
      ></span>
    </button>
  )
}
