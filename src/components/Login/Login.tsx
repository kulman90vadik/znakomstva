import { useState } from 'react';
import Modal from '../Modal/Modal';


const Login = () => {

	const [modal, setModal] = useState(false)
	const logout = () => {
   setModal(true)
}

  return (
    <>
    <button className='' type="button" onClick={logout}>
      <img className='' src="" alt="image user" />
      <span>Login</span>
    </button>
    <Modal openModal={modal} setModal={setModal}>
		
        <div className="w-[33.33%]">
          <img className='w-full rounded-[20%] h-[300px]' src="" alt="My Foto" />
        </div>
        <div className="w-[66.66%] bg-mustard">
          <form className='w-full' action="#">
              <div className="grid grid-cols-12 w-full">
                <label className='col-start-1 col-end-4' htmlFor="name">Name</label>
                <input className='col-start-4 col-end-13 h-50 rounded-[15px]' id='name' placeholder='Your Name' type="text" />
              </div>
          </form>
        </div>
     
		</Modal>
    </>
  );
}
 
export default Login;