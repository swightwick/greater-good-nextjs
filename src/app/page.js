"use client"
import Image from "next/image";
import AudioPlayer from 'react-modern-audio-player';
import Logo from "./logo";
import { Fade } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'


const playList = [
  {
    name: 'name',
    writer: 'writer',
    img: 'vinyl.jpg',
    src: 'spooky.mp3',
    id: 1,
  },
]

const releases = [
  {
    name: 'coping with loss v2',
    bandcamp: 'http://bandcamp.com',
    spotify: 'https://open.spotify.com/album/4jHX02snJDBD1RqyypC0A4?si=Gzp0l0K2QLaipYxD38NTHw',
    img: 'https://i.scdn.co/image/ab67616d0000b273a74713b758bffa3a17208796',
    id: 1,
  },
  {
    name: 'coping with loss v1',
    bandcamp: 'http://bandcamp.com',
    spotify: 'https://open.spotify.com/album/4jHX02snJDBD1RqyypC0A4?si=Gzp0l0K2QLaipYxD38NTHw',
    img: 'https://i.scdn.co/image/ab67616d0000b273de2fb3098daed05033b208f6',
    id: 1,
  },
  {
    name: 'Demons',
    bandcamp: 'http://bandcamp.com',
    spotify: 'https://open.spotify.com/album/4jHX02snJDBD1RqyypC0A4?si=Gzp0l0K2QLaipYxD38NTHw',
    img: 'https://i.scdn.co/image/ab67616d0000b273389554ab275ad53d00cac83e',
    id: 1,
  },
  {
    name: 'Everything changes - light',
    bandcamp: 'http://bandcamp.com',
    spotify: 'https://open.spotify.com/album/4jHX02snJDBD1RqyypC0A4?si=Gzp0l0K2QLaipYxD38NTHw',
    img: 'https://i.scdn.co/image/ab67616d0000b2737609a8f43c3df2332314c3a1',
    id: 1,
  },
  {
    name: 'Everything changes - dark',
    bandcamp: 'http://bandcamp.com',
    spotify: 'https://open.spotify.com/album/4jHX02snJDBD1RqyypC0A4?si=Gzp0l0K2QLaipYxD38NTHw',
    img: 'https://i.scdn.co/image/ab67616d0000b273c07012fdfa7fa3737cb931b5',
    id: 1,
  },
  {
    name: 'Lost galaxies',
    bandcamp: 'http://bandcamp.com',
    spotify: 'https://open.spotify.com/album/4jHX02snJDBD1RqyypC0A4?si=Gzp0l0K2QLaipYxD38NTHw',
    img: 'https://i.scdn.co/image/ab67616d0000b273fac44042fbe81a70aaf7a8f9',
    id: 1,
  },
  {
    name: 'Effortless',
    bandcamp: 'http://bandcamp.com',
    spotify: 'https://open.spotify.com/album/4jHX02snJDBD1RqyypC0A4?si=Gzp0l0K2QLaipYxD38NTHw',
    img: 'https://i.scdn.co/image/ab67616d0000b27301ee897a0b0d4f126a818011',
    id: 1,
  },
  {
    name: 'Stargazing',
    bandcamp: 'http://bandcamp.com',
    spotify: 'https://open.spotify.com/album/4jHX02snJDBD1RqyypC0A4?si=Gzp0l0K2QLaipYxD38NTHw',
    img: 'https://i.scdn.co/image/ab67616d0000b273d08551f86f0451f1f3b549ef',
    id: 1,
  },
]

const fadeImages = [
  {
    url: './vinyl.jpg',
    caption: 'First Slide'
  },
  {
    url: './graf.jpg',
    caption: 'Second Slide'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Third Slide'
  },
];

export default function Home() {
  return (
    <main className="flex md:min-h-screen flex-col items-center justify-between">
      <section className="w-full bg-black">
        <div className="grid grid-cols-12 grid-rows-30 md:grid-rows-7 gap-8 md:h-screen p-8">
          <div className="bg-[#121212] rounded-2xl col-span-12 md:col-span-8 row-span-7 md:row-span-5 overflow-hidden order-2 md:order-1">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vJkBxQO65V4?si=MPYBqEQXG0ZmYkVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="bg-black rounded-2xl col-span-12 md:col-span-4 row-span-4 md:col-start-9 flex items-center justify-center logo order-1 md:order-2">
            <Logo/>
          </div>
          <div className="bg-[#121212] rounded-2xl col-span-12 md:col-span-4 row-span-6 md:row-span-6 md:col-start-9 md:row-start-5 overflow-scroll order-3 md:order-3">
            <div className="p-5 md:p-20 overflow-scroll">
              <h4 className="text-2xl mb-2">Bio</h4>
              <p className="text-[#ddd] font-thin text-[15px] mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <p className="text-[#ddd] font-thin text-[15px]">Produced beats for:</p>
              <ul className="mb-4">
                <li className="text-[#ddd] font-thin text-[15px]">Bisk</li>
                <li className="text-[#ddd] font-thin text-[15px]">Ray Vendetta</li>
                <li className="text-[#ddd] font-thin text-[15px]">Cracker John</li>
                <li className="text-[#ddd] font-thin text-[15px]">Jack Slayta</li>
              </ul>
              <p className="text-[#ddd] font-thin text-[15px]">Supported as DJ:</p>
              <ul className="mb-4">
                <li className="text-[#ddd] font-thin text-[15px]">Jeru The Damaja</li>
                <li className="text-[#ddd] font-thin text-[15px]">Skinnyman</li>
                <li className="text-[#ddd] font-thin text-[15px]">Fliptrix</li>
                <li className="text-[#ddd] font-thin text-[15px]">Taskforce</li>
              </ul>
              <p className="text-[#ddd] font-thin text-[15px]">Tools of the trade:</p>
              <ul>
                <li className="text-[#ddd] font-thin text-[15px]">Ableton & Push 2</li>
                <li className="text-[#ddd] font-thin text-[15px]">Arturia plugins</li>
                <li className="text-[#ddd] font-thin text-[15px]">Native instruments hardware & VSTs</li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl col-span-12 md:col-span-3 row-span-5 md:row-start-6 order-4 bg-cover bg-center overflow-hidden slider">
            <Fade duration={3000}>
              {fadeImages.map((fadeImage, index) => (
                <div key={index} className="h-full">
                  <img style={{ width: '100%', height: '100%' }} src={fadeImage.url} />
                </div>
              ))}
            </Fade>
          </div>
          <div className="bg-[#121212] rounded-2xl col-span-12 md:col-span-5 row-span-5 md:col-start-4 md:row-start-6 order-5 ">
            <div className="flex flex-col md:flex-row justify-between md:px-36 items-center h-full">
              <h4>youtube</h4>
              <h4>instagram</h4>
              <h4>spotify</h4>
              <h4>bandcamp</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl text-center py-20">
        <h2 className="md:-mb-[44px] text-[50px] md:text-[120px]">Beats for sale</h2>
        <AudioPlayer 
          playList={playList} 
          activeUI={{
            all: true,
            progress: 'waveform'
          }}
          placement={{
            volumeSlider: true
          }}
        />
      </section>

      <section className="text-center pt-20">
        <h2 className="md:-mb-[44px] text-[50px] md:text-[120px]">Releases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-8 px-8 pb-8 mt-0">
        {releases.map(release => (
          <div key={release.id} className="relative rounded-2xl overflow-hidden group">
            <div className="absolute z-10 inset-0 items-center justify-center flex-col hidden group-hover:flex gap-3 transition-all">
              <a href={release.bandcamp} target="_blank" rel="noopener noreferrer" className="bg-black/[0.5] px-4 py-3 rounded-md flex flex-row items-center gap-2">
                <img width={20} src="./bandcamp.png"/>
                Bandcamp</a>
              <a href={release.spotify} target="_blank" rel="noopener noreferrer" className="bg-black/[0.5] px-4 py-3 rounded-md flex flex-row items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width={20}>
                  <path fill="#1ed760" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"/>
                  <path d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z"/>
                </svg>
                Spotify
              </a>
            </div>
            <img src={release.img} alt={release.name} className="group-hover:scale-105 transition-all"/>
          </div>
        ))}
        </div>
      </section>

      <section className="bg-[#121212] flex flex-col w-full text-center text-[#777] font-light py-28">
        <p>For bookings and enquiries please contact info@greatgoodbeats.com</p>
        <p>copyright 2024</p>
      </section>

    </main>
  );
}
