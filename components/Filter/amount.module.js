
"use client";
import {Option} from "antd/es/mentions";
import { Select} from "antd";
import {useDispatch, useSelector} from "react-redux";

import {setFilterChange} from "../../GlobalRedux/Features/FilterChangeSlice";
import {useState} from "react";
import axios from "axios";
import {setContinent} from "../../GlobalRedux/Features/ContinentSlice";
import {setLanguage} from "../../GlobalRedux/Features/LanguageSlice";
import {setCurrency} from "../../GlobalRedux/Features/CurrencySlice";
import {setBorder} from "../../GlobalRedux/Features/BorderSlice";
import {setMember} from "../../GlobalRedux/Features/UNmemberSlice";
import {setLandlocked} from "../../GlobalRedux/Features/LandlockedSlice";
import {setIndependent} from "../../GlobalRedux/Features/IndependentSlice";
import {setSortBy} from "../../GlobalRedux/Features/SortBySlice";
import {setSortOrder} from "../../GlobalRedux/Features/SortOrderSlice";






export default function AmountModule() {

    const continent = useSelector((state)=>state.continent.continent)
    const language = useSelector((state)=>state.language.language)
    const currency = useSelector((state)=>state.currency.currency)
    const border = useSelector((state)=>state.border.border)
    const unMember = useSelector((state)=>state.unMember.member)
    const landlocked = useSelector((state)=>state.landlocked.isLandlocked)
    const independent = useSelector((state)=>state.independent.isIndependent)
    const sortBy = useSelector((state)=>state.sortBy.sortBy)
    const sortOrder = useSelector((state)=>state.sortOrder.sortOrder)


    const [data,setData] = useState([])
    const [handle,setHandle] = useState(true)


    const dispatch = useDispatch()

    const years = [];
    const currentYear = new Date().getFullYear();


    for (let year = currentYear; year >= currentYear - 100; year--) {
        years.push(year);
    }

    function ClearFilters() {
        dispatch(setSortBy(''))
        dispatch(setSortOrder(''))
        dispatch(setContinent(''))
        dispatch(setLanguage(''))
        dispatch(setCurrency(''))
        dispatch(setBorder(''))
        dispatch(setMember(''))
        dispatch(setLandlocked(''))
        dispatch(setIndependent(''))
        dispatch(setFilterChange(true))
    }

    const fetchData = async () => {
        try {
            const response = await axios.get('https://countries-backend-y8w2.onrender.com/api/get_filters');
            setData(response.data);
        } catch (error) {
            console.error('Ошибка при запросе:', error);
        }
    };

    if ( handle ) {
        fetchData()
        setHandle(false)

        dispatch(setFilterChange(false))

    }

    function isAnyFilterSelected() {
        return (
            !!continent ||
            !!language ||
            !!currency ||
            !!border ||
            unMember ||
            landlocked ||
            independent ||
            !!sortBy ||
            !!sortOrder
        );
    }

    return (
        <>
            <div>



                <div className={'w-full flex flex-wrap gap-3 items-center justify-start relative px-5 my-6'}>

                    <div className={'flex flex-row items-center gap-3 font-semibold  rounded-xl p-2 bg-[#f2f2f2] shadow'}>
                        <span>{data?.data?.filter_options[0]?.filter_title}</span>
                        <Select
                            defaultValue=""
                            allowClear={true}
                            value={continent}
                            style={{
                                width: "150px",
                            }}
                            onChange={(value)=>{
                                if (value !== undefined) {
                                    dispatch(setContinent(value));

                                } else {
                                    // Если выбрано значение "очистить", то обнуляем фильтр
                                    dispatch(setContinent(''));

                                }
                                dispatch(setFilterChange(true));

                            }}
                        >
                            {data?.data?.filter_options[0]?.filter_params?.map((value, index) => (
                                <Option key={index} value={value.param_key}>
                                    {value.param_value}
                                </Option>
                            ))}
                        </Select>
                    </div>

                    <div className={'flex flex-row items-center gap-3 font-semibold rounded-xl p-2 bg-[#f2f2f2] shadow'}>
                        <span>{data?.data?.filter_options[1]?.filter_title}</span>
                        <Select
                            defaultValue=""
                            allowClear={true}
                            value={language}
                            style={{
                                width: "150px",
                            }}
                            onChange={(value)=>{
                                if (value !== undefined) {
                                    dispatch(setLanguage(value));

                                } else {
                                    // Если выбрано значение "очистить", то обнуляем фильтр
                                    dispatch(setLanguage(''));

                                }
                                dispatch(setFilterChange(true));

                            }}
                        >
                            {data?.data?.filter_options[1]?.filter_params?.map((value, index) => (
                                <Option key={index} value={value.param_key}>
                                    {value.param_value}
                                </Option>
                            ))}
                        </Select>
                    </div>

                    <div className={'flex flex-row items-center gap-3 font-semibold rounded-xl p-2 bg-[#f2f2f2] shadow'}>
                        <span>{data?.data?.filter_options[2]?.filter_title}</span>
                        <Select
                            defaultValue=""
                            allowClear={true}
                            value={currency}
                            style={{
                                width: "150px",
                            }}
                            onChange={(value)=>{
                                if (value !== undefined) {
                                    dispatch(setCurrency(value));

                                } else {
                                    // Если выбрано значение "очистить", то обнуляем фильтр
                                    dispatch(setCurrency(''));

                                }
                                dispatch(setFilterChange(true));

                            }}
                        >
                            {data?.data?.filter_options[2]?.filter_params?.map((value, index) => (
                                <Option key={index} value={value.param_key}>
                                    {value.param_value}
                                </Option>
                            ))}
                        </Select>
                    </div>


                    <div className={'flex flex-row items-center gap-3 font-semibold rounded-xl p-2 bg-[#f2f2f2] shadow'}>
                        <span>{data?.data?.filter_options[3]?.filter_title}</span>
                        <Select
                            defaultValue=""
                            allowClear={true}
                            value={border}
                            style={{
                                width: "150px",
                            }}
                            onChange={(value)=>{
                                if (value !== undefined) {
                                    dispatch(setBorder(value));

                                } else {
                                    // Если выбрано значение "очистить", то обнуляем фильтр
                                    dispatch(setBorder(''));

                                }
                                dispatch(setFilterChange(true));

                            }}
                        >
                            {data?.data?.filter_options[3]?.filter_params?.map((value, index) => (
                                <Option key={index} value={value.param_key}>
                                    {value.param_value}
                                </Option>
                            ))}
                        </Select>
                    </div>

                    <div className={'flex flex-row items-center gap-3 font-semibold rounded-xl p-2 bg-[#f2f2f2] shadow '}>
                        <span>Sort By</span>
                        <Select
                            defaultValue=""
                            allowClear={true}
                            value={sortBy}
                            style={{
                                width: "150px",
                            }}
                            onChange={(value)=>{
                                if (value !== undefined) {
                                    dispatch(setSortBy(value));

                                } else {
                                    // Если выбрано значение "очистить", то обнуляем фильтр
                                    dispatch(setSortBy(''));

                                }
                                dispatch(setFilterChange(true));

                            }}
                        >
                            {data?.data?.sort_options?.map((value, index) => (
                                <Option key={index} value={value.sort_key}>
                                    {value.sort_title}
                                </Option>
                            ))}
                        </Select>
                    </div>

                    <div className={'flex flex-row items-center gap-3 font-semibold rounded-xl p-2 bg-[#f2f2f2] shadow '}>
                        <span>Sort Order</span>
                        <Select
                            defaultValue=""
                            allowClear={true}
                            value={sortOrder}
                            style={{
                                width: "150px",
                            }}
                            onChange={(value)=>{
                                if (value !== undefined) {
                                    dispatch(setSortOrder(value));

                                } else {
                                    // Если выбрано значение "очистить", то обнуляем фильтр
                                    dispatch(setSortOrder(''));

                                }
                                dispatch(setFilterChange(true));

                            }}
                        >
                            {data?.data?.sort_order?.map((value, index) => (
                                <Option key={index} value={value.sort_order_key}>
                                    {value.sort_order_title}
                                </Option>
                            ))}
                        </Select>
                    </div>

                </div>

                <div className={'w-full flex flex-wrap items-center justify-start gap-3 my-6 px-5 my-6'}>

                    <div className={'flex flex-row items-center gap-3 font-semibold rounded-xl p-2 bg-[#f2f2f2] shadow'}>
                        <span>{data?.data?.filter_options[5]?.filter_title}</span>
                        <Select
                            defaultValue=""
                            allowClear={true}
                            value={landlocked}
                            style={{
                                width: "150px",
                            }}
                            onChange={(value)=>{
                                if (value !== undefined) {
                                    dispatch(setLandlocked(value));

                                } else {
                                    // Если выбрано значение "очистить", то обнуляем фильтр
                                    dispatch(setLandlocked(''));

                                }
                                dispatch(setFilterChange(true));

                            }}
                        >
                            {data?.data?.filter_options[5]?.filter_params?.map((value, index) => (
                                <Option key={index} value={value.param_key}>
                                    {value.param_value}
                                </Option>
                            ))}
                        </Select>
                    </div>

                    <div className={'flex flex-row items-center gap-3 font-semibold rounded-xl p-2 bg-[#f2f2f2] shadow'}>
                        <span>{data?.data?.filter_options[6]?.filter_title}</span>
                        <Select
                            defaultValue=""
                            allowClear={true}
                            value={independent}
                            style={{
                                width: "150px",
                            }}
                            onChange={(value)=>{
                                if (value !== undefined) {
                                    dispatch(setIndependent(value));

                                } else {
                                    // Если выбрано значение "очистить", то обнуляем фильтр
                                    dispatch(setIndependent(''));

                                }
                                dispatch(setFilterChange(true));

                            }}
                        >
                            {data?.data?.filter_options[6]?.filter_params?.map((value, index) => (
                                <Option key={index} value={value.param_key}>
                                    {value.param_value}
                                </Option>
                            ))}
                        </Select>
                    </div>

                    <div className={'flex flex-row items-center gap-3 font-semibold rounded-xl p-2 bg-[#f2f2f2] shadow'}>
                        <span>{data?.data?.filter_options[4]?.filter_title}</span>
                        <Select
                            defaultValue={''}
                            allowClear={true}
                            value={unMember}
                            style={{
                                width: "150px",
                            }}
                            onChange={(value)=>{
                                if (value !== undefined) {
                                    dispatch(setMember(value));

                                } else {
                                    // Если выбрано значение "очистить", то обнуляем фильтр
                                    dispatch(setMember(''));

                                }
                                dispatch(setFilterChange(true));

                            }}
                        >
                            {data?.data?.filter_options[4]?.filter_params?.map((value, index) => (
                                <Option key={index} value={value.param_key}>
                                    {value.param_value}
                                </Option>
                            ))}
                        </Select>
                    </div>

                </div>

                <div className={'w-full flex  items-center justify-end gap-3 my-6 px-5 my-6'}>

                    {isAnyFilterSelected() && (
                        <div onClick={ClearFilters} className={'px-5 py-3 rounded-lg bg-[#1C6EF2] text-white font-semibold  cursor-pointer'}>Clear filters</div>
                    )}

                </div>

            </div>
        </>
    )
}