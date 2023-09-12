import "./NavBox.css"

function NavBoxItem({imgSrc,title}) {
  return (
    <a className="nav-box-item">
        <img src={imgSrc} alt="" />
        <div className="title">{title}</div>
    </a>
  )
}

export default NavBoxItem
