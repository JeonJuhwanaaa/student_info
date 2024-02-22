import React from 'react';
import { Route, Routes } from 'react-router-dom';

function SubRoute(props) {
    
    // <라우터> : 부분적으로 렌더링
    // <서브라우트> : 라우트안에 라우트 (타고타고 들어가는 것)
    // '/test1/:파라미터'
    return (
        <>
            <h1>서브 라우트</h1>
            <Routes>
                <Route path= '/test1/:num' element={ <h1>Test1</h1> } />
                <Route path= '/test2/:num' element={ <h1>Test2</h1> } />
                <Route path= '/test3/:num' element={ <h1>Test3</h1> } />
            </Routes>
        </>
    );
}

export default SubRoute;