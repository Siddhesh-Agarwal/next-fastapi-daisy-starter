"use client";
import { IconType } from 'react-icons'
import {
  SiDaisyui,
  SiFastapi,
  SiFramer,
  SiNextdotjs,
  SiPython,
  SiPostcss,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import SquigglyLine from './components/SquigglyLine'
import { Toaster, toast } from 'sonner';

type Tool = {
  icon: IconType;
  link: string;
}

const tools: Tool[] = [
  {
    icon: SiTypescript,
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: SiNextdotjs,
    link: "https://nextjs.org/",
  },
  {
    icon: SiTailwindcss,
    link: "https://tailwindcss.com/",
  },
  {
    icon: SiPostcss,
    link: "https://postcss.org/",
  },
  {
    icon: SiDaisyui,
    link: "https://daisyui.com/",
  },
  {
    icon: SiFramer,
    link: "https://www.framer.com/motion",
  },
  {
    icon: SiPython,
    link: "https://www.python.org/",
  },
  {
    icon: SiFastapi,
    link: "https://fastapi.tiangolo.com/",
  },
]

export default function Home() {
  // create function to handle button click
  // Send get request to /api/greet
  // On success, show toast with the message
  const handleClick = () => {
    toast.success("Hello, World!")
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center p-24">
        <h1 className="text-4xl font-bold text-center">
          <span className='text-[#0070f3]'>Next.js</span>
          {' '} + {' '}
          <span className='text-[#009485]'>FastAPI</span>
          {' '} + {' '}
          <span className='text-[#ff5a00]'>DaisyUI</span>
          <br />
          <span className='relative whitespace-nowrap'>
            <SquigglyLine />
            <span className='relative text-fuchsia-600'>
              Starter
            </span>
          </span>
        </h1>

        <div className="flex space-x-4 mt-10">
          {tools.map((tool, key) => (
            <a
              key={key}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-300 hover:text-gray-100 transition-colors duration-200"
            >
              <tool.icon />
            </a>
          ))}
        </div>
      </div>

      <Toaster richColors expand={true} position="bottom-right" />

      <div className='flex flex-col items-center justify-center space-y-4 max-w-md w-full'>
        <button className='d-btn d-btn-outline d-btn-success w-full' onClick={() => handleClick()}>
          Click Me! 🎉
        </button>
      </div>
    </main>
  )
}
