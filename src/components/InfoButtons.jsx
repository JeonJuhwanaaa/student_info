import React from 'react';

// children 가 props 에 들어오면 태그들 사이 값을 가져온다
function InfoButtons( { children } ) {
    return (
        <div>
            { children }
        </div>
    );
}

export default InfoButtons;