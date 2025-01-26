import { Service } from '@/types/Service'
import { Button } from '../UI/Button'

type ServiceCardFooterProps = {
  price: Service['price']
  duration: Service['duration']
  link: Service['link']
}

export const ServiceCardFooter = ({ price, duration, link }: ServiceCardFooterProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-4 items-center py-6">
        {price && <span className="font-semibold text-4xl text-bezh">&#8364;{price}</span>}
        {duration && (
          <div className="flex flex-col items-center font-light text-sm">
            <span>Тривалість:</span>
            <span>{duration}</span>
          </div>
        )}
      </div>
      <Button variant="primary" href={link}>
        Записатися
      </Button>
    </div>
  )
}
