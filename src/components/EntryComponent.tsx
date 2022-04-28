import { EntryProps } from '../types/EntryProps'

export const EntryComponent = ({ id, title, mask, onChange }: EntryProps) => {
  return (
    <>
      <div className="flex justify-between mt-8 min-w-0">
        <p className="mt-4 text-lg uppercase">{title}</p>
        <div className="relative w-40 border py-1">
          <input
            id={id}
            type="text"
            onKeyPress={(event) => {
              !/[0-9]/.test(event.key) && event.preventDefault()
            }}
            className="border-none w-40 text-center text-3xl font-extrabold bg-transparent focus:outline-none"
            value={mask}
            onChange={(event) => {
              const input = event.target.value.replace(/[^0-9]+/g, '')
              onChange(input)
            }}
          />
        </div>
      </div>
    </>
  )
}
