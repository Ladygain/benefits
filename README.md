# 베네핏 사이트 운영 가이드 라인

### 노드 설치

- https://nodejs.org/en/
- 링크의 LTS 버전을 설치하세요. (v12.18.2 이상)



### GitHub Desktop 설치

- https://desktop.github.com/



### 노드 환경 설정

1. 터미널을 여세요.

   - Windows : PowerShell

   - MacOS : 터미널

2. 아래 명령어를 입력하여 노드가 설치되었는지 확인하세요.

   - v12.18.2 가 출력되면 정상 설치
   - 아니면 다시 설치하세요.

   ``` 
   node -v 
   ```

3. GitHub Desktop에서 베네핏 폴더를 다운받으세요.

   - https://github.com/open-inno/benefits

4. 다운받은 폴더 경로로 이동하세요.

5. 아래 명령어를 입력하세요.

   ```
   npm install
   ```

6. 아래 명령어를 입력하여 페이지를 실행하세요.

   ```
   npm start
   ```



### 폴더 구조

```
│ .DS_Store
│	.gitignore
│ README.md
│ app.js
│ package-lock.json
│ package.json
│ 
├─ bin
│			www		# 서버 관련 파일, 건드리지 말 것!
│ 
├─ data
│			partners.json		# 파트너 소개 메뉴 정보 파일
│			programs.json		# 프로그램 소개 메뉴 정보 파일
│ 
├─ lib
│			pool.js		# json 파일 읽어오는 코드
│ 
├─ public
│		├─ assets/img
│		│ 	├─ about
│		│		├─ background
│		│		├─ logos
│		│		└─ partners		# 파트너 로고 및 상세 페이지 이미지 폴더
│ 	│
│		├─ css
│		│			styles.css
│		│
│		└─ javascripts
│					scripts.js
│
├─ routes
│			index.js		# 라우터
│
└─ templates
			home.js
			template.js
```



### partners.json

- 파트너 소개 메뉴 정보 파일

  ``` 
  {
      "ready" : true,
      "id" : "goorm",
      "title" : "구름",
      "abstract" : "구름EDU 전용 채널 및 쿠폰, IDE 유료 플랜 제공",
      "text" : [
        "'모두가 개발자가 된다'는 비전을 가진 (주)구름의 42 SEOUL 교육생 대상 파격 혜택! 놓치지 마세요!",
        "",
        "[혜택 01] 42 SEOUL 교육생 전용 채널 내 프로그래밍 강좌 무료!",
        "[혜택 02] 구름EDU의 모든 강좌 30% 할인!",
        "[혜택 03, 04] 클라우드 통합 개발환경으로 별도 설치 없이 온라인 환경에서 개발이 가능한 IDE 제공!"
      ],
      "button" : [
        { "name" : "구름EDU 바로가기", "link" : "https://edu.goorm.io/" },
        { "name" : "구름IDE 바로가기", "link" : "https://ide.goorm.io/" },
        { "name" : "구름IDE가 궁금하다면?", "link" : "https://goor.me/QSZcy" },
        { "name" : "42 SEOUL 교육생 전용 채널", "link" : "https://42seoul.goorm.io/" }
      ]
    }
  ```

  - 위와 같이 json 포맷을 맞추어 데이터를 추가하세요.

  - | Key      | Value                                                        |
    | -------- | ------------------------------------------------------------ |
    | ready    | 준비 완료이면 true, 준비 중이면 false                        |
    | id       | 제휴사의 영문명. 로고 이미지 및 상세페이지 이미지에 사용하므로 띄어쓰기 없는 영문명 권장 |
    | title    | 메인 페이지와 상세 페이지의 제목. 제휴사 이름을 사용         |
    | abstract | 메인 페이지와 상세 페이지의 요약                             |
    | text     | 상세 페이지의 본문. 한 줄씩 ""로 묶어 작성                   |
    | button   | 상세 페이지의 버튼. name에 버튼 내용, link에 연결될 URL 작성 |

    작성시 ',' 사용에 유의하세요.



### public/assets/img/partners

- 제휴사의 로고 이미지와 상세 페이지의 베네핏 이미지 폴더입니다.
- 로고 이미지의 명칭은 json 파일의 'id'로 맞춰주세요.
- 베네핏 이미지의 명칭은 '(id)-portfolio'로 맞춰주세요.
- 모든 이미지의 확장자는 .png로 통일해주세요.
