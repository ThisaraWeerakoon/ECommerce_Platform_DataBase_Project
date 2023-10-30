
import { createContext, useState } from "react"
export const CategoryContext = createContext(null)

function CategoryDetailsContext(props) {
  const [selectedCategory, setSelectedCategory] = useState({Product_Category_Id:'1',Category_Name:'All Products'});
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
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {props.children}
    </CategoryContext.Provider>
  )
}

export default CategoryDetailsContext