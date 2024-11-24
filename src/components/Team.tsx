import { Aidan, Amir, Arnav, Colman, Jackie, Juan, Max, Mobi, Nausher, Nish, Shakib, Vincenzo } from '@assets';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';

const teamMembers = [
    {
        name: 'Nausher Rao',
        title: 'Chief Executive Officer',
        image: Nausher,
        linkedin: 'https://www.linkedin.com/in/nausherrao/',
        bio: 'Lorem ipsum monkey'
    },
    {
        name: 'Arnav Chauhan',
        title: 'Chief Operating Officer',
        image: Arnav,
        linkedin: 'https://www.linkedin.com/in/arnavchauhan/',
        bio: 'Lorem ipsum monkey'
    },
    {
        name: 'Maximus Ghosh',
        title: 'Chief Finance Officer',
        image: Max,
        linkedin: 'https://www.linkedin.com/in/maximus-ghosh-b7234b237/',
        bio: 'Lorem ipsum monkey'
    },
    {
        name: 'Nish Tewari',
        title: 'Chief Strategy Officer',
        image: Nish,
        linkedin: 'https://www.linkedin.com/in/nish-tewari/',
        bio: 'Lorem ipsum monkey'
    },
    {
        name: 'Vincenzo Milano',
        title: 'Chief Admin Officer',
        image: Vincenzo,
        linkedin: 'https://www.linkedin.com/in/vincenzo-milano/',
        github: 'https://github.com/vincenzomilano',
        bio: 'Lorem ipsum monkey'
    },
    {
        name: 'Shakib Ahmed',
        title: 'Chief Admin Officer',
        image: Shakib,
        linkedin: 'https://www.linkedin.com/in/shakib-ahmed/',
        bio: 'Lorem ipsum monkey'
    },
    {
        name: 'Amir Agassi',
        title: 'VP Engineering',
        image: Amir,
        linkedin: 'https://www.linkedin.com/in/amir-agassi/',
        bio: 'Lorem ipsum monkey'
    },
    {
        name: 'Juan Wu',
        title: 'VP Engineering',
        image: Juan,
        linkedin: 'https://www.linkedin.com/in/juancwu/',
        github: 'https://github.com/juancwu',
        bio: 'Lorem ipsum monkey'
    },
    {
        name: 'Aidan Traboulay',
        title: 'VP Engineering',
        image: Aidan,
        linkedin: 'https://linkedin.com/in/aidan-traboulay',
        github: 'https://github.com/aidantrabs',
        bio: 'Lorem ipsum monkey'
    },  
    {
        name: 'Jacqueline Truong',
        title: 'Chief Creative Officer',
        image: Jackie,
        linkedin: 'https://www.linkedin.com/in/jacquellinetruong/',
        bio: 'Lorem ipsum monkey',
    },
    {
        name: 'Colman Tsang',
        title: 'Product Designer',
        image: Colman,
        linkedin: 'https://www.linkedin.com/in/colman-tsang/',
        bio: 'Lorem ipsum monkey',
    },
    {
        name: 'Mobina Tooranisama',
        title: 'Social Media Coordinator',
        image: Mobi,
        linkedin: 'https://www.linkedin.com/in/mobina-tooranisama/',
        bio: 'Hey! I\'m Mobina, I\'m 22 and have recently graduated from Wilfrid Laurier University with a Bachelor of Science with a major in Computer Science. I am the Social Media Coordinator here at Konfer!',
    }
];

interface TeamMember {
    name: string;
    title: string;
    image: string;
    linkedin: string;
    github?: string;
    bio: string;
}

const TooltipContent = ({ member }: { member: TeamMember }) => (
    <div className="p-2">
        <div className="font-bold text-lg mb-2">{member.name}</div>
        <div className="text-gray-300 text-sm mb-3">{member.bio}</div>
        <div className="flex gap-3">
            <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
            >
                <FaLinkedin size={20} />
            </a>
            {member.github && ( 
                <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                    <FaGithub size={20} />
                </a>
            )}
        </div>
    </div>
);

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
    <Tippy 
        content={<TooltipContent member={member} />}
        theme="material"
        placement="top"
        arrow={true}
        duration={200}
        interactive={true}
        className="team-tooltip"
    >
        <div className="relative group cursor-pointer">
            <div className="overflow-hidden rounded-2xl aspect-square">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            
            <div className="mt-3 space-y-0.5">
                <h3 className="text-white font-bold text-xl">
                    {member.name}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                    {member.title}
                </p>
            </div>
        </div>
    </Tippy>
);

const Team = () => {
    return (
        <div className="py-16 px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="mb-6 text-4xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5084F5] to-[#00FFCC]">
                        Our Team
                    </span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {teamMembers.map((member) => (
                        <TeamMemberCard key={member.name} member={member} />
                    ))}
                </div>
            </div>

            <style>{`
                .team-tooltip {
                    background-color: #1a1a1a !important;
                    border: 1px solid #333 !important;
                    max-width: 300px !important;
                    border-radius: 16px !important;
                }
                
                .tippy-arrow {
                    color: #1a1a1a !important;
                }
                
                .tippy-content {
                    padding: 12px !important;
                    border-radius: 15px !important;
                }

                .tippy-box {
                    border-radius: 16px !important;
                }
                
                .tippy-box[data-placement^='top'] > .tippy-arrow::before {
                    border-radius: 0 !important;
                }
            `}</style>
        </div>
    );
};

export { Team };