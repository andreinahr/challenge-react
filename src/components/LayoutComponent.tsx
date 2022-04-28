import { ParentProps } from '../types/Layout'

export const LayoutComponent = (props: ParentProps) => {
  return (
    <div className="flex h-screen bg-gradient-to-t from-blue-dark to-blue-base">
      <div className="m-auto p-6 bg-blue-dark">
        <div className="w-fit p-6">{props.children}</div>
      </div>
    </div>
  )
}
