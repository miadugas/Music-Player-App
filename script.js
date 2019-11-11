const songs =[
"Anger.mp3",
"Chameleon.mp3",
"Crystal Blue.mp3",
"I Can't Breathe.mp3",
"I Was Wrong.mp3",
"Just A Glance.mp3",
"Lie To Me.mp3",
"Never Alone.mp3",
"One for the Road.mp3",
"Party's Back.mp3",
"Shell Shocked.mp3",
"Wade It Out.mp3",
"When We Let Go.mp3",
]

const createSongList = () =>{
const list = document.createElement ("ol")

for(let i = 0; i <songs.length; i++) {
const item = document.createElement("li")
item.appendChild(document.createTextNode(songs[i]))

list.appendChild(item)

}
return list
}

document.getElementById("songList").appendChild(createSongList())

songList.onclick = (e) => {
    //console.log(e)
    const clickedItem = e.target
    const source = document.getElementById("source")
    source.src = "./assets/songs/" + clickedItem.innerText
    //console.log(clickedItem.innerText)

document.getElementById("currentSong").innerText = 

player.load()
player.play()
}
