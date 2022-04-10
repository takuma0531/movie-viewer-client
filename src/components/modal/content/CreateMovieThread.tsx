import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "@/enums/style";
import { Button, InputField, Select } from "../../form";
import { ButtonText, InputFieldLabel } from "@/enums/form";
import { InputFieldName, InputFieldType, ButtonType } from "@/enums/form";
import { Movie } from "@/typings/models/movie";
import { Genre } from "@/typings/models/genre";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createMovie } from "@/store/features/movieSlice";
import { getAllGenres, selectGenre } from "@/store/features/genreSlice";
import { Artist } from "@/typings/models/artist";

interface Props {
  onClose: any;
}

export default function CreateMovieThread({ onClose }: Props) {
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector(selectGenre);
  const [movie, setMovie] = useState<Movie>({
    title: "",
    description: "",
    genre: "",
    director: { name: "", description: "", movies: [] },
    thumbnail: "",
    comments: [],
    artists: [],
    ratings: [],
    averageRating: 0,
  });
  const [newArtist, setNewArtist] = useState<Artist>({
    name: "",
    description: "",
    movies: [],
  });

  const renderArtistInputFields = movie.artists!.map((artist, index) => {
    return (
      <InputField
        key={index}
        name={InputFieldName.ARTIST + (index + 1)}
        type={InputFieldType.TEXT}
        value={artist.name}
        label={InputFieldLabel.ARTIST + (index + 1)}
        onChange={(e) =>
          setMovie((prevState: Movie) => {
            prevState.artists![index].name = e.target.value;
            return {
              ...prevState,
            };
          })
        }
      />
    );
  });

  const handleAddArtistButton = () => {
    if (!newArtist) return;
    setMovie((prevState: Movie) => {
      prevState.artists!.push(newArtist);
      return {
        ...prevState,
      };
    });
    setNewArtist({ name: "", description: "", movies: [] });
  };

  const renderGenreOptions = genres.map((genre: Genre, index: number) => (
    <option key={index} value={genre.id}>
      {genre.name}
    </option>
  ));

  const handleSubmitting = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const temp = movie;
    if (newArtist.name) temp.artists!.push(newArtist);
    await dispatch(createMovie(temp));
    initializeState();
    onClose();
  };

  const initializeState = () => {
    setMovie({
      title: "",
      description: "",
      genre: "",
      director: { name: "", description: "", movies: [] },
      thumbnail: "",
      comments: [],
      artists: [],
      ratings: [],
      averageRating: 0,
    });
    setNewArtist({ name: "", description: "", movies: [] });
  };

  useEffect(() => {
    dispatch(getAllGenres());
  }, []);

  useEffect(() => {
    if (genres.length != 0)
      setMovie({
        title: "",
        description: "",
        genre: genres[0].id!,
        director: { name: "", description: "", movies: [] },
        thumbnail: "",
        comments: [],
        artists: [],
        ratings: [],
        averageRating: 0,
      });
  }, [genres]);

  return (
    <CreateMovieThreadContainer>
      <FormContainer onSubmit={(e) => handleSubmitting(e)}>
        <div className="buttonSection">
          <Button
            type={ButtonType.BUTTON}
            text={ButtonText.CLOSE}
            border={"none"}
            fontSize={"14px"}
            fontWeight={"500"}
            color={Colors.BLACK}
            onClick={() => onClose()}
          />
          <Button
            type={ButtonType.SUBMIT}
            padding={"4px 8px"}
            text={ButtonText.CONFIRM}
            borderRadius={"20px"}
            backgroundColor={Colors.BLACK}
            backgroundColorOnHover={Colors.LIGHT_BLACK}
            fontSize={"14px"}
            fontWeight={"500"}
            color={Colors.WHITE}
          />
        </div>
        <InputField
          name={InputFieldName.TITlE}
          type={InputFieldType.TEXT}
          value={movie.title}
          label={InputFieldLabel.TITLE}
          onChange={(e) =>
            setMovie((prevState: Movie) => ({
              ...prevState,
              title: e.target.value,
            }))
          }
        />
        <InputField
          name={InputFieldName.DESCRIPTION}
          type={InputFieldType.TEXT}
          value={movie.description}
          label={InputFieldLabel.DESCRIPTION}
          onChange={(e) =>
            setMovie((prevState: Movie) => ({
              ...prevState,
              description: e.target.value,
            }))
          }
        />
        <Select
          name={InputFieldName.GENRE}
          label={InputFieldLabel.GENRE}
          selectValue={movie.genre}
          onChange={(e: any) =>
            setMovie((prevState: Movie) => ({
              ...prevState,
              genre: e.target.value,
            }))
          }
          options={renderGenreOptions}
        />
        {/* Thumbnail to add TODO: */}
        thumbnail field
        <InputField
          name={InputFieldName.DIRECTOR}
          type={InputFieldType.TEXT}
          label={InputFieldLabel.DIRECTOR}
          value={movie.director?.name!}
          onChange={(e: any) =>
            setMovie((prevState: Movie) => ({
              ...prevState,
              director: {
                name: e.target.value,
                description: "",
                movies: [],
              },
            }))
          }
          placeHolder={"Optional"}
          isRequired={false}
        />
        {renderArtistInputFields}
        <div className="artistAddWrapper">
          <InputField
            name={InputFieldName.ARTIST}
            type={InputFieldType.TEXT}
            label={InputFieldLabel.ARTIST + (movie.artists!.length + 1)}
            value={newArtist.name}
            onChange={(e) =>
              setNewArtist({
                name: e.target.value,
                description: "",
                movies: [],
              })
            }
            placeHolder={"Optional"}
            isRequired={false}
          />
          <Button
            type={ButtonType.BUTTON}
            padding={"6px 12px"}
            text={ButtonText.ADD}
            fontSize={"14px"}
            borderRadius={"20px"}
            backgroundColor={Colors.BLACK}
            backgroundColorOnHover={Colors.LIGHT_BLACK}
            fontWeight={"500"}
            color={Colors.WHITE}
            onClick={() => handleAddArtistButton()}
          />
        </div>
      </FormContainer>
    </CreateMovieThreadContainer>
  );
}

const CreateMovieThreadContainer = styled.div`
  width: 550px;
  height: 640px;
  margin: 0 auto;
  background: ${Colors.WHITE};
  border-radius: 5px;
  overflow-y: auto;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 80%;
  margin: 0 auto;

  .buttonSection {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
  }

  * {
    margin: 3px 0;
  }

  .artistAddWrapper {
    position: relative;

    button {
      position: absolute;
      top: 42%;
      right: 0;
    }
  }
`;
