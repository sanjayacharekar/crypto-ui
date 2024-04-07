import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RestoreIcon from '@mui/icons-material/Restore';
import Card from "./component/Card";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-5 p-5 sm:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex sm:justify-between ">

        <span className="inline-flex items-center rounded-full bg-gray-50 pr-5 py-1 text-[#280e5f] ring-1 ring-inset ring-gray-500/10 drop-shadow-md ">
          <Image src='/newCurr.png' className="relative z-30 top-0 -left-2 rotate-[-120deg]	translate-y-4 scale-150" alt="img" width={30} height={30} />

          <Image src='/neo_1747321.png' className="relative scale-[1.7] z-50 -top-1 -left-5 skew-y-6	skew-x-6" alt="img" width={30} height={30} />
          <h5 className="font-bold text-base sm:text-2xl mr-2 ">BNBUSD</h5>  <small className="text-xs sm:text-sm">$234.4532</small>
        </span>

        {/* middle nav */}
        <span className="inline-flex items-center justify-between rounded-full bg-gray-50 px-3 py-1 text-[#280e5f] ring-1 ring-inset ring-gray-500/10 drop-shadow-md my-5">
          <ArrowBackIcon className="text-[#1ec7d3]" />
          <div className="flex justify-center items-center">
            <Image src='/rabbit.png' className="relative z-30 scale-150 rotate-[30deg] translate-x-6 translate-y-1 grayscale-[60%]" alt="img" width={25} height={30} style={{ transformOrigin: 'bottom center' }} />
            <Image src='/rabbit.png' className="relative z-40 scale-150 grayscale-[30%]" alt="img" width={25} height={30} style={{ transformOrigin: 'bottom center' }} />
            <Image src='/rabbit.png' className="relative z-50 scale-150 rotate-[-30deg] -translate-x-6 top-2" alt="img" width={25} height={30} style={{ transformOrigin: 'bottom center' }} />
          </div>
          <ArrowForwardIcon className="text-[#1ec7d3]" />
        </span>


        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-[#7644d8] ring-1 ring-inset ring-gray-500/10 drop-shadow-md">
            <h5 className="font-bold text-base sm:text-2xl mx-2 ">00:38</h5>  <small className="text-xs sm:text-sm">5m</small>
            <Image src='/clock.png' className="relative z-50 scale-[1.9] rotate-[-20deg] sm:translate-x-6 top-1" alt="img" width={25} height={30} style={{ transformOrigin: 'bottom center' }} />
          </span>

          <button type="button" className=" ml-5 bg-[#7a6fab] p-2 rounded-xl">
            <HelpOutlineIcon />
          </button>
          <button type="button" className=" mx-2 bg-[#7a6fab] p-2 rounded-xl">
            <EmojiEventsIcon />
          </button>
          <button type="button" disabled className="bg-[#e9eaeb] p-2 rounded-xl">
            <RestoreIcon />
          </button>
        </div>
      </div>
      <Card />

    </main>
  );
}
