import { DescriptionSection } from "@components/index";
import { FirstSection } from "./FundsSections";
import linesBg from '@img/abstraklines.svg'
import classes from './FundPage.module.scss'
import { useEffect, useState } from "react";
export const FundsPage = () => {
    const [data,setData] = useState({})
    console.log(data);
    
    useEffect(()=>{
        (async()=>{
            const res =await fetch('https://bif.webtm.ru/ru/api/v1/financing/financing/')
            const data_fetch =await res.json()
            console.log(data_fetch);
            if(data_fetch.length){
                setData({...data,title:data_fetch[0].title})
            }
        })()
    },[])
    return (
        <div style={{minHeight: '100vh'}} className={classes.fund}> 
            {/* <DescriptionSection text={'источники финансирования'} /> */}
            <section className={classes.section}>
            <h1 className={classes.title_page}>
            {data.title?data.title:''}
            </h1>
            </section>

            <FirstSection />
        </div>
    );
}

