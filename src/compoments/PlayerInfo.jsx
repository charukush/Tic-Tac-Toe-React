import { useState } from "react";

export function PlayerInfo({ name, symbol }) {
    const [playerName, setIsplayerName] = useState(name);

  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing)=> !editing);
  }
    function handleName(event) {
        setIsplayerName(event.target.value);
 }
    let editPlayerName = <span className="player-name">{playerName}</span>;
    //let btnCondition = 'Edit';

  if (isEditing) {
    editPlayerName = <input type="text" required value={playerName} onChange={handleName}/>;
     // btnCondition = 'Save';
  }
  return (
    <li>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
