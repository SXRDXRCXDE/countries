import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Link from "next/link";
import axios from "axios";
import CollapseMenu from "../components/CollapseMenu/CollapseMenu";
import MainContainer from "../components/MainContainer/MainContainer";
import {useDispatch} from "react-redux";
import {setSlug} from "../GlobalRedux/Features/SelectedCountrySlugSlice";
import {setTrigger} from "../GlobalRedux/Features/DataTriggerSlice";
import GalleryCard from "../components/GalleryCard/GalleryCard";

import dynamic from "next/dynamic";

const Skeleton = dynamic(() => import('antd/es/skeleton').then(mod => mod.default), {
    ssr: false,
});

export default function () {

    const dispatch = useDispatch()

    const [dataLayout,setLayout] = useState([])
    const [randomCountries,setRandomCountries] = useState([])

    const [handle,setHandle] = useState(true)
    const [isActive,setActive] = useState(0)

    const [gallery,setGallery] = useState([])
    const [galleryTrigger,setGalleryTrigger] = useState(false)

    const [selectedRandomName,setSelectedRandomName] = useState('')

    const [loading, setLoading] = useState(true);


    const Contact_Information = [
        {
            title:'Phone',
            description:'(650) 723-2300'
        },
        {
            title:'Email',
            description:'admission@stanford.edu'
        },
        {
            title:'Address',
            description:'450 Serra Mall, Stanford, CA 94305, United States'
        },
    ]

    const FooterLinks = [
        {
            title: "About BabyName",
            to: "#",
        },
        {
            title: "Privacy Policy",
            to: "#",
        },
        {
            title: "Terms of Service",
            to: "#",
        },
    ]


    const {query} = useRouter()


    const postData = async (code) => {
        try {
            const response = await axios.post('https://countries-backend-y8w2.onrender.com/api/post_country', {
                code: query.code || code
            });
            console.log('Response:', response.data);
            setLayout(response.data)

            // Добавьте здесь обработку ответа, если это необходимо
        } catch (error) {
            console.error('Error:', error);
            // Добавьте здесь обработку ошибок, если это необходимо
        }
    }

    const getRandomCountries = async () => {
        try {
            const response = await axios.get('https://countries-backend-y8w2.onrender.com/api/get_random_countries', {});
            setRandomCountries(response.data);
        } catch (error) {
            console.error('Error:', error);
            throw error; // Re-throw the error to handle it in the getServerSideProps
        }
    };

    async function fetchGallery() {
        try {
            const response = await axios.get('https://api.pexels.com/v1/search', {
                params: {
                    query: `${dataLayout?.data?.name}`
                },
                headers: {
                    Authorization: 'D9lQxd3amEJV5ZhHjyB1CMCRZKGVuyFPUgBGTc6pEZRtiUymNTe8fNtB'
                }
            });
            setGallery(response.data);
        } catch (error) {
            console.error('Ошибка при запросе:', error);
        }
    }


    useEffect(() => {
        if (query.code && handle ) {
            postData();
            getRandomCountries();
            setHandle(false);
            setGalleryTrigger(true);
        }

        if (selectedRandomName) {
            postData(selectedRandomName)
        }

    }, [query.code, handle]);

    useEffect(() => {
        if (!!dataLayout && galleryTrigger) {
            fetchGallery();
            setGalleryTrigger(false);
            setLoading(false); // Установка loading в false после успешной загрузки данных
        }
    }, [dataLayout, galleryTrigger]);

    async function LinkHandler(value) {
        await window.scrollTo(0,0)
        await setSelectedRandomName(value)
    }
    return(
        <MainContainer title={dataLayout?.data?.name} keywords={dataLayout?.data?.name}>
            <div className={`w-full h-auto min-h-screen flex flex-col items-center mt-16`}>

                {query.code && handle && loading ? (
                        <div className={'w-full h-96'}>
                            <Skeleton className={'w-full h-96'} active paragraph={{ rows: 4}} />
                        </div>
                ) : (
                    <div className={'w-full max-[1550px]:px-7 max-w-[1500px] flex flex-col mt-12 '}>

                        <div className={'flex max-[600px]:flex-col  items-center gap-3 '}>

                            <img className={'w-32 h-fit'} src={dataLayout?.data?.flag_svg}/>
                            <span className={'text-5xl font-bold '}> {dataLayout?.data?.name} </span>

                        </div>



                        <div className={'w-full h-auto flex flex-col items-start gap-3 mt-6'}>

                            <div className={'w-full h-auto  flex flex-row flex-wrap items-center  relative select-none   gap-3 border-b-2  '}>

                                {dataLayout?.data?.content_pages?.map((value, index)=> <div onClick={()=>setActive(index)} className={` ${isActive===index?`text-[#0d9adc] border-[#0d9adc] `:`text-black`} cursor-pointer relative duration-300 w-auto h-auto text-center border-b-4  active:text-blue-700 p-2 flex flex-col items-center justify-center`}>
                                    <div className={'flex items-center gap-3'}>
                                        <div className={'font-semibold'}>{value.title}</div>
                                    </div>
                                </div>)}

                            </div>


                            <div className={'w-full flex flex-col items-start '}>
                                <div className={'text-2xl font-bold mt-3'}>
                                    {dataLayout?.data?.content_pages[isActive].title}
                                </div>

                                <p className={'text-[1.3rem] text-black mt-5'}>
                                    {dataLayout?.data?.content_pages[isActive]?.summary}
                                </p>

                            </div>

                        </div>




                        <span className={'text-2xl font-bold mt-8 '}> Quick Facts </span>

                        <div className={'w-full h-auto flex flex-row flex-wrap mt-8 '}>

                            {dataLayout?.data?.content_pages[isActive].facts?.map((value, index)=> <div key={index} className={'max-[600px]:w-full w-1/2 h-20 flex flex-col items-start justify-center border-y border-[#f2f2f2] '}>
                                <div className={'text-xl font-semibold text-[#4A699C]'}>{value.title}</div>
                                <div className={'text-lg text-black'}>{value.content}</div>
                            </div>)}

                        </div>

                        <div className={'w-full flex flex-col items-start gap-3'}>

                            <span className={'text-2xl font-bold mt-8 '}> Gallery </span>

                            <div className={'w-full flex flex-row flex-wrap gap-4 '}>

                                {gallery?.photos?.slice(0,5).map((value,index)=> <GalleryCard image={value?.src?.original}/>)}

                            </div>

                        </div>


                        <span className={'text-2xl font-bold my-8 '}> {dataLayout?.data?.faq?.faq_title} </span>

                        {dataLayout?.data?.faq?.faq_body?.map((value, index)=> <div key={index}>
                            <CollapseMenu title={value.question} answer={value.answer}/>

                        </div>)}


                        <span className={'text-2xl font-bold my-8 '}> Explore Countries </span>


                        <div className={'w-full h-auto flex flex-col items-center'}>

                            <div className={'w-auto h-auto flex max-[500px]:flex-col items-center min-[500px]:flex-wrap justify-start gap-3'}>

                                {randomCountries?.random_countries?.slice(0,5).map((value, index)=> <div key={index} className={'w-[15rem] h-[12rem] flex flex-col items-center justify-center rounded-xl relative bg-black overflow-hidden shadow-xl bg-gradient-to-r from-gray-950 to-gray-600'}>
                                    <Link onClick={()=>LinkHandler(value.code)} href={`/${value.code}`} >

                                        {/*<img src={cover} className={'w-full h-full object-cover absolute top-0 left-0 brightness-50 -z-0'}/>*/}

                                        <div className={'w-auto h-auto z-0 text-white underline text-3xl text-center font-semibold'}>{value.name}</div>

                                    </Link>
                                </div>)}

                            </div>


                        </div>

                        <span className={'text-2xl font-bold my-8 '}> Explore Categories </span>

                        {/*Categories*/}
                        <div className={'w-auto flex flex-wrap gap-5 items-center justify-start  my-3'}>

                            {dataLayout?.data?.similar_query?.map((value, index)=> <div onClick={()=>{
                                dispatch(setSlug(value.title?.seo_title))
                                dispatch(setTrigger(true))
                            }}>
                                <Link href={'/'}  key={index} className={'px-3 py-2 rounded-lg bg-[#f2f2f2] text-xl font-semibold'}>{value.title?.seo_title}</Link>
                            </div>)}

                        </div>

                    </div>
                )}






                {/*Footer */}
                <div className={'w-full max-[1550px]:px-7 max-w-[1500px] flex flex-col mt-12 '}>

                    <div className={'w-full flex flex-col items-center my-16 gap-4'}>

                        <div className={'max-[550px]:text-4xl text-6xl font-bold'}>Got feedback?</div>
                        <div className={'w-[600px] max-[700px]:w-auto text-center max-[550px]:text-xl text-2xl font-semibold'}>We'd love to hear from you. Let us know how we can improve our information.</div>

                        <div className={'px-6 py-5 rounded-xl text-xl font-semibold text-white bg-[#1C6EF2] mt-6'}>Submit feedback</div>

                    </div>

                    <span className={'text-2xl font-bold my-6 '}> Contact information </span>

                    <div className={'w-full h-auto flex flex-col gap-4'}>

                        {Contact_Information.map((value, index)=>  <div key={index} className={'w-full max-[600px]:flex-col flex  max-[600px]:items-start items-center justify-between'}>
                            <div className={'text-[#4A699C] text-xl'}>{value.title}</div>
                            <div className={'text-black text-xl'}>{value.description}</div>
                        </div>)}

                    </div>

                    <div className={'w-full flex max-[600px]:flex-wrap max-[600px]:justify-center max-[600px]:gap-3 items-center justify-between my-12'}>

                        {FooterLinks.map((value, index)=> <div>
                            <Link onClick={()=>window.scrollTo(0,0)} key={index} href={value.to} className={'text-xl max-[600px]:text-[15px] text-[#4A699C]'}>{value.title}</Link>
                        </div>)}

                    </div>

                </div>

            </div>
        </MainContainer>
    )
}


