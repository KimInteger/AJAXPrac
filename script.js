const a = `https://apis.data.go.kr/6300000/eventDataService/eventDataListJson
?
serviceKey
=
4WZqKSFBKTKvEh0FmRpWZqAVCkO%2B2yz3ehUuYtqigHgFExfJZwCVJlXUJsqecScdYmrXgKD%2BU4tfMJql%2FHst%2Fg%3D%3D&`;

/*
* ?고 url로 정보가 들어온 것으로 보아 GET방식으로 추측된다.
* 키의 명칭은 serviceKey이다.
* serviceKey의 value 는 = 이후와 같다.
*/

const b = 'endpoint 주소 ' + '주소값';

const endpoint = `http://apis.data.go.kr/6300000/eventDataService`;


// ! 사용 예시.
// ! numOfRows 페이지당 게시물 수
// ! 페이지 번호.
// ! 인증키는 인코드 방식으로 해주세요.

const keyName = '4WZqKSFBKTKvEh0FmRpWZqAVCkO%2B2yz3ehUuYtqigHgFExfJZwCVJlXUJsqecScdYmrXgKD%2BU4tfMJql%2FHst%2Fg%3D%3D';
const example = `http://apis.data.go.kr/6300000/eventDataService/eventDataListJson?serviceKey=${keyName}&numOfRows=10&pageNo=1`;

console.log(example);

const getDaejeonAJAX = ()=>{
  const xhr = new XMLHttpRequest();
  console.dir('데이터 받기 전 조회 : ' + xhr);
  xhr.open("GET", "http://apis.data.go.kr/6300000/eventDataService/eventDataListJson?serviceKey=4WZqKSFBKTKvEh0FmRpWZqAVCkO%2B2yz3ehUuYtqigHgFExfJZwCVJlXUJsqecScdYmrXgKD%2BU4tfMJql%2FHst%2Fg%3D%3D&numOfRows=10&pageNo=1", true);
  xhr.addEventListener('load',()=>{
    if(xhr.status === 200){
      console.log('데이터 받은 후 조회');
      console.dir(xhr);
    }
  });
  xhr.send();
};

getDaejeonAJAX();