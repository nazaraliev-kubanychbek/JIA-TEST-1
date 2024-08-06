import './businessPage.scss';
import BusinessPageHero from './BusinessPageHero';
import BusinessProjects from './BusinessProjects';
import BusinessInfo from './BusinessInfo';

const BusinessPage = () => {

    return (
        <div  style={{ minHeight: "100vh", backgroundColor: "#051650" }}
        className="businessPage">


                <BusinessProjects />

                <BusinessPageHero />

                {/* <BusinessInfo /> */}

        </div>
    );
}

export  {BusinessPage};
