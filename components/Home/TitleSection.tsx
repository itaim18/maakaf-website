import Image from 'next/image';
import DiscordLink from '@/components/Common/DiscordLink';

export default function TitleSection() {
  return (
    <div className="relative px-4 md:px-14 flex justify-between h-[70vh] pb-10">
      <div className="flex flex-col items-center w-full mt-[1.2rem] md:mt-2 lg:mt-0 md:px-10 lg:px-12  gap-7 md:w-1/2 md:items-start">
        <h1 className="w-full text-center md:text-[40px] lg:text-5xl md:text-right">
          קהילת מעקף&nbsp;-
          <br />
          קוד פתוח ישראל
        </h1>
        <h4 className="w-full text-center md:text-right">
          מטרת הקהילה היא חיבור
          <br />
          בין מפתחים ישראלים המעוניינים
          <br />
          לתרום לקוד פתוח,
          <br />
          ובין ספריות קוד פתוח ישראליות.
          <br />
          <br />
          הפעילות של הקהילה מתקיימת
          <br />
          בשרת הדיסקורד שלנו.
        </h4>
        <a
          href="https://discord.com/invite/a2VyCjRk2M"
          target="_blank"
          className="flex items-center justify-center gap-2 py-2 text-xs rounded-full discord-btn px-7 dark:hover:bg-purple-200 item-hover-transition"
        >
          בואו לדיסקורד
          <Image
            src={'/images/discord.png'}
            alt="discord"
            width={20}
            height={20}
          />
        </a>
      </div>
      <div className="absolute  xl:h-[90vh]  top-0  lg:mt-[1.2rem]  left-0 w-full h-full 2xl:w-full -z-10 md:z-0 opacity-40 md:opacity-100 md:static md:w-1/2">
        <div
          className={`h-full  bg-contain bg-top bg-[url("/images/skeleton_loader.png")] dark:bg-[url("/images/skeleton_loader_dark.png")] md:bg-left bg-no-repeat`}
        />
      </div>
    </div>
  );
}
