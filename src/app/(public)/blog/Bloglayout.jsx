import { Outlet } from 'react-router-dom'

const Bloglayout = () => {
  return (
    <>
        <div className="blog_layout">
            <Outlet />
        </div>
    </>
  )
}

export default Bloglayout