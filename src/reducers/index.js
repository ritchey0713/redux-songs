import { combineReducers } from "redux"

const SongsReducer = () => {
  return [
    {title: "Name", duration: "4:05"},
    {title: "Name2", duration: "3:15"},
    {title: "Name3", duration: "3:45"}
  ]
}

const SelectedSongReducer = (selectedSong = null, action) => {
  switch(action.type){
    case "SELECTED_SONG":
    return action.payload 

    default: 
      return selectedSong
  }
}

export default combineReducers({
  songs: SongsReducer,
  selectedSong: SelectedSongReducer
})