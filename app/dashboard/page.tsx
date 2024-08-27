import React from 'react';
import { ProfileForm } from './components/ProfileForm';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Define the user data type
interface Contribution {
  contributionNumber: number;
  repoName: string;
}

interface User {
  id: number;
  name: string;
  github: string;
  contributions: Contribution[];
  no_contributions: number;
}

// Create an array of user data
const users: User[] = [
  {
    id: 1,
    name: 'Mikey',
    github: 'https://github.com/Meet2054',
    contributions: [
      { contributionNumber: 1, repoName: 'Repo One' },
      { contributionNumber: 2, repoName: 'Repo Two' },
    ],
    no_contributions: 2,
  },

  // Add more users as needed
];

type Props = {};

// Dashboard page component
const Page: React.FC<Props> = () => {
  return (
    <div className='flex flex-row gap-[500px] items-center justify-center '>
      <div className='border-2 border-black rounded-lg flex flex-row gap-4 bg-indigo-500  justify-between px-6 w-[600px] h-[200px]'>
        <div className='flex flex-col gap-4 items-center justify-center text-[32px] ' >
           <h1>User Profiles</h1>
        <Avatar >
          <AvatarImage src="https://github.com/shadcn.png"  />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </div>

        {users.map(user => (
          <div key={user.id} className='flex flex-col gap-2 items-start justify-center  '>
            <h2>{user.name}</h2>
            <a href={user.github} target='_blank' rel='noopener noreferrer' className=''>
              GitHub 
            </a>
            <p>Total Contributions: {user.no_contributions}</p>
            <ul>
              {user.contributions.map((contribution, index) => (
                <li key={index}>
                  Contribution {contribution.contributionNumber}: {contribution.repoName}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <ProfileForm/>
    </div>
  );
};

export default Page;
