const Team = () => {
    const team = [
        {
            name: 'Nausher Rao',
            title: 'Chief Executive Officer',
            image: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fc6de4f07-3f90-4e85-a24d-90ff7216e5bf%2F0e1240f3-e11a-42c1-b2b2-fa14837f2e39%2FIMG_0609.jpg/size/w=2000?exp=1730853850&sig=tcoKusy1-yY8d9ZNF2BUT_7aJjExcbsaSpvqg5BHe7g'
        },
        {
            name: 'Arnav Chauhan',
            title: 'Chief Operating Officer',
            image: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fc6de4f07-3f90-4e85-a24d-90ff7216e5bf%2Fc0881990-ca44-476f-888b-1f20c91beaa3%2FHeadshot_Arnav.jpg/size/w=1920?exp=1730853872&sig=V73L09RNy2DjeoJwNhSssAn0yjZy23A3G-wkXZffBGI'
        },
        {
            name: 'Maximus Ghosh',
            title: 'Chief Finance Officer',
            image: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fc6de4f07-3f90-4e85-a24d-90ff7216e5bf%2Fa9450dd7-11ae-4368-b84a-f8c8ae81eb75%2Fpfp.jpg/size/w=1920?exp=1730853884&sig=irBkInAaihomujmRAOl2b51yTasQ1VwQRFqaSJSn92E'
        },
        {
            name: 'Nish Tewari',
            title: 'Chief Strategy Officer',
            image: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fc6de4f07-3f90-4e85-a24d-90ff7216e5bf%2F927ed015-4bc9-4638-a201-1b4c48a5ef92%2FIMG_9658.jpg/size/w=1920?exp=1730853902&sig=d7phn4FRysfVSGCXZ6lQmPkhgsyZ61bBE9hRFq0H9sA'
        },
        {
            name: 'Vincenzo Milano',
            title: 'Chief Admin Officer',
            image: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fc6de4f07-3f90-4e85-a24d-90ff7216e5bf%2Fe386e41c-fe92-46f8-9d72-1bf0b7a891ee%2FJC204361.jpg/size/w=1920?exp=1730853893&sig=UZoWrMdsTI_XOrekrlcdQ9hf1O_dx-zC7q7MgwpPX6Y'
        },
        {
            name: 'Shakib Ahmed',
            title: 'Chief Admin Officer',
            image: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fc6de4f07-3f90-4e85-a24d-90ff7216e5bf%2Fbc04671a-a5eb-48ce-84b9-ccf4d938bdea%2FHeadshot_2.jpg/size/w=1920?exp=1730853914&sig=vrJ-XCv4K1GbketGHOrtVbiKuYc4KO74HLXkdSdRuVQ'
        },
        {
            name: 'Amir Agassi',
            title: 'VP Engineering',
            image: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fc6de4f07-3f90-4e85-a24d-90ff7216e5bf%2F50b5fb77-480e-4c42-a4d2-79737b3c828b%2F04e2760ba3b0d56cf5b4abab1633de3d-transformed_(1).png/size/w=1920?exp=1730853921&sig=ITDqTNkE6sxIwiVllO6WjNlaXTThFzpQPwqQy5mmGag'
        },
        {
            name: 'Juan Wu',
            title: 'VP Engineering',
            image: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fc6de4f07-3f90-4e85-a24d-90ff7216e5bf%2F73fa7315-f872-4f83-9175-e38081fcdbe0%2FIMG_20221112_131811__01.jpg/size/w=1920?exp=1730853927&sig=qRPhFe3hnR27jRgXnP9OpJpNb9LLHsfDqLXmAJMIhtQ'
        },
        {
            name: 'Aidan Traboulay',
            title: 'VP Engineering',
            image: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fc6de4f07-3f90-4e85-a24d-90ff7216e5bf%2F5dc53673-1728-4fe4-90a0-49336f65ee40%2Fprofessional_headshot.jpg/size/w=1920?exp=1730853935&sig=XJEd2IBgPYKIpvPVhRFaMqc5Xy5TI-3eonROHDa63R4'
        },
        {
            name: 'Colman Tsang',
            title: 'Product Designer',
            image: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fc6de4f07-3f90-4e85-a24d-90ff7216e5bf%2F87932afd-228f-4881-ab62-8b66e02cbb1c%2FSoul-2024-10-12-077183.jpg/size/w=1920?exp=1730853946&sig=rGxVNwKfeOy--zTchYpM6Y2iRwj72SIrDdGaUBIAPoQ'
        }
    ];

    return (
        <div className="py-16 m-2 md:m-8">
            <div className="max-w-[90%] md:max-w-6xl mx-auto">
                <h2 className="mb-6 text-4xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5084F5] to-[#00FFCC]"> Our Team </span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {team.map((member) => (
                        <div 
                            key={member.name}
                            className="relative group"
                        >
                            <div className="overflow-hidden rounded-2xl aspect-square">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            <div className="mt-3 space-y-0.5">
                                <h3 className="text-white font-bold text-sm md:text-base">
                                    {member.name}
                                </h3>
                                <p className="text-gray-400 text-xs md:text-sm">
                                    {member.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export { Team };