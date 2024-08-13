import Pokeball from "../assets/pokeball.png";

export const Box = ({ title, item }) => {
  const sound = item?.sound;
  if (sound) {
    const audio = new Audio(sound);
    audio.play();
  }
  return (
    <div className="box">
      <div className="title">{title}</div>
      <div className="pokeball">
        {item && <img className="item-img" src={item.image} alt="ditto" />}
        <div className="item-name">{item?.name}</div>
      </div>
    </div>
  );
};
