import { SwiperSection, FirstSection, VideosSection, AboutForumSectoins, MainBisnesSection } from "@pages/HomePage/HomeSections";
import '../../index.css'

export const HomePage = () => {
    return (
        <div style={{ minHeight: '100vh'}}>
            <FirstSection />
            <AboutForumSectoins />
            <MainBisnesSection />
            <VideosSection />
            <SwiperSection />
           
        </div>
    );
}
