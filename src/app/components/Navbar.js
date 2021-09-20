import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"

const Navbar = () => (
    <Menu mode="horizontal">
        <Menu.Item key="mail" icon={<AppstoreOutlined />}>
          <Link to="/" >
          Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="alipay">
        <Link to="/signup">
          Signup
        </Link>
        </Menu.Item>  
        <Menu.Item key="alipay">
        <Link to="/login" >
      Login
      </Link>
        </Menu.Item>
      </Menu>
)

export default Navbar;
