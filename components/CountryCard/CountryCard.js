
import {useState} from "react";
import dynamic from "next/dynamic";

const Skeleton = dynamic(() => import('antd/es/skeleton').then(mod => mod.default), {
    ssr: false,
});

export default function CountryCard({ value, loading }) {
    const [countryCode, setCountryCode] = useState(null);

    function LinkHandler() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            {value ? (
                <div className={'w-[15rem] h-64 flex flex-col items-start px-1'}>
                    <div className={'w-full h-36  overflow-hidden rounded-3xl bg-gradient-to-r from-gray-950 to-gray-600'}>
                        {/*<img className={'w-full h-full object-cover'} src={value.image} alt={''}/>*/}
                    </div>
                    <div className={'flex flex-col items-start w-full h-auto px-1'}>
                        <span className={'text-2xl font-bold text-black'}>{value.name}</span>
                        <span className={'text-lg text-black/60 line-clamp-3'}>{value.capital} <br/> Population: {value.population}</span>
                    </div>
                </div>
            ) : (
                <Skeleton className={'w-[15rem] h-64'} active paragraph={{ rows: 4}} />
            )}
        </>
    );
}