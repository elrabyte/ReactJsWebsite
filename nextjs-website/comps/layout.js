import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children}) => {
  return (    
    <div class="container-fluid">
      <Header/>
        <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout