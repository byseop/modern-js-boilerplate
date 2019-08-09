## Morder Javascript Boilerplate  
이 보일러플레이트는 모던자바스크립트의 크로스브라우징을 위한 프로젝트입니다.  
  

### 1. 패키지 정보
* 트랜스파일링 - [BABEL 7](https://babeljs.io/docs/en/)  
* 패키징 - [Webpack 4](https://webpack.js.org/)  
* 코드포맷 - [Prettier](https://prettier.io/)
  
### 2. 웹팩 세팅방법  
* mode: 'development'와 'production' 모드 두가지 존재, 'production' 모드에서는 실제 라이브반영시 패키징 사용합니다. 'production'모드에는 'development'모드 보다 자동으로 더 최적화하여 패키징합니다.  
* entry: 패키징 할 파일을 선택합니다. 예를들어  
```javascript
entry: {
    bundle: ['./src/js/todolist.js'],
    entry: ['@babel/polyfill', './src/js/todolist.js']
},
```
위 처럼 entry를 설정 할 경우 todolist.js 가 babel로 트랜스파일링 되어 bundle.js가 되고, @babel/polyfill과 todolist.js가 트랜스파일링 및 패키징되어 entry.js가 됩니다.  
* output: 위의 entry에서 지정한 파일들이 변환, 패키징되어 생성될 output 경로입니다.  
```javascript
output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js'
}
```
와 같이 지정했을때, filename의 [name]은 entry에서 지정한 [name].js로 저장됩니다.  
* module: 기본적으로 js파일을 변환하고 src/js 파일을 변환하고 node_module 폴더는 제외합니다. babel의 프리셋은 env를 사용합니다.  
  
### 3. 사용법
```bash
yarn run webpack
npm run webpack
```  
  
### 기타  
메이저한 버전 업데이트, 필요한 수정사항은 업데이트 예정입니다.  
[byseop's devlog](https://byseop.netlify.com/) 방문하기!
