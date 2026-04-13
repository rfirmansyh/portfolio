import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Badges from "./badges";

const SectionTechStack = () => {
  return (
    <div
      id="techstack"
      className="w-full max-w-[372px] flex flex-col items-start gap-[16px] bg-white shadow-md rounded-[8px] border border-[#EEEDED] p-[20px]"
      style={{
        visibility: "hidden",
        top: '100%',
        position: 'absolute'
      }}
    >
      <h1 className="text-[#3E3E3E] text-[18px] font-mono font-semibold leading-none">
        Tech stack
      </h1>

      <Tabs defaultValue="primary" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="primary">Primary</TabsTrigger>
          <TabsTrigger value="testing">Testing</TabsTrigger>
          <TabsTrigger value="styling">Styling</TabsTrigger>
        </TabsList>
        <TabsContent value="primary">
          <div className="flex flex-wrap gap-[8px]">
            <Badges slug="javascript" />
            <Badges slug="typescript" />
            <Badges slug="express" />
            <Badges slug="react" />
            <Badges slug="next" />
            <Badges slug="vue" />
            <Badges slug="nuxt" />
          </div>
        </TabsContent>
        <TabsContent value="testing">
          <div className="flex flex-wrap gap-[8px]">
            <Badges slug="playwright" />
            <Badges slug="jest" />
            <Badges slug="cypress" />
          </div>
        </TabsContent>
        <TabsContent value="styling">
          <div className="flex flex-wrap gap-[8px]">
            <Badges slug="tailwind" />
            <Badges slug="scss" />
            <Badges slug="styled" />
            <Badges slug="materialui" />
            <Badges slug="shadcn" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SectionTechStack;
