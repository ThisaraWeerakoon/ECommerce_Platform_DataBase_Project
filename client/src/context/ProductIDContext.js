import { createContext, useState } from "react"
export const ProductContext = createContext(null)

function ProductIDContext(props) {
  const [selectedProductID, setSelectedProductID] = useState('0');
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
    <ProductContext.Provider value={{ selectedProductID, setSelectedProductID }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductIDContext