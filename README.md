# Portfolio

React + TypeScript + Vite 기반 개발자 포트폴리오. GitHub Pages로 배포합니다.

## 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # dist/ 빌드
npm run preview  # 빌드 결과 미리보기
```

## 내용 수정

화면 코드는 건드리지 않고 `src/data/`와 `src/content/`만 수정하면 됩니다.
데이터가 비어 있는 섹션은 페이지와 메뉴에서 자동으로 숨겨집니다.

| 파일 | 내용 |
| --- | --- |
| `src/data/profile.ts` | 이름, 직무, 자기소개, 이메일, 링크 |
| `src/data/skills.ts` | 기술 스택 (카테고리별) |
| `src/data/projects.ts` | 프로젝트 목록 카드 (제목, 태그, 기간, 요약, 링크) |
| `src/content/projects/<id>.md` | 프로젝트 상세 페이지 본문 (Markdown) |
| `src/data/experience.ts` | 경력 |

### 프로젝트 추가하기

1. `src/data/projects.ts`에 항목 추가 (`id`는 영문·숫자·하이픈)
2. `src/content/projects/<id>.md` 파일을 만들어 본문 작성
3. 상세 페이지 주소: `#/projects/<id>`

Markdown에서는 제목(`##`), 목록, 굵게, 코드 블록, 표, 인용, 이미지, 링크를 쓸 수 있습니다.
이미지는 `public/images/`에 넣고 `![설명](./images/파일.png)`로 불러옵니다.

## 배포 (GitHub Pages)

1. GitHub에 저장소를 만들고 `main` 브랜치에 push
2. 저장소 **Settings → Pages → Source** 를 **GitHub Actions** 로 선택
3. 이후 `main`에 push할 때마다 `.github/workflows/deploy.yml`이 자동 빌드·배포
