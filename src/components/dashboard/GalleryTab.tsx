import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { GalleryParallax } from "./GalleryParallax"

export function GalleyTab() {
  return (
    <div className="py-28 overflow-hidden antialiased relative flex self-auto [perspective:1000px] [transform-style:preserve-3d] justify-center">
      <Tabs defaultValue="tab1" className="w-full">

        <div className="flex justify-center mb-4">
          <TabsList className="grid w-[400px] grid-cols-2">
            <TabsTrigger value="tab1">Placement 2023-24</TabsTrigger>
            <TabsTrigger value="tab2">Placed Students 2023-24</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="tab1" className="w-full">
          <GalleryParallax />
        </TabsContent>
        <TabsContent value="tab2" className="w-full">
          <GalleryParallax />
        </TabsContent>
      </Tabs>
    </div>
  )
}
