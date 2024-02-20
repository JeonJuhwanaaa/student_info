import logo from './logo.svg';
import './App.css';
import StudentInfo from './components/StudentInfo';
import InfoInput from './components/InfoInput';
import { useEffect, useState } from 'react';


// components 하기 전 한곳에 코드 다 적은 것.


function App() {

  const studentObj = {
    name: "",
    age: "",
    address: ""
  };

  const [student, setStudent] = useState(studentObj);
  const [inputValues, setInputValues ] = useState(studentObj);
  
  const [refresh, setRefresh ] = useState(false);

  // <useEffect> 비동기일때 사용- 변화를 인지한다
  // 처음에 무조건한번 동작한다
  // [] 안에의 상태가 변화하면 setInputValues(studentObj) 동작해라 
  useEffect(() => {
    if(refresh) {
      setInputValues(studentObj);
    }
    setRefresh(true);
  }, [student]);

  /**
   *  << js객체 특징 >>
   *  1. 키 값은 문자열이어도 된다.
   *  2. 변수의 문자열 값을 키값으로 쓰고 싶을 때 []대괄호로 묶어서 참조할 수 있다.
   *  3. 변수명만 입력하면 객체의 속성과 value로 한번에 정의할 수 있다.
   */

  // let email = "email";
  // let phone = "01000000000";

  // let user = {
  //   "username": "test",
  //   ["password"]: "1234",
  //   [email]: "test",
  //   phone
  // }

  
  // spread 쓸 땐 let 사용할 것
  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setInputValues({
      ...inputValues,
      [name]: value
    });
  }


    // switch(name) {
    //   case "name":
    //     setName(value);
    //     break;
    //   case "age":
    //     setAge(value);
    //     break;
    //   case "address":
    //     setAddress(value);
    //     break;
    //   default:
    //     console.log();
    // }

      // if(name === "name") {
      //   inputValues.name = value;
      // }else if(name ==="age") {
      //   inputValues.age = value;
      // }else {
      //   inputValues.address = value;
      // }

    const handleOnOk = () => {
      setStudent(inputValues);
    }

    const handleOnClean = () => {
      setStudent(studentObj);
    }

  return (
    <>
      <h1>이름: {student.name}</h1>
      <h1>나이: {student.age}</h1>
      <h1>주소: {student.address}</h1>
      
      <input type="text" 
        name='name' 
        onChange={handleInputChange} 
        value={inputValues.name} 
        placeholder='이름'/>

      <input type="text" 
        name='age' 
        onChange={handleInputChange} 
        value={inputValues.age} 
        placeholder='나이'/>

      <input type="text" 
        name='address' 
        onChange={handleInputChange} 
        value={inputValues.address} 
        placeholder='주소'/>

      <button onClick={handleOnOk} >확인</button>
      <button onClick={handleOnClean} >비우기</button>
    </>
  );
}

export default App;
