import { useEffect, useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const archive = () => {
    const [archive, setArchive] = useState([]);

    const tableHeadings = ['SN', 'Title', 'Category', 'Build With', 'Link'];

    useEffect(() => {
        fetch('archive.json')
            .then(res => res.json())
            .then(data => setArchive(data));
    }, []);

    return (
        <section className='lg:mx-32 md:mx-20 mx-4 my-32'>
            <div>
                <h3 className='text-7xl text-accent font-bold'>Archive</h3>
                <h6 className='mt-5 text-primary'>A big list of things I’ve worked on</h6>
            </div>

            <div className="overflow-x-auto mt-20">
                <table className="table w-full">
                    <thead className='text-lg'>
                        <tr>
                            {
                                tableHeadings.map((tableHeading, index) => <th key={index}>{tableHeading}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            archive?.map((project, index) => <tr key={project._id}>
                                <th className='text-primary'>{index + 1}</th>
                                <td className='text-accent'>{project.projectName}</td>
                                <td>{project.projectCategory}</td>
                                <td>{project.technologyUsed}</td>
                                <td>
                                    <span className='grid grid-cols-2 gap-x-6 float-right text-xl text-accent'>
                                        <a href={project.clientSideCodeLink} target='_blank' rel="noreferrer" className='hover:text-primary'><FiGithub /></a>
                                        <a href={project.liveWebsiteLink} target='_blank' rel="noreferrer" className='hover:text-primary'><FiExternalLink /></a>
                                    </span></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default archive;