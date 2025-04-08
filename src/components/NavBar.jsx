import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

   const menuList = [{
     name: '여성',
     route: '',
   },{
    name: 'Divided',
    route: '',
  },{
    name: '남성',
    route: '',
  },{
    name: '신생아/유아',
    route: '',
  },{
    name: '아동',
    route: '',
  },{
    name: 'H&M Home',
    route: '',
  },{
    name: 'Sale',
    route: '',
  },{
    name: '지속가능성',
    route: '',
  }]; 

  

  return (
    <>
        <div>
            <div className={'login-button'}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
        </div>
        <div className={'nav-section'}>
            <img src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png' width={100}/>
        </div>
        <div className={'menu-area'}>
            <ul className={'menu-list'}>
                {menuList.map((item) => {
                    return <li>{item.name}</li> 
                })} 
            </ul>
            <div className={'search'}>
                <div className={'search-bar'}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" />
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar