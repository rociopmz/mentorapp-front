import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"

const Navbar = ({newUser, onLogout}) => (
    <Menu mode="horizontal">
        <Menu.Item key="mail" icon={<AppstoreOutlined />}>
          <Link to="/" >
          Dashboard
          </Link>
        </Menu.Item>
        {!Object.keys(newUser).length ? <>
        <Menu.Item>
        <Link to="/signup">
          Signup
        </Link>
        </Menu.Item>  
        <Menu.Item>
        <Link to="/login" >
      Login
      </Link>
        </Menu.Item>
        </> : <>
        <Menu.Item>
        <Link to="/profile">
          Profile
        </Link>
        </Menu.Item>  
        <Menu.Item>
        <span onClick={onLogout} >
      Logout
      </span>
        </Menu.Item>

        </>} 
      </Menu>
)

export default Navbar;
