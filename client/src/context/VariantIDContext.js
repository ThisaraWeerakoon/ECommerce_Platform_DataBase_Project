import { createContext, useState } from "react"
export const  VarientItemContext = createContext(null)

function ProductIDContext(props) {
  const [selectedVariantID, setSelectedVariantID] = useState('3');
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
    <VarientItemContext.Provider value={{ selectedVariantID, setSelectedVariantID }}>
      {props.children}
    </VarientItemContext.Provider>
  )
}

export default ProductIDContext