import React from 'react'
import StoryCard from './Story'

const stories = [
    {
        name:"Goldy Tanjung Wijaya",
        src:"https://goldywijaya.com/goldy.svg",
        profile:"https://goldywijaya.com/goldy.svg",
    },
     {
        name:"Elon Musk",
        src:"https://links.papareact.com/kxk",
        profile:"https://links.papareact.com/kxk",
    },
     {
        name:"Jeff Bezoz",
        src:"https://links.papareact.com/k2j",
        profile:"https://links.papareact.com/f0p",
    },
     {
        name:"Mark Zuckerberg",
        src:"https://links.papareact.com/xql",
        profile:"https://links.papareact.com/snf",
    },
    {
        name:"Bill Gates",
        src:"https://links.papareact.com/4u4",
        profile:"https://links.papareact.com/zvy",
    }
];

function Stories() {
    return (
        <div className='flex justify-center space-x-3 mx-auto'>
            {stories.map((story) => (
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}></StoryCard>
            ))}
        </div>
    )
}

export default Stories
