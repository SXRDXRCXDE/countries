import {useState} from "react";
import {IoIosArrowDown} from "react-icons/io";
import {SlQuestion} from "react-icons/sl";
import dynamic from "next/dynamic";

const Skeleton = dynamic(() => import('antd/es/skeleton').then(mod => mod.default), {
    ssr: false,
});

export default function CollapseMenu({title,answer}) {
    const [isOpen,setOpen] = useState(false)

    return<>
        {title? (<div className={` ${isOpen?'h-72':'h-24'} w-full flex flex-col items-center overflow-hidden duration-500 border-t border-[#f2f2f2]`}>

                <div onClick={()=>setOpen(!isOpen)} className={'w-full '}>
                    <div className={`w-full h-24 px-8 text-start flex items-center justify-between cursor-pointer`}>

                        <div className={'flex h-full items-center gap-2 '}>

                            <div className={'w-16 h-[70%] max-[450px]:h-[40%] flex items-center justify-center relative bg-[#f2f2f2] rounded-lg'}>

                                <SlQuestion className={'text-4xl max-[450px]:text-2xl'} />

                            </div>

                            <div className={`text-xl font-semibold max-[800px]:text-lg max-[500px]:text-base`}>{title}</div>
                        </div>


                        <div className={`${isOpen?'rotate-180':'rotate-0'} text-xl duration-500 rounded-full active:bg-gray-500/50 p-2`}>
                            <IoIosArrowDown />
                        </div>

                    </div>
                </div>


                <div className={`w-full h-auto py-5 px-10 text-lg font-semibold  max-[800px]:text-base max-[500px]:text-[13px] text-[#4A699C]`}>{answer}</div>
            </div>)  :
            ( <div><Skeleton className={'w-[15rem] h-24'} active paragraph={{ rows: 4}} /></div>)
        }

    </>
}