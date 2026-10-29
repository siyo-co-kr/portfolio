import type { Project } from '../types'

// 목록 카드에 보이는 정보만 여기에 적습니다.
// 상세 페이지 본문은 src/content/projects/<id>.md 파일에 Markdown으로 작성하세요.
export const projects: Project[] = [
  {
    id: 'outbound-list-tool',
    title: '아웃바운드 리스트 자동화 도구 — 30분 걸리던 팀 반복 업무를 10초로',
    period: '2026.05 – 2026.08',
    type: '실무 · 사내 업무 도구',
    role: '기획 · 개발 · 배포 (1인)',
    tags: ['Python', 'tkinter', 'openpyxl', 'PyInstaller', 'pytest', '업무 자동화', '개인정보 보호'],
    links: [{ label: 'GitHub', href: 'https://github.com/siyo-co-kr/outbound_list_program' }],
    summary:
      '팀원 모두가 엑셀로 10~30분씩 손수 하던 환자 리스트 정제 작업을 약 10초로 줄였습니다. 병원 민감 정보를 다루기 때문에 웹이 아닌 실행 파일로 배포해, 모든 데이터가 사용자 PC 안에서만 처리되도록 설계했습니다.',
  },
  {
    id: 'relative-coordinate',
    title: 'EMR UI 업데이트로 인한 클릭 좌표 전면 변경 대응',
    type: '실무 · 장애 대응',
    tags: ['장애 대응', 'RPA'],
    summary:
      'EMR 업데이트로 좌표 기반 자동화가 일괄 오작동한 상황에서, 기준점 기반 상대 좌표 구조로 전환해 복구하고 같은 유형의 변경에 자동 대응하도록 개선했습니다.',
  },
  {
    id: 'rpa-restructure',
    title: 'Python 기반 RPA 구조 개편 — 요소 기반 접근 + 병원별 커스텀 DB 이관',
    type: '실무 · 구조 개선',
    role: '기획 · 설계',
    tags: ['기획·설계', 'Python', 'pywinauto', 'DB 설계'],
    summary:
      '좌표 하드코딩, 병원별 소스코드 분기, 병원별 수동 배포 문제를 해결하기 위해 UI 요소 기반 접근과 데이터(flow) 기반 단일 소스코드 구조를 설계했습니다.',
  },
]
