// src/content/projects/*.md 파일을 빌드 시점에 문자열로 불러옴
const files = import.meta.glob('./projects/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const byId: Record<string, string> = {}
for (const [path, content] of Object.entries(files)) {
  const id = path.split('/').pop()!.replace(/\.md$/, '')
  byId[id] = content
}

export function getProjectContent(id: string): string | undefined {
  return byId[id]
}
