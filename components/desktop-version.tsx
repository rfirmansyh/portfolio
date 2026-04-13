'use client'

import SectionContent, { type SectionContentProps } from '@/components/app-elements/section-content'
import SectionLatestUpdate from '@/components/app-elements/section-latest-update'
import SectionProfile from '@/components/app-elements/section-profile'
import SectionTechStack from '@/components/app-elements/section-techstack'
import type { FC } from 'react'

export type ViewProps = {
  view?: 'desktop' | 'mobile';
}
export type ViewVersionProps = {
  content: SectionContentProps;
}

const DesktopVersion: FC<ViewVersionProps> = ({
  content,
}) => {
  return (
    <main className="relative w-full lg:max-w-[1150px] min-h-[660px] mx-auto z-3">
      <SectionProfile view="desktop" />
      <SectionTechStack />
      <SectionLatestUpdate />

      <SectionContent view="desktop" {...content} />
    </main>
  )
}

export default DesktopVersion