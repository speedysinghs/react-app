import {Link } from 'react-router-dom';


const Navigation = () => {
  const cartStyle = {
    background: '#F59E0D',
    display  : 'flex',
    padding :'6px 12px',
    borderRadius : '50px'
  }
  return (
    <>
        <nav className='container mx-auto flex items-center justify-between py-4'>
                <Link to="/">
                    <img style={{height : 45}} src='/images/logo.png' alt='logo'></img>
                </Link>
                <ul className='flex items-center'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li className='ml-6'><Link to={'/products'}>Products</Link></li>
                    <li className='ml-6'><Link to={'cart'}>
                      <div style={cartStyle}>
                        <span className='text-black'>
                          10
                        </span>
                        <img src='/images/cart.png' alt='cart-logo' className='ml-2'></img>
                      </div>
                    </Link></li>
                </ul>
        </nav>
    </>
  )
}

export default Navigation;