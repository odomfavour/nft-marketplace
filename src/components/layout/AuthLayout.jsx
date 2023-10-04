import propTypes from 'prop-types';
import nftAccount from '../../assets/images/create-account.png';
import { useLocation } from 'react-router-dom';
import nftWallet from '../../assets/nft.svg';


const AuthLayout = ({ children }) => {
    const { pathname } = useLocation();       
  return (
    <div className='lg:h-screen lg:flex md:flex pb-6 md:pb-0 justify-between items-center bg-[rgb(43,43,43)] text-white'>
        <div className="lg:w-1/2 md:w-1/2 lg:h-full md:h-screen mb-6 lg:mb-0 md:mb-0">    
            <img src={pathname === '/create-account' ? nftAccount : nftWallet}
              alt={pathname === '/create-account' ? nftAccount : nftWallet}
              className='h-[50vh] w-full lg:h-full md:h-full'
            />              
        </div>
        <div className="lg:w-1/2 md:w-1/2">
            {children}
        </div>
    </div>
  )
}

AuthLayout.propTypes = {
    children: propTypes.node
}

export default AuthLayout