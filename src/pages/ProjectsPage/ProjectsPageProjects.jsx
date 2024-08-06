import './projectsPage.scss';
import img1 from './img/project1.png';
import img2 from './img/project2.png';
import img3 from './img/project3.png';
import img4 from './img/project4.png';
import img5 from './img/project5.png';

const projectList = [
    {
        img: img1,
        text: '2015',
    },
    {
        img: img2,
        text: '2016',
    },
    {
        img: img3,
        text: '2017',
    },
    {
        img: img4,
        text: '2019',
    },
    {
        img: img5,
        text: '2022',
    },
]


const ProjectsPageProjects = () => {
    return (
        <div className="projectsPage-projects">
    <div className="row">
                {
                    projectList.map(item =>{
                        return <div key={item.text} className="col-4">
                            <div className="projectsPage-projects-card">
                                <p className="projectsPage-projects-card-text">{item.text}</p>
                                <img src={item.img} alt="" className="projectsPage-projects-card-img" />
                            </div>
                        </div>
                    })
                }
          </div>
         
    </div>
    );
}

export default ProjectsPageProjects;
