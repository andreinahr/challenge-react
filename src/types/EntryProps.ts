export interface SliderProps extends BaseProps {
  startPoint: number
  isCurrency: boolean
}

export interface EntryProps extends BaseProps {
  id: string
  title: string
  mask?: string
}

interface BaseProps {
  minValue: number
  maxValue: number
  onChange: (value: string) => void
}
