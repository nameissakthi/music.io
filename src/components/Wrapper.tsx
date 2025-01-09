import { ReactNode } from "react"

const Wrapper = ({children}:{children:ReactNode}) => {

  return (
    <div className="w-full p-2">
        {children}
    </div>
  )
}

export default Wrapper