const getPokemonAJAX = () => {
  const xhr = new XMLHttpRequest();
  // * xhr이란 변수(상수)에 생성자 함수 instant가 XMLHttpRequest인 규격의 객체를 담는다.
  console.dir("데이터 받기 전 조회 : ", + xhr);
  xhr.open("GET","https://pokeapi.co/api/v2/pokemon/",true);
  xhr.addEventListener('load',()=>{
    if (xhr.status === 200) {

    }
  });
};