import { Dropdown } from "react-bootstrap"
import { GlobalIcons } from "../../../assets/svgIcons/SvgIcon"

const LanguageDropdown = () => {
  return (
    <>
      <div className='languageDropdown d-flex align-items-center'>
        <Dropdown className='common_dropdown'>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            <span className='globalIcon'><GlobalIcons /></span> En
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Spanish</Dropdown.Item>
            <Dropdown.Item>Language</Dropdown.Item>
            <Dropdown.Item>Language</Dropdown.Item>
            <Dropdown.Item>Language</Dropdown.Item>
            <Dropdown.Item>Language</Dropdown.Item>
            <Dropdown.Item>Language</Dropdown.Item>
            <Dropdown.Item>Language</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  )
}

export default LanguageDropdown