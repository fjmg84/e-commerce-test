import Footer from "../Footer"
import Navbar from "../Navbar"

function PageLayout({ children }) {
    return <>
        <Navbar />
        {children}
        <Footer />
    </>

}

export default PageLayout