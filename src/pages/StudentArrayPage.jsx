import React, { useEffect, useRef, useState } from 'react';

// input 사용 시 name='' onChange={} 는 필수로 넣자
function StudentArrayPage(props) {

    const [studentList, setStudentList] = useState([]);

    // const [student, setStudent] = useState({
    //     id: 0,
    //     name: "",
    //     age: 0,
    //     address: ""
    // });

    // 2번
    const [inputValue, setInputValue] = useState({
        id: "",
        name: "",
        age: "",
        address: ""
    });

    const [ updateId, setUpdateId ] = useState(0);

    // staticId.current 값이 변해도 렌더링 xx
    // 재렌더링이 발생해도 초기화되지않음

    // 4번
    useEffect(() => {
        console.log(studentList);
    }, [studentList]);

    const staticId = useRef(0);

    //3번
    const handleInputChange = (e) => {

        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
    }

    const handleAddClick = () => {
        // console.log(staticId.current += 1);

        const student = {
            ...inputValue,
            id: staticId.current += 1
        };

        setStudentList([...studentList, student]);
    }

    // **
    const handleDeleteClick = (id) => {
        setStudentList([...studentList.filter(student => student.id != id)]);
    }

    const handleUpdateClick = (id) => {
        setUpdateId(id);
        setInputValue(studentList.filter(student => student.id === id)[0]);
    }

    ///////// indexOf 사용
    const handleUpdateSubmitClick = () => {

        const findIndex =
            studentList.indexOf(studentList.filter(student => student.id === updateId)[0]);
        const updateStudentList = [...studentList];

        updateStudentList[findIndex] = inputValue;

        setStudentList(updateStudentList);
        handleCancelClick();
    }

    const handleCancelClick = () => {
        setUpdateId(0);
        setInputValue({
            id: "",
            name: "",
            age: "",
            address: ""
        });
    }

    // 1번
    // *키 값은 고유한 값을 가지기 위해서 가지는 것이다
    // 표현식( {} ) 안에 삼항연산자를 씀
    return (
        <div>
            <div>
                <input type="text" 
                name="id"
                disabled={true}
                value={inputValue.id}
                placeholder='ID'
                />

                <input type="text"
                name='name' 
                onChange={handleInputChange} 
                value={inputValue.name} 
                placeholder='이름'
                />

                <input type="text" 
                name='age' 
                onChange={handleInputChange}
                value={inputValue.age} 
                placeholder='나이'
                />

                <input type="text"
                name='address' 
                onChange={handleInputChange}
                value={inputValue.address} 
                placeholder='주소'
                />

                <button onClick={ handleAddClick }>추가</button>
                
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>이름</th>
                            <th>나이</th>
                            <th>주소</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.map(student => {
                            return <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                                <td>
                                    {
                                        updateId !== student.id
                                        ? <button onClick={ () => {handleUpdateClick(student.id);} }>수정</button>
                                        : <button onClick={ handleUpdateSubmitClick } >확인</button>
                                    }
                                </td>
                                <td>
                                    {
                                        updateId !== student.id
                                        ? <button onClick={ () => {handleDeleteClick(student.id);} }>삭제</button>
                                        : <button onClick={ handleCancelClick }>취소</button>
                                    }
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StudentArrayPage;