'use client'

import Giscus from '@giscus/react'
import { useLocale } from 'next-intl'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/lib/site'

interface PostCommentProps {
  slug: string
}

function adaptLocale(locale: string) {
  return locale === 'en-US' ? 'en' : locale
}

export function PostComment({ slug }: PostCommentProps) {
  const { resolvedTheme } = useTheme()
  const locale = useLocale()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div data-testid="comments-container" className="comments">
      {mounted && (
        <Giscus
          repo="executiveusa/pauli-blog"
          repoId="R_kgDORrYLKQ"
          category="Announcements"
          categoryId="DIC_kwDORrYLKc4C4x83"
          mapping="specific"
          term={`${slug.charAt(0).toUpperCase()}${slug.slice(1)}`}
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={resolvedTheme}
          lang={adaptLocale(locale)}
          loading="lazy"
          {...siteConfig.giscus}
        />
      )}
    </div>
  )
}
