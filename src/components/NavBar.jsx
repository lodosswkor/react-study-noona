import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

const NavBar = () => {

   const menuList = [{
    "id":1, 
    "name": "여성",
    "route": ""
  },{
    "id":2, 
   "name": "Divided",
   "route": ""
 },{
    "id":3, 
   "name": "남성",
   "route": ""
 },{
    "id":4, 
   "name": "신생아/유아",
   "route": ""
 },{
    "id":5, 
   "name": "아동",
   "route": ""
 },{
    "id":6, 
   "name": "H&M Home",
   "route": ""
 },{
    "id":7, 
   "name": "Sale",
   "route": ""
 },{
    "id":8, 
   "name": "지속가능성",
   "route": ""
 }]; 

  const navigator = useNavigate();

  const goToLogin = () => {
    navigator('/login');
  };

  return (
    <>
        <div className={'navi-top'}>

            <div className={'search'}>
                <div className={'search-bar'}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" placeholder={'검색어를 입력해 주세요.'}/>
                </div>
            </div>
            <div className={'login-button'} onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} /> &nbsp;
                <div>로그인</div>
            </div>
        </div>
        <div className={'nav-section'}>
            <img src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png' width={100}/>
        </div>
        <div className={'menu-area flex items-center'}>
              <ul className={'menu-list'}>
                  {menuList.map((item) => {
                      return <li key={item.id}>{item.name}</li> 
                  })} 
              </ul>
        </div>
        
    </>
  )
}

export default NavBar