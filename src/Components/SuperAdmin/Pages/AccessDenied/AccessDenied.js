import React from 'react'
import { useNavigate} from 'react-router-dom';


const AccessDenied = () => {
    const navigate = useNavigate();

   
  return (
    <div>
    <div style={{backgroundColor: "#D1AA96", height: "100vh"}} className="d-flex justify-center flex-col align-middle " >

        
        <h2 className='text-center'>Access Denied!</h2>
        <h4 className='text-center'>You don't have permission to view this page!</h4>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '5px',
            alignItems: 'center',
        }}>
        <button style={{
            width: '100px',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: '#5A4A42',
            color: "white"
            
        }} onClick={() => navigate(-3)}>Go back</button>
        </div>
       
    </div>

    </div>
  )
}

export default AccessDenied