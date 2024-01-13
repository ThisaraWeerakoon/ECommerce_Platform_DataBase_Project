import { createContext, useState } from "react"
export const VariantContext = createContext(null)

function VariantOptionsContext(props) {
  const [selectedVariantOptions, setSelectedVariantOptions] = useState({name:'Color',options:["Phantom Gray","Phantom White","Phantom Pink"]});
//   const [userType, setUserType] = useState("guest")

//   const login = (user) => {
//     setUser(user.name)
//     setUserType(user.type)
//   }

//   const logout = () => {
//     setUser(null)
//     setUserType("guest")
//   }

  return (
    <VariantContext.Provider value={{ selectedVariantOptions, setSelectedVariantOptions }}>
      {props.children}
    </VariantContext.Provider>
  )
}

export default VariantOptionsContext