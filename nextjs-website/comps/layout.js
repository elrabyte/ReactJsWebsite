import Footer from "./Footer"
import Header from "./header"

const Layout = ({children}) => {
  return (    
    <div class="container-fluid">
      <Header/>
        {children}
      <Footer/>
    </div>
  )
}

export default Layout