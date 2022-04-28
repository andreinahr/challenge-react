import { FooterProps } from '../types/FooterProps'

export const FooterComponent = ({ fee, feeDescription, btnXl, btnXm }: FooterProps) => {
  return (
    <>
      <div className="mt-8 py-4 px-8 flex justify-between bg-blue-900">
        <h1 className="mt-3 text-xl tracking-tight font-bold uppercase">{feeDescription}</h1>
        <span className="text-5xl font-bold">{fee}</span>
      </div>
      <div className="flex flex-row">
        <button type="button" className="basis-3/5 text-2xl px-8 py-2 tracking-tight font-bold bg-cyan-base uppercase">
          {btnXl}
        </button>
        <button type="button" className="basis-2/5 px-8 py-2 ml-4 text-xl font-bold bg-blue-light uppercase">
          {btnXm}
        </button>
      </div>
    </>
  )
}
