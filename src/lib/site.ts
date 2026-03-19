import type { GiscusProps } from '@giscus/react'
import type { SocialSite } from '@/lib/social'
import type { GitHub } from '@/types'
import { colors } from '@/lib/colors'

interface SiteConfig {
  author: string
  email: string
  themeColor: string
  url: string
  socials: Record<SocialSite, string>
  maxLandingStars: number
  minRepoStars: number
  contentPath: string
  githubData: GitHub
  giscus?: GiscusProps
}

const siteConfig: SiteConfig = {
  author: 'THE PAULI EFFECT',
  email: 'hello@kupuri.media',
  themeColor: colors.orange,
  url: 'https://pauli-blog.vercel.app',
  socials: {
    github: 'executiveusa',
    x: 'executiveusa',
    facebook: 'executiveusa',
    weibo: 'executiveusa',
    rss: 'executiveusa',
  },
  maxLandingStars: 800,
  minRepoStars: 0,
  contentPath: 'content',
  githubData: {
    profile: {
      username: 'executiveusa',
      name: 'THE PAULI EFFECT',
      avatar: 'https://avatars.githubusercontent.com/u/191772270?v=4',
      bio: 'Social Purpose Sasquatch Using AI And Emotional Intelligence To Write Small Apps That Solve Big Problems',
      location: 'Global',
      url: 'https://github.com/executiveusa',
      followers: 4,
      followersUrl: 'https://github.com/executiveusa?tab=followers',
      following: 61,
      followingUrl: 'https://github.com/executiveusa?tab=following',
      publicRepos: 181,
      publicGists: 0,
      totalStars: 0,
      createDate: 'Sun Dec 15 2024',
    },
    repos: [
      {
        name: 'pauli-blog',
        stars: 0,
        language: 'TypeScript',
        repoUrl: 'https://github.com/executiveusa/pauli-blog',
      },
      {
        name: 'YAPPYVERSE-FACTORY',
        stars: 0,
        language: 'TypeScript',
        repoUrl: 'https://github.com/executiveusa/YAPPYVERSE-FACTORY',
      },
      {
        name: 'akashportfolio',
        stars: 0,
        language: 'TypeScript',
        repoUrl: 'https://github.com/executiveusa/akashportfolio',
      },
    ],
  },
  giscus: {
    repo: 'executiveusa/pauli-blog',
    repoId: 'R_kgDORrYLKQ',
    category: 'Announcements',
    categoryId: 'DIC_kwDORrYLKc4C4x83',
    mapping: 'specific',
  },
}

export { siteConfig }
export type { SiteConfig }
