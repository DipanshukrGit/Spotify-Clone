console.log("Welcome to Spotify");

        let songIndex = 0;
        let audioElement = new Audio('songs/1.mp3');
        let masterPlay = document.getElementById('masterPlay');
        let myProgressBar = document.getElementById('myProgressBar');
        let gif = document.getElementById('gif');
        let masterSongName = document.getElementById('masterSongName');
        let songItems = Array.from(document.getElementsByClassName('songitem'));

        let songs = [
            { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
            { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
            { songName: "DEAF KEV - Invincible [NCS Release]", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
            { songName: "Different Heaven - My Heart", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
            { songName: "Janji - Heroes Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
            { songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" }
        ];

        songItems.forEach((element, i) => {
            element.getElementsByTagName("img")[0].src = songs[i].coverPath;
            element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
        });

        masterPlay.addEventListener('click', () => {
            if (audioElement.paused || audioElement.currentTime <= 0) {
                audioElement.play();
                masterPlay.classList.remove('fa-play');
                masterPlay.classList.add('fa-pause');
                gif.style.opacity = 1;
            } else {
                audioElement.pause();
                masterPlay.classList.remove('fa-pause');
                masterPlay.classList.add('fa-play');
                gif.style.opacity = 0;
            }
        });

        audioElement.addEventListener('timeupdate', () => {
            let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
            myProgressBar.value = progress;
        });

        myProgressBar.addEventListener('change', () => {
            audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
        });