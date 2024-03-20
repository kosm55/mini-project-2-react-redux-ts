import StarRating from 'react-star-ratings';
import {FC} from "react";

interface IProp{
    vote_average: number
}
const StarsRating: FC <IProp> = ({vote_average}) => {
    return (
        <StarRating
            rating={vote_average}
            starRatedColor="orange"
            numberOfStars={10}
            starDimension='15px'
            starSpacing='0'
        />
    );
};

export {StarsRating};