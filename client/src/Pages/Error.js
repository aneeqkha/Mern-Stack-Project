import img from '../images/not-found.svg'
import Styling from '../styling/Error_S'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <Styling>
        <div>
            <img src={img} alt='img not found'/>
            <h3>ohh page not found</h3>
            <p>we can,t seem to find the page you are looking</p>
            <Link to='/Login'>go to Login page</Link>
        </div>
    </Styling>
  )
}
export default Error