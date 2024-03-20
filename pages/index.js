"use client";
import MainContainer from "../components/MainContainer/MainContainer";
import Link from "next/link";
import {CiFacebook} from "react-icons/ci";
import {PiInstagramLogo, PiTwitterLogoThin} from "react-icons/pi";
import axios from "axios";
import dynamic from 'next/dynamic';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setFilterChange} from "../GlobalRedux/Features/FilterChangeSlice";
import CountryCard from "../components/CountryCard/CountryCard";
import {setTrigger} from "../GlobalRedux/Features/DataTriggerSlice";

const AmountModule = dynamic(async () => await import('../components/Filter/amount.module'), {
    ssr: false,
});

const Index = () => {

    const continent = useSelector((state)=>state.continent.continent)
    const language = useSelector((state)=>state.language.language)
    const currency = useSelector((state)=>state.currency.currency)
    const border = useSelector((state)=>state.border.border)
    const unMember = useSelector((state)=>state.unMember.member)
    const landlocked = useSelector((state)=>state.landlocked.isLandlocked)
    const independent = useSelector((state)=>state.independent.isIndependent)
    const sortBy = useSelector((state)=>state.sortBy.sortBy)
    const sortOrder = useSelector((state)=>state.sortOrder.sortOrder)

    const selectedContrySlug = useSelector((state)=>state.selectedCountrySlug.slug)
    const slugTrigger = useSelector((state)=>state.dataTrigger.trigger)

    const filterToggle = useSelector((state)=>state.filterChange)

    const [data,setData] = useState([])
    const [handle,setHandle] = useState(true)
    const [loading,setLoading] = useState(false)

    const dispatch = useDispatch()

    function LinkHandler(value) {
        window.scrollTo(0, 0);
    }

    const FooterLinks = [
        { title: "About Us", to: "#" },
        { title: "Contact Us", to: "#" },
        { title: "Privacy Policy", to: "#" },
        { title: "Terms of Service", to: "#" },
    ];

    const fetchDataSlug = async () => {
        try {
            const slugInput = `${selectedContrySlug}`;
            const response = await axios.post('https://countries-backend-y8w2.onrender.com/api/filter_names', { slug_input: slugInput });
            setData(response.data);
        } catch (error) {
            console.error('Ошибка при запросе:', error);
        }
    };

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await axios.post('https://countries-backend-y8w2.onrender.com/api/filter_names', {

                    filter_params: {
                        independent: independent,
                        unMember: unMember,
                        landlocked: landlocked,
                        currency: currency,
                        languages: language,
                        continents: continent,
                        borders: border,
                    },
                    sort_params: {
                        sort_category: sortBy,
                        sort_order: sortOrder,
                    },

            });

            console.log(response.data); // Ваш ответ
            setData(response.data)
        } catch (error) {
            setLoading(false)
            console.error('Ошибка при запросе:', error);
        }
    };

    if (slugTrigger) {
        fetchDataSlug()
        dispatch(setTrigger(false))
    }

    if ( handle || filterToggle ) {
        fetchData()
        setHandle(false)
        dispatch(setFilterChange(false))

    }

    console.log(data.data)

    const keyword = data?.data?.title?.seo_slug || '';

    return (
        <MainContainer title={data?.data?.title?.seo_title} keyword={keyword}>
            <div className={`w-full h-auto flex flex-col items-center mt-16`}>
                {/*Dynamic slug Baby names*/}
                <div className={'w-full max-[1550px]:px-7 max-w-[1500px] flex flex-col mt-12 '}>
                    <span className={'text-5xl font-bold max-[600px]:text-3xl '}>{data?.data?.title?.seo_title}</span>

                </div>

                {/* Filters */}
                <AmountModule />

                {/* List of Names */}
                <div className={'w-full max-[1550px]:px-3 max-w-[1500px] flex flex-col items-center mt-12 '}>
                    <div className={'flex flex-wrap justify-center items-center gap-x-4 gap-y-10'}>
                        {/* Cards */}
                        {data?.data?.countries?.slice(0, 10).map((value, index) =>
                            <Link href={`/${value.code}`}>

                                <CountryCard value={value} loading={loading}/>

                            </Link>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className={'w-full h-auto max-[1550px]:px-3 max-w-[1500px] flex flex-col items-center justify-center gap-4  '}>
                    <div className={'w-full flex flex-col items-center my-24 gap-4'}>
                        <div className={'max-[550px]:text-4xl text-6xl font-bold'}>Got feedback?</div>
                        <div className={'w-[600px] max-[700px]:w-auto text-center max-[550px]:text-xl text-2xl font-semibold'}>We'd love to hear from you. Let us know how we can improve our information.</div>
                        <div className={'px-6 py-5 rounded-xl text-xl font-semibold text-white bg-[#1C6EF2] mt-6'}>Submit feedback</div>
                    </div>
                    <div className={'w-full h-auto flex flex-col items-center gap-3 py-12 justify-center'}>
                        <div className={'w-full flex max-[600px]:flex-wrap max-[600px]:justify-center max-[600px]:gap-3 items-center justify-between'}>

                            {FooterLinks.map((value, index)=> <div className={'text-xl max-[600px]:text-[15px] text-[#4A699C]'}>
                                <Link onClick={LinkHandler} key={index} href={value.to}>{value.title}</Link>
                            </div> )}

                        </div>
                        <div className={'flex max-[600px]:flex-wrap max-[600px]:justify-center gap-5 items-center justify-between mt-5 text-4xl text-[#4A699C]'}>
                            <a href={'#'} className={'decoration-0'}><CiFacebook /></a>
                            <a href={'#'} className={'decoration-0'}><PiTwitterLogoThin /></a>
                            <a href={'#'} className={'decoration-0'}><PiInstagramLogo /></a>
                        </div>
                        <div className={'text-xl text-[#4A699C] mt-4'}>© 2022 BabyNames. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default Index;