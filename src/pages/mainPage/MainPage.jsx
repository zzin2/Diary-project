
import React from 'react'
import './MainPage.css';

function MainPage() {
  return (
    
      <div className='main-p-container'>
        <button className='write'onClick>작성하기</button>
        <button className='feel' onClick>오늘 기분은 어때?</button>
        <table>
        <thead>
        <tr>
          <th>날짜</th>
          <th>오늘의 한마디</th>
         </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Column 1</td>
          <td>Column2</td>
       </tr>
        <tr>
          <td>Row 2, Column 1</td>
          </tr>
      </tbody>
        </table>
      </div>

    
     
  )
}

export default MainPage