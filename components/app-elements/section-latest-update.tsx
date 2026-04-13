import { format } from "date-fns";
import Image from "next/image";

const blogs = [
  {
    id: "blog-1",
    image:
      "https://miro.medium.com/v2/resize:fill:320:214/1*NDQxM_iEoexjpPCx399u7g.png",
    title: "Choosing the Right Authentication for Next.js: A Practical Guide",
    link: "#",
    createdAt: format(new Date(2026, 0, 2), "MMM d, yyyy"),
    likes: 8,
    comments: 2,
  },
  {
    id: "blog-2",
    image:
      "https://miro.medium.com/v2/resize:fill:320:214/1*8aE1bGQaNJtW0twLn9ibjA.png",
    title:
      "Next.js Rendering Strategies: SSR, SSG, ISR, CSR, and PPR",
    link: "#",
    createdAt: format(new Date(2026, 0, 6), "MMM d, yyyy"),
    likes: 12,
    comments: 4,
  },
];

const SectionLatestUpdate = () => {
  return (
    <div
      id="latest-update"
      className="w-full max-w-[372px] flex flex-col items-start gap-[16px] bg-white shadow-md rounded-[8px] border border-[#EEEDED] p-[20px]"
      style={{
        visibility: "hidden",
        top: '100%',
        position: 'absolute'
      }}
    >
      <h1 className="text-[#3E3E3E] text-[18px] font-mono font-semibold leading-none">
        Latest Updates
      </h1>

      <div className="flex flex-col gap-[16px]">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex items-center gap-[12px]">
            <div className="relative overflow-hidden w-[62px] h-[42px] rounded-[4px]">
              <Image
                fill
                alt="Firman Profile Picture"
                src={blog.image}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col gap-[2px]">
              <h3 className="font-sans font-semibold text-[10px]">
                {blog.title}
              </h3>
              <div className="flex items-center gap-[8px] text-[8px] text-[#BDBDBD]">
                <span>{blog.createdAt}</span>

                <span className="flex items-center gap-[4px]">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.25078 0.25V1.25C5.25078 1.3875 5.13828 1.5 5.00078 1.5C4.86328 1.5 4.75078 1.3875 4.75078 1.25V0.25C4.75078 0.1125 4.86328 0 5.00078 0C5.13828 0 5.25078 0.1125 5.25078 0.25ZM3.70859 0.360938L4.20859 1.11094C4.28516 1.22656 4.25391 1.38125 4.13984 1.45781C4.02578 1.53438 3.86953 1.50313 3.79297 1.38906L3.29297 0.639063C3.21641 0.523438 3.24766 0.36875 3.36172 0.292188C3.47578 0.215625 3.63203 0.246875 3.70859 0.360938ZM2.11016 1.85938C2.25703 1.7125 2.49453 1.7125 2.63984 1.85938L4.57422 3.79219C4.73203 3.95 5.00078 3.8375 5.00078 3.61563V3C5.00078 2.72344 5.22422 2.5 5.50078 2.5C5.77734 2.5 6.00078 2.72344 6.00078 3V5.4C6.00078 6.29219 5.53203 7.11875 4.76797 7.57813C3.76797 8.17813 2.48984 8.02031 1.66641 7.19688L0.110156 5.64063C-0.0367187 5.49375 -0.0367187 5.25625 0.110156 5.11094C0.257031 4.96563 0.494531 4.96406 0.639844 5.11094L1.46797 5.93906C1.56328 6.03438 1.71797 6.03438 1.81328 5.93906C1.90859 5.84375 1.90859 5.68906 1.81328 5.59375L0.360156 4.14063C0.213281 3.99375 0.213281 3.75625 0.360156 3.61094C0.507031 3.46563 0.744531 3.46406 0.889844 3.61094L2.34297 5.06406C2.43828 5.15938 2.59297 5.15938 2.68828 5.06406C2.78359 4.96875 2.78359 4.81406 2.68828 4.71875L0.860156 2.89063C0.713281 2.74375 0.713281 2.50625 0.860156 2.36094C1.00703 2.21563 1.24453 2.21406 1.38984 2.36094L3.21797 4.18906C3.31328 4.28438 3.46797 4.28438 3.56328 4.18906C3.65859 4.09375 3.65859 3.93906 3.56328 3.84375L2.11016 2.39063C1.96328 2.24375 1.96328 2.00625 2.11016 1.86094V1.85938ZM6.76797 7.57656C6.38984 7.80313 5.97266 7.92188 5.55391 7.9375C6.30547 7.31875 6.75078 6.39063 6.75078 5.4V3.86719C6.87891 3.86563 7.00078 3.76719 7.00078 3.61719V3.00156C7.00078 2.725 7.22422 2.50156 7.50078 2.50156C7.77734 2.50156 8.00078 2.725 8.00078 3.00156V5.40156C8.00078 6.29375 7.53203 7.12031 6.76797 7.57969V7.57656ZM6.63984 0.292188C6.75547 0.36875 6.78516 0.523438 6.70859 0.639063L6.20859 1.38906C6.13203 1.50469 5.97734 1.53438 5.86172 1.45781C5.74609 1.38125 5.71641 1.22656 5.79297 1.11094L6.29297 0.360938C6.36953 0.245313 6.52422 0.215625 6.63984 0.292188Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                  <span>{blog.likes}</span>
                </span>

                <span className="flex items-center gap-[4px]">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6.5C5.933 6.5 7.5 5.5 7.5 3.5C7.5 1.5 5.933 0.5 4 0.5C2.067 0.5 0.5 1.5 0.5 3.5C0.5 4.58 0.957 5.3685 1.682 5.865L1.727 6.9455C1.73143 7.05115 1.76473 7.15356 1.82328 7.24161C1.88183 7.32966 1.96339 7.39997 2.0591 7.44492C2.15482 7.48986 2.26102 7.50771 2.36616 7.49653C2.47131 7.48535 2.57138 7.44557 2.6555 7.3815L3.8165 6.4965C3.8775 6.49883 3.93867 6.5 4 6.5Z"
                      fill="#BDBDBD"
                    />
                  </svg>

                  <span>{blog.comments}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cursor-pointer text-[12px] text-[#7F7F7F]">
        See more {">"}
      </div>
    </div>
  );
};

export default SectionLatestUpdate;
