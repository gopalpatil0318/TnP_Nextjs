"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";

interface Event {
  id: string;
  name: string;
  images: string[];
}

// Hero Component
const Hero = () => (
  <div className="text-black py-16 px-8 text-center">
    <h1 className="text-5xl font-bold mb-4">GALLERY</h1>
    <h2 className="text-3xl font-semibold mb-6">Training And Placement Department</h2>
    <p className="max-w-3xl mx-auto text-lg">
      The Training and Placement Department showcases student achievements, industry partnerships, and various training programs designed to enhance career readiness and placement success. Explore the highlights of student growth and opportunities provided by the department.
    </p>
  </div>
);

interface RotatingPhotoRowProps {
  images: string[];
  direction: "left" | "right";
}

const RotatingPhotoRow: React.FC<RotatingPhotoRowProps> = ({ images, direction }) => (
  <div className="overflow-hidden py-8">
    <motion.div
      animate={{ x: direction === "left" ? [0, -1000] : [-1000, 0] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className="flex"
    >
      {images.concat(images).map((src, index) => (
        <div key={index} className="mx-2">
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            width={256}
            height={256}
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}
    </motion.div>
  </div>
);

interface TabGalleryProps {
  events: Event[];
}

const TabGallery: React.FC<TabGalleryProps> = ({ events }) => {
  return (
    <Tabs defaultValue={events[0].id} className="w-full">
      <TabsList className="flex justify-center mb-8">
        {events.map((event) => (
          <TabsTrigger key={event.id} value={event.id} className="px-4 py-2 text-lg">
            {event.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {events.map((event) => (
        <TabsContent key={event.id} value={event.id}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {event.images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`${event.name} image ${index + 1}`}
                width={256}
                height={256}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

const GalleryPage: React.FC = () => {
  const [events] = useState<Event[]>([
    {
      id: "placement-drive",
      name: "Placement Drive",
      images: [
        "/gallery/g12.jpg",
        "/gallery/g13.jpg",
        "/gallery/g14.jpg",
        "/gallery/g15.jpg",
        "/gallery/g16.jpg",
        "/gallery/g1.jpg",
        "/gallery/g3.jpg",
        "/gallery/g4.jpg",
        "/gallery/g5.jpg",
        "/gallery/g6.jpg",
        "/gallery/g7.jpg",
        "/gallery/g9.jpg",
        "/gallery/g10.jpg",
        "/gallery/g11.jpg",
      ],
    },
    {
      id: "training-workshop",
      name: "Training Workshop",
      images: [
        "/gallery/g1.jpg",
        "/gallery/g3.jpg",
        "/gallery/g4.jpg",
        "/gallery/g5.jpg",
        "/gallery/g6.jpg",
        "/gallery/g7.jpg",
        "/gallery/g9.jpg",
        "/gallery/g10.jpg",
        "/gallery/g11.jpg",
        "/gallery/g12.jpg",
        "/gallery/g13.jpg",
        "/gallery/g14.jpg",
        "/gallery/g15.jpg",
        "/gallery/g16.jpg",
      ],
    },
    {
      id: "industry-visit",
      name: "Industry Visit",
      images: [
        "/gallery/g6.jpg",
        "/gallery/g7.jpg",
        "/gallery/g8.jpg",
        "/gallery/g9.jpg",
        "/gallery/g10.jpg",
        "/gallery/g11.jpg",
        "/gallery/g12.jpg",
        "/gallery/g13.jpg",
        "/gallery/g1.jpg",
        "/gallery/g2.jpg",
        "/gallery/g3.jpg",
        "/gallery/g4.jpg",
        "/gallery/g5.jpg",
        "/gallery/g14.jpg",
        "/gallery/g15.jpg",
        "/gallery/g16.jpg",
      ],
    },
  ]);

  const rowImages = [
    "/gallery/g1.jpg",
    "/gallery/g3.jpg",
    "/gallery/g4.jpg",
    "/gallery/g5.jpg",
    "/gallery/g6.jpg",
    "/gallery/g7.jpg",
    "/gallery/g9.jpg",
    "/gallery/g10.jpg",
    "/gallery/g11.jpg",
    "/gallery/g12.jpg",
    "/gallery/g13.jpg",
    "/gallery/g14.jpg",
    "/gallery/g15.jpg",
    "/gallery/g16.jpg",
    "/gallery/g1.jpg",
    "/gallery/g2.jpg",
    "/gallery/g3.jpg",
    "/gallery/g4.jpg",
    "/gallery/g5.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <RotatingPhotoRow images={rowImages} direction="left" />
      <RotatingPhotoRow images={rowImages} direction="right" />
      <RotatingPhotoRow images={rowImages} direction="left" />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Event Galleries</h2>
        <TabGallery events={events} />
      </div>
    </div>
  );
};

export default GalleryPage;
