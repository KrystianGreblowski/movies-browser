import { Tiles, Tile, Image, Description, MovieTitle, MovieYear, MovieTypes, MovieType, Rating, StarImage, Rate, Votes } from "./styled"
import poster from "../.././Images/poster.png"
import star from "../.././Images/Vector.svg"


export const MovieTiles = () => {
    return (
        <Tiles>
            <Tile>
                <Image src={poster} />
                <Description>
                    <MovieTitle>Mulan</MovieTitle>
                    <MovieYear>2020</MovieYear>
                    <MovieTypes>
                        <MovieType> Action </MovieType>
                        <MovieType> Adventure </MovieType>
                        <MovieType> Drama </MovieType>
                    </MovieTypes>
                </Description>
                <Rating>
                    <StarImage src={star} />
                    <Rate>7,9</Rate>
                    <Votes>35 votes</Votes>
                </Rating>
            </Tile>
            <Tile>
                <Image src={poster} />
                <Description>
                    <MovieTitle>Mulan</MovieTitle>
                    <MovieYear>2020</MovieYear>
                    <MovieTypes>
                        <MovieType> Action </MovieType>
                        <MovieType> Adventure </MovieType>
                        <MovieType> Drama </MovieType>
                    </MovieTypes>
                </Description>
                <Rating>
                    <StarImage src={star} />
                    <Rate>7,9</Rate>
                    <Votes>35 votes</Votes>
                </Rating>
            </Tile>
            <Tile>
                <Image src={poster} />
                <Description>
                    <MovieTitle>Mulan</MovieTitle>
                    <MovieYear>2020</MovieYear>
                    <MovieTypes>
                        <MovieType> Action </MovieType>
                        <MovieType> Adventure </MovieType>
                        <MovieType> Drama </MovieType>
                    </MovieTypes>
                </Description>
                <Rating>
                    <StarImage src={star} />
                    <Rate>7,9</Rate>
                    <Votes>35 votes</Votes>
                </Rating>
            </Tile>
            <Tile>
                <Image src={poster} />
                <Description>
                    <MovieTitle>Mulan</MovieTitle>
                    <MovieYear>2020</MovieYear>
                    <MovieTypes>
                        <MovieType> Action </MovieType>
                        <MovieType> Adventure </MovieType>
                        <MovieType> Drama </MovieType>
                    </MovieTypes>
                </Description>
                <Rating>
                    <StarImage src={star} />
                    <Rate>7,9</Rate>
                    <Votes>35 votes</Votes>
                </Rating>
            </Tile>
        </Tiles>
    )
}