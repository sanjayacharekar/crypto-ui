import React from 'react'
import BlockIcon from '@mui/icons-material/Block';
import HexagonIcon from '@mui/icons-material/Hexagon';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
function Card() {
    return (
        <div className='flex justify-center items-center gap-2 flex-col sm:flex-row'>
            {/* disabled card */}
            <div className=" opacity-75 bg-white border border-[#dadbe8] border-b-4 rounded-2xl shadow drop-shadow-md">
                {/* card header  */}
                <div className=' bg-[#dadbe8] border-[#dadbe8] flex justify-between items-center overflow-hidden rounded-t-2xl text-[#bdc3cf] p-2'>
                    <div className='flex justify-center items-center'>
                        <span className='mr-2'><BlockIcon /></span>
                        <span>Expired</span>
                    </div>
                    <span className=' text-sm text-[#bdc3cf]'>#123456</span>
                </div>
                {/* main section */}
                <div className="flex justify-center items-center">
                    <div className="flex">
                        {/* polygon start */}
                        <div>
                            {/* up content */}
                            <div className='flex justify-center items-center flex-col relative top-14 z-10'>
                                <h5 className='text-lg font-bold text-[#67cdbd]'>UP</h5>
                                <span className='text-[#9d9bc6] '><b>1.76x</b> Payout</span>
                            </div>
                            {/* polygon icon  */}
                            <div className="relative w-[350px] h-[350px] rotate-90 -mt-11">
                                <HexagonIcon fontSize='large' className="absolute w-[350px] h-[350px] inset-0 text-[#dfe5f0]" style={{ maskImage: 'linear-gradient(to left, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)', WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)' }} />
                                <HexagonIcon fontSize='large' className="absolute w-[350px] h-[350px] inset-0 text-[#db6ab0]" style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)' }} />

                                {/* inner square */}
                                <div className='border-[#db6ab0] border-2 rounded-xl flex flex-col relative  -rotate-90 z-30 bg-white translate-y-28 p-2 mx-3 text-[#504185]'>
                                    <h6 className='font-bold text-xs'>CLOSED PRICE</h6>
                                    <div className='flex justify-between items-center'>
                                        <h3 className='text-[#db6ab0] font-bold text-xl'>$228.9673</h3>
                                        <button type="button" className="text-white bg-[#db6ab0] font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center mb-2">
                                            <ArrowDownwardIcon />
                                            $-0.5791
                                        </button>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h5 className='text-sm font-semibold'>Locked Price:</h5>
                                            <h4 className='font-bold'>Prize Pool:</h4>
                                        </div>
                                        <div className='text-end'>
                                            <h5 className='text-sm font-semibold'>$229.5265</h5>
                                            <h4 className='font-bold'>5.2427 BNB</h4>
                                        </div>
                                    </div>
                                </div>

                                {/* payout text*/}
                                <div className='flex justify-center items-center flex-col relative translate-x-24 translate-y-7 -rotate-90 z-40 '>
                                    <span ><b>2.76x</b> Payout</span>
                                    <h5 className='text-lg font-bold '>DOWN</h5>
                                </div>
                            </div>

                            {/* <div className="w-[100px] h-[50px] relative">
                                <div className="absolute top-[25px] border-l-[50px] border-r-[50px] border-b-[25px]"></div>
                                <div className="bottom-[25px] border-l-[50px] border-r-[50px] border-b-[25px] border-l-transparent border-r-transparent">
                                </div>
                            </div>
                            <div className="w-[100px] rotate-180 h-[50px] relative">
                                <div className="absolute top-[25px] border-l-[50px] border-r-[50px] border-b-[25px] border-[#da6ab0]">
                                    2.32X Payout
                                    DOWN
                                </div>
                                <div className="bottom-[25px] border-l-[50px] border-r-[50px] border-b-[25px] border-l-transparent border-r-transparent">
                                </div>
                            </div> */}
                        </div>
                        {/* polygon end */}

                    </div>
                </div>

            </div>

            {/* live card */}
            <div className="  bg-white border border-[#7644d8] border-b-4 rounded-2xl shadow drop-shadow-md">
                {/* card header  */}
                <div className='  border-[#dadbe8] flex justify-between items-center overflow-hidden rounded-t-2xl text-[#7644d8] p-2'>
                    <div className='flex justify-center items-center'>
                        <span className='mr-1'><PlayCircleOutlineIcon /></span>
                        <span className='font-bold'>LIVE</span>
                    </div>
                    <span className=' text-sm font-medium text-[#7644d8]'>#123456</span>

                </div>

                <div className="w-full bg-gray-200 h-2.5 ">
                    <div className="bg-[#7644d8] h-2.5 " style={{ width: "90%" }}></div>
                </div>

                {/* main section */}
                <div className="flex justify-center items-center">
                    <div className="flex">
                        {/* polygon start */}
                        <div>
                            {/* up content */}
                            <div className='flex justify-center items-center flex-col relative top-14 z-10'>
                                <h5 className='text-lg font-bold text-[#33d0ab]'>UP</h5>
                                <span className='text-[#9d9bc6] '><b>2.76x</b> Payout</span>
                            </div>
                            {/* polygon icon  */}
                            <div className="relative w-[350px] h-[350px] rotate-90 -mt-11">
                                <HexagonIcon fontSize='large' className="absolute w-[350px] h-[350px] inset-0 text-[#eef5f5]" style={{ maskImage: 'linear-gradient(to left, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)', WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)' }} />
                                <HexagonIcon fontSize='large' className="absolute w-[350px] h-[350px] inset-0 text-[#ec4a9e]" style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)' }} />

                                {/* inner square */}
                                <div className='border-[#ec4a9e] border-2 rounded-xl flex flex-col relative  -rotate-90 z-30 bg-white translate-y-28 p-2 mx-3 text-[#290e5e]'>
                                    <h6 className='font-bold text-xs'>LAST PRICE</h6>
                                    <div className='flex justify-between items-center'>
                                        <h3 className='text-[#ec4a9e] font-bold text-xl underline  decoration-dotted decoration-[#7c71ac] pb-3'>$228.5332</h3>
                                        <button type="button" className="text-white bg-[#ec4a9e] font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center mb-2">
                                            <ArrowDownwardIcon />
                                            $-0.4141
                                        </button>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h5 className='text-sm font-semibold'>Locked Price:</h5>
                                            <h4 className='font-bold'>Prize Pool:</h4>
                                        </div>
                                        <div className='text-end'>
                                            <h5 className='text-sm font-semibold'>$229.5265</h5>
                                            <h4 className='font-bold'>8.2427 BNB</h4>
                                        </div>
                                    </div>
                                </div>

                                {/* payout text*/}
                                <div className='flex justify-center items-center flex-col relative translate-x-24 translate-y-7 -rotate-90 z-40 '>
                                    <span ><b>1.87x</b> Payout</span>
                                    <h5 className='text-lg font-bold '>DOWN</h5>
                                </div>
                            </div>

                            {/* <div className="w-[100px] h-[50px] relative">
                                <div className="absolute top-[25px] border-l-[50px] border-r-[50px] border-b-[25px]"></div>
                                <div className="bottom-[25px] border-l-[50px] border-r-[50px] border-b-[25px] border-l-transparent border-r-transparent">
                                </div>
                            </div>
                            <div className="w-[100px] rotate-180 h-[50px] relative">
                                <div className="absolute top-[25px] border-l-[50px] border-r-[50px] border-b-[25px] border-[#da6ab0]">
                                    2.32X Payout
                                    DOWN
                                </div>
                                <div className="bottom-[25px] border-l-[50px] border-r-[50px] border-b-[25px] border-l-transparent border-r-transparent">
                                </div>
                            </div> */}
                        </div>
                        {/* polygon end */}

                    </div>
                </div>

            </div>

            {/* next card  */}
            <div className="  bg-white border border-[#dadbe8] border-b-4 rounded-2xl  shadow drop-shadow-md">
                {/* card header  */}
                <div className='  border-[#dadbe8] bg-[#7644d8] flex justify-between items-center overflow-hidden rounded-t-2xl p-2 py-4 '>
                    <div className='flex justify-center items-center'>
                        <span className='mr-1'><PlayCircleOutlineIcon /></span>
                        <span className='font-bold'>Next</span>
                    </div>
                    <span className=' text-sm font-medium '>#123456</span>

                </div>

                {/* <div className="w-full bg-gray-200 h-2.5 ">
                    <div className="bg-[#7644d8] h-2.5 " style={{ width: "90%" }}></div>
                </div> */}

                {/* main section */}
                <div className="flex justify-center items-center">
                    <div className="flex">
                        {/* polygon start */}
                        <div>
                            {/* up content */}
                            <div className='flex justify-center items-center flex-col relative top-14 z-10'>
                                <h5 className='text-lg font-bold text-[#33d0ab]'>UP</h5>
                                <span className='text-[#9d9bc6] '><b>1.35x</b> Payout</span>
                            </div>
                            {/* polygon icon  */}
                            <div className="relative w-[350px] h-[350px] rotate-90 -mt-11">
                                <HexagonIcon fontSize='large' className="absolute w-[350px] h-[350px] inset-0 text-[#eef5f5]" style={{ maskImage: 'linear-gradient(to left, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)', WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)' }} />
                                <HexagonIcon fontSize='large' className="absolute w-[350px] h-[350px] inset-0 text-[#eef5f5]" style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)' }} />

                                {/* inner square */}
                                <div>

                                </div>
                                <div className='border-[#ec4a9e] border-2 rounded-xl flex flex-col relative  -rotate-90 z-30 bg-white translate-y-28 p-2 mx-3 text-[#290e5e] gap-2  '>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h4 className='font-bold'>Prize Pool:</h4>
                                        </div>
                                        <div className='text-end'>
                                            <h4 className='font-bold'>8.2427 BNB</h4>
                                        </div>
                                    </div>
                                        <div >
                                            <button className='w-full rounded-xl text-center font-bold bg-[#33d0ab] text-white py-2 mb-1 drop-shadow-md border-b-2 '>Enter UP</button>
                                            <button className='w-full rounded-xl text-center font-bold bg-[#ec4a9e] text-white py-2 drop-shadow-md border-b-2 border-[#dc4696]'>Enter DOWN</button>
                                        </div>
                                </div>

                                {/* payout text*/}
                                <div className='flex justify-center items-center flex-col relative translate-x-24 translate-y-4 -rotate-90 z-40 '>
                                    <span className='text-[#7a6fab]'><b>3.87x</b> Payout</span>
                                    <h5 className='text-lg font-bold text-[#ee67ab]'>DOWN</h5>
                                </div>
                            </div>
                        </div>
                        {/* polygon end */}

                    </div>
                </div>

            </div>
            {/* later card`` */}
             <div className="  bg-white border border-[#e6e2eb]  border-b-4 rounded-2xl  shadow drop-shadow-md">
                {/* card header  */}
                <div className='  border-[#dadbe8] bg-[#e6e2eb] flex justify-between items-center overflow-hidden rounded-t-2xl p-2 text-[#280e5f]'>
                    <div className='flex justify-center items-center'>
                        <span className='mr-1'><AccessTimeIcon /></span>
                        <span className='font-bold'>Later</span>
                    </div>
                    <span className=' text-sm font-medium '>#123456</span>

                </div>

                {/* <div className="w-full bg-gray-200 h-2.5 ">
                    <div className="bg-[#7644d8] h-2.5 " style={{ width: "90%" }}></div>
                </div> */}

                {/* main section */}
                <div className="flex justify-center items-center">
                    <div className="flex">
                        {/* polygon start */}
                        <div>
                            {/* up content */}
                            <div className='flex justify-center items-center flex-col relative top-14 z-10'>
                                <h5 className='text-lg font-bold text-[#bcc2c5]'>UP</h5>
                            </div>
                            {/* polygon icon  */}
                            <div className="relative w-[350px] h-[350px] rotate-90 -mt-11">
                                <HexagonIcon fontSize='large' className="absolute w-[350px] h-[350px] inset-0 text-[#eef5f5]" style={{ maskImage: 'linear-gradient(to left, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)', WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)' }} />
                                <HexagonIcon fontSize='large' className="absolute w-[350px] h-[350px] inset-0 text-[#eef5f5]" style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)' }} />

                                {/* inner square */}
                                <div>
                                    
                                </div>
                                <div className='border-[#e6e2eb] border-2 rounded-xl flex flex-col relative  -rotate-90 z-30 bg-white translate-y-32 p-3 py-5 mx-2 text-[#280e5f] gap-2  '>
                                    <div className='flex flex-col justify-center items-center'>
                                        <div>
                                            <h4 className='font-bold '>Entry Starts:</h4>
                                        </div>
                                        <div className=''>
                                            <h4 className='font-bold text-2xl'>~00:38</h4>
                                        </div>
                                    </div>
                                   
                                </div>

                                {/* payout text*/}
                                <div className='flex justify-center items-center flex-col relative translate-x-24 translate-y-14 -rotate-90 z-40 '>
                                    <h5 className='text-lg font-bold text-[#bcc2c5]'>DOWN</h5>
                                </div>
                            </div>
                        </div>
                        {/* polygon end */}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card