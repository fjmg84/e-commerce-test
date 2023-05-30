export const generateRated = ({ value, colorFill, colorOutFill }) => {
  let rating = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= value)
      rating.push(<i key={i} className={`fa fa-star ${colorFill}`}></i>);
    else rating.push(<i key={i} className={`fa fa-star ${colorOutFill}`}></i>);
  }

  return rating;
};
