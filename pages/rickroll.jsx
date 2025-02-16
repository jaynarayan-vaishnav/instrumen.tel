import React from "react";
import Navbar from "../components/Navbar/navbar";
import Image from 'next/image';
import Duckroll from '../public/duckroll.jpg';
import Rickroll from '../public/rickroll.gif';

export default function RickRollPage() {
    return (
        <div>
                <title>History of Rick Roll</title>
            <Navbar />
            <main className="bg-backgroundColor text-center">
                <div className="text-primaryColor font-semibold text-6xl py-12">What is RickRoll?</div>
                <div className="flex items-center px-40 p-10 py-10">
                    <div className="p-5 text-lg">
                    It is a prank and internet meme involving an unexpected appearance of a music video 
                    &quot;Never Gonna Give You Up&quot; by Rick Astley which hit number 1 in top 100 in March of 1988. 
                    It also has a long journey on how it became a meme, it started when it gained popularity on the internet
                    after it&apos;s appearance in &quot;It&apos;s always sunny in philadelphia&quot;
                    </div>

                    <Image
                    src={Rickroll}
                    alt={"DJ Rakesh"}
                    width={400}
                    height={400}
                    />
                </div>
                
                <div className="flex items-center px-40 p-10 py-10">
                <Image
                    src={Duckroll}
                    alt={"DJ Rakesh"}
                    width={400}
                    height={400}
                />
                    <div className="p-5 text-lg">
                    Then the creator of 4chan created a word filter which changed the word from egg &#8594; duck
                    which started a new meme when it changed the word eggroll to duckroll and this img popped up
                    people started generating links which would misdirect the people to this image and when GTA 4 
                    came out and people started linking to it&apos;s trailer but it took them to this video and thus Rickrolling was
                    born.
                    </div>
                    
                </div>

            </main>
        </div>
    )
}