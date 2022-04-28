import { HeaderProps } from '../types/HeaderProps'

export const HeaderComponent = ({ title }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl tracking-tight font-bold">{title}</h1>
    </div>
  )
}
