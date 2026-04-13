'use client'

import SectionContent from '@/components/app-elements/section-content'
import SectionLatestUpdate from '@/components/app-elements/section-latest-update'
import SectionProfile from '@/components/app-elements/section-profile'
import SectionTechStack from '@/components/app-elements/section-techstack'
import type { FC } from 'react'
import type { ViewVersionProps } from './desktop-version'

const MobileVersion: FC<ViewVersionProps> = ({
  content,
}) => {
  return (
    <main className="relative w-[calc(100dvw-16px)] lg:max-w-[540px] min-h-[calc(100dvh-16px)] mx-auto z-3">
      <SectionProfile view="mobile" />
      {/* <SectionTechStack />
      <SectionLatestUpdate /> */}

      <SectionContent {...content} />
    </main>
  )
}

export default MobileVersion