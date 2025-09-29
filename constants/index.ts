import {
  Home,
  Video,
  Image,
  DraftingCompass,
  Pen,
  WandSparkles,
  Folder,
  Play,
  Zap,
  ArrowUpDown,
  Shuffle,
} from "lucide-react";

interface GenerateItem {
  id: string;
  title: string;
  description: string;
  icon: any;
  isNew?: boolean;
  status: "Open" | "Coming Soon";
}

export const GENERATE_ITEMS: GenerateItem[] = [
  {
    id: "image",
    title: "Image",
    description:
      "Generate images with custom styles like Flux and Stable diffusion.",
    icon: Image,
    isNew: true,
    status: "Open",
  },
  {
    id: "video",
    title: "Video",
    description: "Generate videos with Haiku, Pika, Runway, Luma, and more.",
    icon: Video,
    status: "Open",
  },
  {
    id: "realtime",
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    icon: Zap,
    status: "Open",
  },
  {
    id: "enhancer",
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 32K.",
    icon: WandSparkles,
    isNew: true,
    status: "Open",
  },
  {
    id: "edit",
    title: "Edit",
    description:
      "Add text, change style, or edit partial photos and generations.",
    icon: Pen,
    isNew: true,
    status: "Open",
  },
  {
    id: "video-upscale",
    title: "Video Upscale",
    description: "Lip sync any video to any audio. Upload and sync easily.",
    icon: Play,
    isNew: true,
    status: "Open",
  },
  {
    id: "motion-transfer",
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    icon: ArrowUpDown,
    isNew: true,
    status: "Open",
  },
  {
    id: "train",
    title: "Train",
    description: "Train Flux to replicate your style, products, or characters.",
    icon: Shuffle,
    status: "Open",
  },
];

interface modelITEMS {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: string;
}

export const MODEL_ITEMS: modelITEMS[] = [
  {
    id: 1,
    title: "WAN 2.2",
    subtitle: "Image Generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and realistic features.",
    buttonText: "Try WAN 2.2",
    image: "/image7.webp",
  },
  {
    id: 2,
    title: "FLUX.1 Krea",
    subtitle: "Open Source",
    description:
      "We've made all the weights for our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Images.",
    buttonText: "Try FLUX.1",
    image: "/image4.webp",
  },
  {
    id: 3,
    title: "Stable Diffusion 3.5",
    subtitle: "Latest Model",
    description:
      "Experience the next generation of image generation with improved quality, better prompt understanding, and enhanced creative control.",
    buttonText: "Try SD 3.5",
    image: "/image2.webp",
  },
  {
    id: 4,
    title: "DALL-E 3",
    subtitle: "OpenAI Model",
    description:
      "Create stunning, photorealistic images from text descriptions with OpenAI's most advanced image generation model.",
    buttonText: "Try DALL-E 3",
    image: "/image3.webp",
  },
  {
    id: 5,
    title: "Midjourney V6",
    subtitle: "Artistic Excellence",
    description:
      "Push the boundaries of AI art with Midjourney's latest model, offering unparalleled artistic quality and style control.",
    buttonText: "Try Midjourney",
    image: "/image4.webp",
  },
];

export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home", icon: Home },
  { href: "/", key: "Images", icon: Image },
  { href: "/", key: "Video", icon: Video },
  { href: "/", key: "Enchaner", icon: WandSparkles },
  { href: "/", key: "RealTime", icon: Pen },
  { href: "/", key: "Edit", icon: DraftingCompass },
  { href: "/", key: "Assets", icon: Folder },
];
