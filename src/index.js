import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

//id가 root인 태그를 가져와서 복사함!
//도큐먼트에 옆에 도큐먼트가 하나 더 만들어졌음
root.render(
    <App /> //컴포넌트
);

//괄호가 있는데 함수를 정의하는 문법이 아니면 호출하는 것이다.
