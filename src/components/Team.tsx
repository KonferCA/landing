import { FC } from 'react';
import {
    AidanHeadshot,
    AmirHeadshot,
    ArnavHeadshot,
    ColmanHeadshot,
    JuanHeadshot,
    MaxHeadshot,
    NausherHeadshot,
    NishHeadshot,
    ShakibHeadshot,
    VincenzoHeadshot,
} from '@assets';

interface TeamCardProps {
    name: string;
    jobTitle: string;
    imgSrc: string;
}

const TeamCard: FC<TeamCardProps> = ({ name, jobTitle, imgSrc }) => {
    return (
        <div className="">
            <div className="h-[224px] w-[236px] overflow-hidden rounded-md">
                <img
                    src={imgSrc}
                    alt={`${name} photo`}
                    className="object-cover"
                />
            </div>
            <div>
                <p>{name}</p>
                <p>{jobTitle}</p>
            </div>
        </div>
    );
};

const teamData: TeamCardProps[] = [
    {
        name: 'Nausher Rao',
        jobTitle: 'Chief Executive Officer',
        imgSrc: NausherHeadshot,
    },
    {
        name: 'Arnav Chauhan',
        jobTitle: 'Chief Operating Officer',
        imgSrc: ArnavHeadshot,
    },
    {
        name: 'Maximus Ghosh',
        jobTitle: 'Chief Finance Officer',
        imgSrc: MaxHeadshot,
    },
    {
        name: 'Nish Tewari',
        jobTitle: 'Chief Strategy Officer',
        imgSrc: NishHeadshot,
    },
    {
        name: 'Vincenzo Milano',
        jobTitle: 'Chief Admin Officer',
        imgSrc: VincenzoHeadshot,
    },
    {
        name: 'Shakib Ahmed',
        jobTitle: 'Chief Admin Officer',
        imgSrc: ShakibHeadshot,
    },
    {
        name: 'Amir Agassi',
        jobTitle: 'VP Engineering',
        imgSrc: AmirHeadshot,
    },
    {
        name: 'Juan Wu',
        jobTitle: 'VP Engineering',
        imgSrc: JuanHeadshot,
    },
    {
        name: 'Aidan Traboulay',
        jobTitle: 'VP Engineering',
        imgSrc: AidanHeadshot,
    },
    {
        name: 'Colman Tsang',
        jobTitle: 'UX/UI Designer',
        imgSrc: ColmanHeadshot,
    },
];

const Team = () => {
    return (
        <section className="md:px-32">
            <h1>Our Team</h1>
            <div className="flex flex-wrap justify-center items-center gap-10">
                {teamData.map((data) => (
                    <TeamCard {...data} />
                ))}
            </div>
        </section>
    );
};

export { Team };
