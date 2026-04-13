import { Fragment, type CSSProperties, type FC } from 'react'
import { Shimmer } from '../ai-elements/shimmer'
import { Message, MessageContent, MessageResponse } from '../ai-elements/message'
import { ChainOfThought, ChainOfThoughtContent, ChainOfThoughtHeader } from '../ai-elements/chain-of-thought';
import { cn, formatExperienceRange, formatYrsMos } from '@/lib/utils';
import { ListCheck, ChevronDown, TrendingUpIcon } from 'lucide-react';
import DividerLabeled from './divider-labeled';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import type { ViewProps } from '../desktop-version';
import { ThumbnailPreviewer } from './thumbnail-previewer';

export type SectionContentProps = {
  isActive?: boolean;
  content?: string;
  // eslint-disable-next-line
  experiences: Array<any>;
  showExp: (open: boolean, idx: number) => void;
  containerRef?: React.RefObject<HTMLDivElement | null>;
} & ViewProps

const SectionContent: FC<SectionContentProps> = ({
  view,
  isActive,
  content,
  experiences,
  showExp,
  containerRef,
}) => {
  const rootStyle: CSSProperties = view === 'desktop' ? {
    top: 'calc(50% - 62px)',
    left: 'calc(50% - (760px / 2))',
    position: 'absolute'
  } : {
    top: 'calc(50% - 62px)',
    position: 'absolute'
  }

  const getformatExperienceRange = (exp: any) => {
    const firstCareer = exp.careerProgressions[exp.careerProgressions.length - 1];
    const lastCareer = exp.careerProgressions[0];

    const startAt = new Date(firstCareer.startAt);
    const endAt = new Date(lastCareer.endAt);

    return formatExperienceRange(startAt, endAt);
  }

  const getExperienceDuration = (exp: any) => {
    const firstCareer = exp.careerProgressions[exp.careerProgressions.length - 1];
    const lastCareer = exp.careerProgressions[0];

    const startAt = new Date(firstCareer.startAt);
    const endAt = new Date(lastCareer.endAt);

    return formatYrsMos(startAt, endAt);
  }

  const getFirstCareerRole = (exp: any) => {
    const firstCareer = exp.careerProgressions[0];
    return firstCareer.role;
  }

  return (
    <div
      id="content"
      className="w-full max-w-[760px] flex flex-col gap-[16px] bg-white shadow-md rounded-[8px] border border-[#EEEDED] p-[24px]"
      style={rootStyle}
    >
      <Shimmer
        as="h2"
        className="text-[20px] font-semibold"
        duration={1}
        spread={3}
        isActive={isActive}
      >
        Generating Profile...
      </Shimmer>

      <div className="bg-[#F6F6F6] p-[12px] rounded-[6px] font-normal">
        <Message from="assistant">
          <MessageContent className="text-[12px] md:text-[14px]">
            <MessageResponse>{content}</MessageResponse>
          </MessageContent>
        </Message>
      </div>

      <ChainOfThought defaultOpen className="w-full max-w-none">
        <ChainOfThoughtHeader
          id="content-generate-experience"
          style={{
            visibility: "hidden",
            transform: 'translate(0, 10%)',
          }}
        >
          Generating experiences
        </ChainOfThoughtHeader>
        <ChainOfThoughtContent className="relative">
          <div className="absolute top-0 bottom-0 left-[6.5px] w-[1px] h-full rounded-sm bg-[#145DD925]"></div>
          <div className="flex flex-col gap-[16px]">
            {experiences.map((exp, idx) => (
              <div key={idx} id={`content-generate-experience-${idx}`} className="hidden">
                <div className="flex gap-[8px] sm:gap-[16px]">
                  <div className="flex-none w-[14px] h-[14px] rounded-full bg-[#145DD925] flex items-center justify-center">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#145DD9]" />
                  </div>
                  <div className="@container w-full">
                    <div className="flex gap-[16px]">
                      <div className="text-[8px] @min-[420px]:text-[10px]">
                        <ThumbnailPreviewer
                          src={exp.thumbnail}
                          srcHD={exp.thumbnailHD}
                          alt={`Thumbnail at ${exp.companyName}`}
                          companyName={exp.companyName}
                          role={exp.careerProgressions[0]?.role ?? exp.role}
                          containerRef={containerRef}
                        />
                      </div>
                      <div className="flex-auto">
                        <h2 className="text-[16px] @min-[520px]:text-[20px] font-semibold">
                          {getFirstCareerRole(exp)} at {exp.companyName}
                        </h2>

                        <h3 className="hidden @min-[390px]:grid items-center auto-cols-max grid-flow-col gap-2 text-[10px] text-[#7F7F7F] font-sans font-normal">
                          <span>{exp.location}</span>
                          <hr className="w-[1px] bg-[#E5E5E5] h-[80%] border-none" />
                          <span>{exp.type}</span>
                          <hr className="w-[1px] bg-[#E5E5E5] h-[80%] border-none" />
                          <span>
                            {getformatExperienceRange(exp)}{" "}
                            <strong>
                              ({getExperienceDuration(exp)})
                            </strong>
                          </span>
                        </h3>
                      </div>
                    </div>

                    <h3 className="grid @min-[390px]:hidden mt-2 items-center auto-cols-max grid-flow-col gap-2 text-[8px] text-[#7F7F7F] font-sans font-normal">
                      <span>{exp.location}</span>
                      <hr className="w-[1px] bg-[#E5E5E5] h-[80%] border-none" />
                      <span>{exp.type}</span>
                      <hr className="w-[1px] bg-[#E5E5E5] h-[80%] border-none" />
                      <span>
                        {formatExperienceRange(exp.startAt, exp.endAt)}{" "}
                        <strong>
                          ({formatYrsMos(exp.startAt, exp.endAt)})
                        </strong>
                      </span>
                    </h3>

                    <Collapsible open={exp.showDetail} onOpenChange={(open) => showExp(open, idx)}>
                      <CollapsibleTrigger>
                        {/* {exp.showDetail
                          ? (
                            <DividerLabeled
                              icon={<ListCheck size={10} />}
                              label="Collapse Achievements"
                              className="mt-[8px] mb-[4px] md:mt-[16px] md:mb-[8px]"
                            />
                          )
                          : (
                            <DividerLabeled
                              icon={<ChevronDown size={10} />}
                              label="Show details"
                              className="mt-[8px] md:mt-[16px]"
                            />
                          )
                        } */}

                        <DividerLabeled
                          icon={<ChevronDown size={10} className={cn('transition-all', { 'rotate-180': exp.showDetail })} />}
                          label={exp.showDetail ? 'Hide Details' : 'Show details'}
                          className="mt-[8px] cursor-pointer"
                        />

                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        {exp.careerProgressions.length > 1 && (
                          <Fragment>
                            <DividerLabeled
                              icon={<TrendingUpIcon size={10} />}
                              label="Career Progression"
                              className="mt-[8px] mb-[4px] md:mt-[8px] md:mb-[8px]"
                            />
                            <ul className="list-disc list-inside flex flex-col gap-[8px] pb-[8px]">
                              {exp.careerProgressions.map((career: any, idx: number) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-[12px] text-[10px] md:text-[12px] text-[#3E3E3E]"
                                >
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="10"
                                      height="10"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="10"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      aria-hidden="true"
                                      className="relative top-[4px]"
                                    >
                                      <circle cx="12.1" cy="12.1" r="1"></circle>
                                    </svg>
                                  </div>
                                  <div>
                                    <span>{career.role}</span>
                                    <span> | </span>
                                    <span className="text-gray-500">
                                      <span>
                                        {formatExperienceRange(career.startAt, career.endAt)}{" "}
                                        <strong>
                                          ({formatYrsMos(career.startAt, career.endAt)})
                                        </strong>
                                      </span>
                                    </span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </Fragment>
                        )}

                        <DividerLabeled
                          icon={<ListCheck size={10} />}
                          label="Key Achievements"
                          className="mt-[8px] mb-[4px] md:mt-[8px] md:mb-[8px]"
                        />
                        <ul className="list-disc list-inside flex flex-col gap-[8px]">
                          {/* eslint-disable-next-line */}
                          {exp.responsibilities.map((resp: any, idx: number) => (
                            <li
                              key={idx}
                              className="flex items-start gap-[12px] text-[10px] md:text-[12px] text-[#3E3E3E]"
                            >
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="10"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                  className="relative top-[4px]"
                                >
                                  <circle cx="12.1" cy="12.1" r="1"></circle>
                                </svg>
                              </div>
                              <div>{resp}</div>
                            </li>
                          ))}
                        </ul>
                        {/* 
                        <DividerLabeled
                          icon={<Wrench size={10} />}
                          label="Tools / Tech Stack"
                          className="my-[16px]"
                        />

                        <div className="flex gap-[8px]">
                          {exp.tools.map((tool) => (
                            <Badges key={tool} slug={tool as BadgeSlug} />
                          ))}
                        </div> */}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ChainOfThoughtContent>
      </ChainOfThought>
    </div>
  )
}

export default SectionContent