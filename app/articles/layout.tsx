import ArticleSchemaInjector from '@/components/ArticleSchemaInjector'

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ArticleSchemaInjector />
      {children}
    </>
  )
}
