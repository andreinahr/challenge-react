import Slider from 'rc-slider'
import { numberLocale } from '../functions/numberLocale'
import { SliderProps } from '../types/EntryProps'

export const RangeComponent = ({ startPoint, minValue, maxValue, onChange, isCurrency = false }: SliderProps) => {
  return (
    <>
      <div className="flex mt-4">
        <div className="flex-none w-4"></div>
        <div className="grow">
          <Slider
            value={startPoint}
            startPoint={startPoint}
            defaultValue={startPoint}
            min={minValue}
            max={maxValue}
            onChange={(value) => onChange(value.toString())}
          />
        </div>
        <div className="flex-none w-4"></div>
      </div>
      <div className="flex text-lg justify-between mt-2">
        <p>{isCurrency ? `${numberLocale(minValue!, 0)}` : minValue}</p>
        <p>{isCurrency ? `${numberLocale(maxValue!, 0)}` : maxValue}</p>
      </div>
    </>
  )
}
