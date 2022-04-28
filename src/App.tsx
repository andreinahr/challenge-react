import { useState } from 'react'
import 'rc-slider/assets/index.css'
import { numberLocale } from './functions/numberLocale'
import { Range } from './types/Range'
import { RangeComponent, EntryCompoenent, FooterComponent, LayoutComponent, HeaderComponent } from './components'

function App() {
  const [amount, setAmount] = useState<number>(Range.MIN_RANGE_AMOUNT)
  const [term, setTerm] = useState<number>(Range.MIN_RANGE_TERM)
  const [mask, setMask] = useState<string>(numberLocale(Range.MIN_RANGE_AMOUNT, 0))

  const onChangeAmount = (value: string) => {
    const valueToLocale = numberLocale(+value, 0)
    setAmount(+value)
    setMask(valueToLocale)
  }

  return (
    <LayoutComponent>
      <>
        <HeaderComponent title="Simulá tu crédito" />
        <EntryCompoenent
          id="amount"
          title="Monto total"
          minValue={Range.MIN_RANGE_AMOUNT}
          maxValue={Range.MAX_RANGE_AMOUNT}
          mask={mask}
          onChange={onChangeAmount}
        />
        <RangeComponent
          startPoint={amount}
          onChange={onChangeAmount}
          isCurrency={true}
          minValue={Range.MIN_RANGE_AMOUNT}
          maxValue={Range.MAX_RANGE_AMOUNT}
        />
        <EntryCompoenent
          id="term"
          title="Plazo"
          minValue={Range.MIN_RANGE_TERM}
          maxValue={Range.MAX_RANGE_TERM}
          mask={term.toString()}
          onChange={(e) => setTerm(+e)}
        />
        <RangeComponent
          startPoint={term}
          minValue={Range.MIN_RANGE_TERM}
          maxValue={Range.MAX_RANGE_TERM}
          onChange={(e) => setTerm(+e)}
          isCurrency={false}
        />
        <FooterComponent
          fee={numberLocale(+amount / +term)}
          feeDescription="Cuota Fija Por Mes"
          btnXl="Obtené crédito"
          btnXm="Ver detalle de cuotas"
        />
      </>
    </LayoutComponent>
  )
}

export default App
