import propTypes from 'prop-types';
import Footer from "../Footer";
import Nav from "../Nav";

const MainLayout = ({ children }) => {
  return (
    <div>
        <Nav />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

MainLayout.propTypes = {
    children: propTypes.node,
}

export default MainLayout