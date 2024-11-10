import { useNavigate } from "react-router-dom";
import './Login.css';
import {  useEffect, useState } from "react";

function Login(){
    const nav = useNavigate();
    const [id,setId]=useState('');
    const [password,setPassword]=useState('');
    const [rotate,setRotate]=useState(false);

        
    const login = ()=>{
        if(id && password){

            nav('/main');
        } else {
            alert('입력하셈');
        }
    }
    const handleClick=()=> {
        if(rotate){
            return;
        }
        setRotate(true);
        setTimeout(()=>{
            setRotate(false);
        },3000);
    }
    



    return(
        <section className="login-page-container">
            <div className="l-p-i-c">
                <img src="/background/Diary.png" 
                alt="??"
                className={rotate ? 'rotate-animation' : ''}
                onClick={handleClick}/> 
                <span>아이콘을 눌러보세요.</span>
            </div>

             <div className="login-page-input-container">
                <h1>오늘 Haru...</h1>
                <input  placeholder='아이디' type="id" onChange={(e)=>setId(e.target.value)}/>
                <input placeholder="비밀번호" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button className="l-p-login" onClick={login}>Login</button>
                <div className="l-p-find">
                    <button>계정생성</button>
                    <button>계성찾기</button>
                    
                </div>
                <div></div>
            </div>
            

            
           
        </section>
    )
}export default Login;

