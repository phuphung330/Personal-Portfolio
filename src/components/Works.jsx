import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor='#ffff'
                scale={1.1}
                glarePosition='all'
                className='bg-tertiary p-5 rounded-2x1 sm:w-[360px] h-full w-full  cursor-pointer'
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover rounded-2xl'
                    />
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover group'>
                        <div
                            onClick={() =>
                                window.open(source_code_link, "_blank")
                            }
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 '
                        >
                            <img
                                src={github}
                                alt='github'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='line-clamp-4 mt-2 text-secondary text-[14px]'>
                        {description}
                    </p>
                </div>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={tag.name}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};
const Works = () => {
    return (
        <>
            <motion.div>
                <p className={styles.sectionSubText}>My Work</p>
                <h2 className={styles.sectionHeadText}>Projects</h2>
            </motion.div>
            <div className='flex w-full'>
                <motion.p
                    className='max-w-3xl leading-[30px] mt-3 text-secondary text-[17px]'
                    variants={fadeIn("", "", 0.1, 1)}
                >
                    Following these projects, I created various websites using
                    HTML, CSS, JavaScript, Three.js, and React.js to showcase my
                    skills and knowledge in frontend web development. You can
                    access the live demos and the source code of each projects
                    in it. These projects helped me to apply and improve the
                    technologies that I learned and use in web development.
                </motion.p>
            </div>
            <div className='flex flex-wrap mt-20 gap-7 justify-center'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");
