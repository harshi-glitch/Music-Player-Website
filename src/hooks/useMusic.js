import { useState } from "react"

const songs = [
    {
        id: 1,
        title: "burn-the-track-inspiring-rock-trailer",
        artist: "alexgrohl",
        url: "/songs/alexgrohl-burn-the-track-inspiring-rock-trailer-478796.mp3",
        duration: "2:08",
    },

    {
        id: 2,
        title: "no-sleep-hiphop-music",
        artist: "kontraa",
        url: "/songs/kontraa-no-sleep-hiphop-music-473847.mp3",
        duration: "2:46",
    },

    {
        id: 3,
        title: "epic",
        artist: "kornevmusic",
        url: "/songs/kornevmusic-epic-478847.mp3",
        duration: "2:00",
    },

    {
        id: 4,
        title: "background-music-new-age-nature",
        artist: "sonican",
        url: "/songs/sonican-background-music-new-age-nature-465069.mp3",
        duration: "2:24",
    },

    {
        id: 5,
        title: "lo-fi-music-loop-sentimental-jazzy-love",
        artist: "sonican",
        url: "/songs/sonican-lo-fi-music-loop-sentimental-jazzy-love-473154.mp3",
        duration: "1:40",
    },
    
    {
        id: 6,
        title: "inspiring-cinematic-music",
        artist: "tunetank",
        url: "/songs/tunetank-inspiring-cinematic-music-409347.mp3",
        duration: "2:12",
    },

];


export const useMusic = () => {
    const [allSongs, setAllSongs] = useState(songs);
    const [currentTrack, setCurrentTrack] = useState(songs[0]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);

    const handlePlaySong = (song, index) => {
        setCurrentTrack(song);
        setCurrentTrackIndex(index);
        setIsPlaying(false);
    };

    const nextTrack = () => {
        setCurrentTrackIndex((prev) => {
            const nextIndex = (prev + 1 ) % allSongs.length;
            setCurrentTrack(allSongs[nextIndex]);
            return nextIndex;
        });
        setIsPlaying(false);
    };

    const prevTrack = () => {
        setCurrentTrackIndex((prev) => {
            const nextIndex = prev === 0 ? allSongs.length - 1 : prev - 1;
            setCurrentTrack(allSongs[nextIndex]);
            return nextIndex;
        });
        setIsPlaying(false);
    };

    const formatTime = (time) => {
        if (isNaN(time) || time === undefined) return "0:00"

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes} : ${seconds.toString().padStart(2, "0")}`;
    };

    const play = () => setIsPlaying(true);
    const pause = () => setIsPlaying(false);

    return { allSongs, 
        handlePlaySong,
        currentTrackIndex, 
        currentTrack,
        setCurrentTime, 
        currentTime,
        formatTime, 
        duration,
        setDuration,
        nextTrack,
        prevTrack,
        play,
        pause,
        isPlaying,
        volume,
        setVolume,
    };
};