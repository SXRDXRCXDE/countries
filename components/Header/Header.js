import {useState} from "react";
import Link from "next/link";
import {CiSearch} from "react-icons/ci";
import {IoIosMenu} from "react-icons/io";
import {IoClose} from "react-icons/io5";



export default function Header() {

    const [isOpen,setOpen] = useState(false);

    const Navbar = [
        {
            title : 'Home',
            to : ''
        },
        {
            title : 'Featured',
            to : ''
        },
        {
            title : 'Reecent',
            to : ''
        },
    ]

    const LinkHandler = () => {
        window.scrollTo(0,0);
        setOpen(false);
    }

    return(
        <>
            <div className={`w-full h-20 fixed top-0 z-10 bg-[#ffffff] shadow`}>
                <div className={'w-full h-full flex items-center justify-between max-[1390px]:px-5 px-16  relative'}>

                    {/*Left Navbar */}
                    <div className={'w-auto h-auto flex items-center gap-3'}>

                        {/*Logo Place*/}
                        <div className={'flex items-center max-[1200px]:gap-2 gap-5 '}>
                            <Link onClick={LinkHandler} href={'/'} >
                                <div className={'flex flex-row items-center max-[1200px]:gap-2 gap-5 '}>

                                    <div className={'w-auto max-[1200px]:h-5 h-8 flex  items-center justify-center'}>

                                        <div className={'w-6 h-fit flex items-center justify-center '}>
                                            <svg className={'w-full h-full'} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0.333333H0V4.77777V9.22223H6V13.6667H12V9.22223V4.77777H6V0.333333Z" fill="#0D121C"/>
                                            </svg>
                                        </div>

                                    </div>

                                    <span className={'max-[1200px]:text-xl text-3xl font-semibold text-black'}>Countries</span>

                                </div>


                            </Link>
                        </div>


                        {/*Navbar Links*/}
                        <div className={'flex items-center gap-3 ml-3 max-[950px]:hidden'}>

                            {Navbar.map((value, index)=> <div key={index} className={'max-[1200px]:text-lg text-xl font-thin text-black'}><Link href={`/${value.to}`} >{value.title}</Link></div>)}


                        </div>

                    </div>


                    {/*Right Navbar*/}
                    <div className={'w-auto h-auto flex items-center gap-3 max-[950px]:hidden'}>

                        <div className={'relative w-auto h-auto'}>

                            <div className={'absolute top-3 left-2 text-3xl text-black/60 '}>
                                <CiSearch />
                            </div>
                            <input placeholder={'Search Country name'} className={'w-72 h-12 bg-[#f2f2f2] rounded-2xl outline-0 pl-12'}/>

                        </div>

                        {/*Log in / Sign Up*/}
                        <div className={'flex items-center gap-3 '}>

                            <div className={'cursor-pointer w-auto h-auto max-[1200px]:py-2 max-[1200px]:px-3 py-3 px-4 flex items-center justify-center rounded-xl bg-[#1C6EF2] max-[1200px]:text-lg text-xl font-semibold text-white'}>Log in</div>

                            <div className={'cursor-pointer w-auto h-auto max-[1200px]:py-2 max-[1200px]:px-3 py-3 px-4 flex items-center justify-center rounded-xl bg-[#E8EDF5] max-[1200px]:text-lg text-xl font-semibold text-black'}>Sign Up</div>

                        </div>



                    </div>

                    <div className={'flex items-center gap-3 min-[950px]:hidden'}>

                        {/*Search bar*/}
                        <div className={'relative w-auto h-auto '}>

                            <div className={'absolute top-3 left-2 text-3xl text-black/60 '}>
                                <CiSearch />
                            </div>
                            <input placeholder={'Search Country name'} className={'max-[680px]:w-12 w-72 h-12 bg-[#f2f2f2] rounded-2xl outline-0 pl-12'}/>

                        </div>

                        <div onClick={()=>setOpen(!isOpen)} className={'text-3xl p-2 bg-[#f2f2f2] rounded-lg min-[950px]:hidden'}>
                            <IoIosMenu />
                        </div>

                    </div>


                    {/*Mobile version Menu*/}
                    <div className={` w-full h-screen bg-[#ffffff] absolute left-0 ${isOpen? ` top-0` : ` top-[-100vh]`} duration-500 shadow-lg min-[950px]:hidden `}>

                        <div className={'w-full h-28 flex items-center justify-between px-3 border-b border-[#f2f2f2] '}>

                            {/*Logo Place*/}
                            <Link onClick={LinkHandler} href={'/'} >
                                <div className={'flex flex-row items-center max-[1200px]:gap-2 gap-5 '}>

                                    <div className={'w-auto max-[1200px]:h-5 h-8 flex  items-center justify-center'}>

                                        <svg className={'w-fit h-full object-contain'} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0.333333H0V4.77777V9.22223H6V13.6667H12V9.22223V4.77777H6V0.333333Z" fill="#0D121C"/>
                                        </svg>

                                    </div>

                                    <span className={'max-[1200px]:text-2xl text-4xl font-bold text-black'}>BabyNames</span>

                                </div>


                            </Link>

                            {/*Menu Handler*/}
                            <div onClick={()=>setOpen(!isOpen)} className={'text-3xl p-2 bg-[#f2f2f2] rounded-lg '}>
                                <IoClose />
                            </div>

                        </div>

                        {/*Search bar*/}
                        <div className={'relative w-auto h-auto px-5'}>

                            <div className={'absolute top-3 left-7 text-3xl text-black/60 '}>
                                <CiSearch />
                            </div>
                            <input placeholder={'Search Country name'} className={'w-full h-12 bg-[#f2f2f2] rounded-2xl outline-0 pl-12'} />

                        </div>

                        {/*Navbar Links*/}
                        <div className={'w-full flex flex-col items-center gap-3 mt-3 px-5 text-center '}>

                            {Navbar.map((value, index)=> <div className={'w-full border-b border-[#f2f2f2] max-[1200px]:text-xl text-2xl font-bold text-black py-2 '}> <Link key={index} onClick={LinkHandler} href={`/${value.to}`} >{value.title}</Link></div>)}


                        </div>

                        {/*Log in / Sign Up*/}
                        <div className={'w-full justify-center mt-3 flex items-center gap-3 '}>

                            <div className={'cursor-pointer w-auto h-auto max-[1200px]:py-2 max-[1200px]:px-3 py-3 px-4 flex items-center justify-center rounded-xl bg-[#1C6EF2] max-[1200px]:text-lg text-xl font-semibold text-white'}>Log in</div>

                            <div className={'cursor-pointer w-auto h-auto max-[1200px]:py-2 max-[1200px]:px-3 py-3 px-4 flex items-center justify-center rounded-xl bg-[#E8EDF5] max-[1200px]:text-lg text-xl font-semibold text-black'}>Sign Up</div>

                        </div>

                    </div>

                </div>



            </div>
        </>
    )
}