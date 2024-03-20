
import {useState} from "react";
import dynamic from "next/dynamic";

const Skeleton = dynamic(() => import('antd/es/skeleton').then(mod => mod.default), {
    ssr: false,
});

export default function GalleryCard({ image, loading }) {
    const [countryCode, setCountryCode] = useState(null);

    function LinkHandler() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            {image ? (
                <div className={'w-[13rem] h-[10rem] bg-black rounded-xl overflow-hidden relative'}>
                    <img src={image} className={'w-full h-full object-cover absolute top-0 left-0'}/>
                </div>
            ) : (
                <Skeleton className={'w-[15rem] h-64'} active paragraph={{ rows: 4}} />
            )}
        </>
    );
}