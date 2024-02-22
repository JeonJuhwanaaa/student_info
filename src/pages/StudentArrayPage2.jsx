import React, { useEffect, useRef, useState } from 'react';

function StudentArrayPage2(props) {

    // * 소수점 2번째까지 결과보기
    // console.log(10.541515.toFixed(2));

    // 5번
    const [studentList, setStudentList] = useState([]);

    // 16번
    const [updateId, setUpdateId] = useState(0);

    // 2번
    const [inputValue, setInputValue] = useState({
        id: 0,
        name: "",
        score: ""
    });

    // 11번
    const [scoreDate, setScoreData] = useState({
        total: 0,
        avg: 0
    });

    // const sum = () => {

    //     for(let i=0; i < studentList.length; i++) {
    //         studentList[i].score + current;
    //         return sum;
    //     }
    // };

    // 4번 
    // useEffect(() => {
    //     console.log(inputValue);
    // },[inputValue])

    // 9번
    // useEffect(() => {
    //     console.log(studentList);
    // },[studentList])

    // 12번
    useEffect(() => {
        const total = studentList.reduce((result,student )=> result + student.score, 0);
        const avg = total === 0 ? 0 : total / studentList.length;

        setScoreData({
            total,
            avg
        });
    },[studentList])

    // reduce 쓰는거랑 for문돌리는거랑 동일함

    // let result = 0;
    // for(let student of studentList) {

    // }

    // 7번
    const staticId = useRef(0);

    // 3번
    const handleInputChange = (e) => {

        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
    }

    // 17번
    const handleUpdateClick = (id) => {
        setUpdateId(id);
        setInputValue(studentList.filter(student => student.id === id)[0]);
    }

    // 20번
    const handleUpdateSubmitClick = (id) => {

        // const findIndex =
        //     studentList.indexOf(studentList.filter(student => student.id === updateId)[0]);
        // const updateStudentList = [...studentList];

        // updateStudentList[findIndex] = inputValue;

        // setStudentList(updateStudentList);
        // handleCancelClick();

        setStudentList(studentList.map(student => {
            return student.id !== updateId ? student : {
                id: inputValue.id,
                name: inputValue.name,
                score: parseInt(inputValue.score)
            };            
        }));


        handleCancelClick();
    }

    // 14번
    const handleDeleteClick = (id) => {
        setStudentList([...studentList.filter(student => student.id !== id)]);
    }

    // 6번 // 8번
    const handleAddClick = () => {
        
        const student = {
            id: staticId.current += 1,
            name: inputValue.name,
            score: parseInt(inputValue.score)
        };

        setStudentList([...studentList,student]);
    }

    // 19번
    const handleCancelClick = () => {
        setUpdateId(0);
        setInputValue({
            id: "",
            name: "",
            score: ""
        });
    }

    // 1번 - 틀만들기
    // 10번 - tbody 만들기 (tr / td)
    // 13번 - 삭제 만들기
    // 15번 - 수정 만들기 / 삼항연산자 사용
    // 18번 - 취소 만들기
    // 19번 - 확인
    return (
        <div>
            <div>
                <input type="text"
                name='id'
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
                name='score'
                onChange={handleInputChange}
                value={inputValue.score}
                placeholder='점수'
                />

                <button onClick={handleAddClick} >추가</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>점수</th>
                    </tr>
                </thead>

                <tbody>
                    {studentList.map(student => {
                        return <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.score}</td>
                            <td>
                            {
                                updateId !== student.id
                                ? <button onClick={() => {handleUpdateClick(student.id);} }>수정</button>
                                : <button onClick={handleUpdateSubmitClick} >확인</button>
                            }
                            </td>
                            <td>
                            {
                                updateId !== student.id
                                ? <button onClick={() => {handleDeleteClick(student.id)}} >삭제</button>
                                : <button onClick={handleCancelClick} >취소</button>
                            }
                            </td>
                        </tr>
                    })}

                </tbody>

                <tfoot>
                    <tr>
                        <th>총점</th>
                        <th colSpan={2}> {scoreDate.total} </th>
                    </tr>
                    <tr>
                        <th>평균</th>
                        <th colSpan={2}> {scoreDate.avg.toFixed(2)} </th>

                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default StudentArrayPage2;