import { Link } from 'react-router-dom'
const MenuBar = () => {
  return (
    <nav className="d-flex justify-content-center">
      <div className="p-2">
        <Link to="/">Home</Link>
      </div>
      <div className="p-2">
        <Link to="/products">Products</Link>
      </div>
      <div className="p-2">
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  )
}
export default MenuBar