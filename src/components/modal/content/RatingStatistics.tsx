import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "@/enums/style";
import { ButtonText, ButtonType } from "@/enums/form";
import { Button } from "@/components/form";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  selectRating,
  getRatingSortedByUserGender,
  getRatingsFilteredByUserAge,
  getRatingsFilteredByUserLocation,
} from "@/store/features/ratingSlice";
import { UrlQueryHelper } from "@/utils/UrlQueryHelper";

interface Props {
  onClose: any;
}

export default function RatingStatistics({ onClose }: Props) {
  const dispatch = useAppDispatch();
  const {
    ratingSortedByUserGender,
    ratingsFilteredByUserAge,
    ratingsFilteredByUserLocation,
  } = useAppSelector(selectRating);

  useEffect(() => {
    const movieId = UrlQueryHelper.getMovieId();
    dispatch(getRatingSortedByUserGender(movieId));
    dispatch(getRatingsFilteredByUserAge(movieId));
    dispatch(getRatingsFilteredByUserLocation(movieId));
  }, []);

  return (
    <RatingStatisticsContainer>
      <div className="closeButtonWrapper">
        <Button
          type={ButtonType.BUTTON}
          text={ButtonText.CLOSE}
          backgroundColor={Colors.BLACK}
          border={"none"}
          borderRadius={"20px"}
          fontSize={"14px"}
          fontWeight={"500"}
          padding={"5px 10px"}
          color={Colors.WHITE}
          onClick={() => onClose()}
        />
      </div>
      <RatingStatisticsOfAgeContainer>
        <h3>Age</h3>
        <div>
          <div className="RatingDataSection">
            <p>~20</p>
            <div>
              {ratingsFilteredByUserAge.lte20?.toFixed(1) || 0} out of 5
            </div>
          </div>
          <div className="RatingDataSection">
            <p>21~40</p>
            <div>
              {ratingsFilteredByUserAge.lte40?.toFixed(1) || 0} out of 5
            </div>
          </div>
          <div className="RatingDataSection">
            <p>41~60</p>
            <div>
              {ratingsFilteredByUserAge.lte60?.toFixed(1) || 0} out of 5
            </div>
          </div>
          <div className="RatingDataSection">
            <p>61~</p>
            <div>
              {ratingsFilteredByUserAge.gte61?.toFixed(1) || 0} out of 5
            </div>
          </div>
        </div>
      </RatingStatisticsOfAgeContainer>
      <RatingStatisticsOfLocationContainer>
        <h3>Location</h3>
        <div>
          <div className="RatingDataSection">
            <p>Asia</p>
            <div>
              {ratingsFilteredByUserLocation.asia?.toFixed(1) || 0} out of 5
            </div>
          </div>
          <div className="RatingDataSection">
            <p>Africa</p>
            <div>
              {ratingsFilteredByUserLocation.africa?.toFixed(1) || 0} out of 5
            </div>
          </div>
          <div className="RatingDataSection">
            <p>Europe</p>
            <div>
              {ratingsFilteredByUserLocation.europe?.toFixed(1) || 0} out of 5
            </div>
          </div>
          <div className="RatingDataSection">
            <p>North America</p>
            <div>
              {ratingsFilteredByUserLocation.northAmerica?.toFixed(1) || 0} out
              of 5
            </div>
          </div>
          <div className="RatingDataSection">
            <p>South America</p>
            <div>
              {ratingsFilteredByUserLocation.southAmerica?.toFixed(1) || 0} out
              of 5
            </div>
          </div>
          <div className="RatingDataSection">
            <p>Oceania</p>
            <div>
              {ratingsFilteredByUserLocation.oceania?.toFixed(1) || 0} out of 5
            </div>
          </div>
          <div className="RatingDataSection">
            <p>Antarctica</p>
            <div>
              {ratingsFilteredByUserLocation.antarctica?.toFixed(1) || 0} out of
              5
            </div>
          </div>
        </div>
      </RatingStatisticsOfLocationContainer>
      <RatingStatisticsGenderContainer>
        <h3>Gener</h3>
        <div>
          <div className="RatingDataSection">
            <p>Male</p>
            <div>{ratingSortedByUserGender.male?.toFixed(1) || 0} out of 5</div>
          </div>
          <div className="RatingDataSection">
            <p>Female</p>
            <div>
              {ratingSortedByUserGender.female?.toFixed(1) || 0} out of 5
            </div>
          </div>
          <div className="RatingDataSection">
            <p>Unknown</p>
            <div>
              {ratingSortedByUserGender.unknown?.toFixed(1) || 0} out of 5
            </div>
          </div>
        </div>
      </RatingStatisticsGenderContainer>
    </RatingStatisticsContainer>
  );
}

const RatingStatisticsContainer = styled.div`
  width: 550px;
  height: 640px;
  margin: 0 auto;
  background: ${Colors.WHITE};
  border-radius: 5px;
  overflow-y: auto;

  .closeButtonWrapper {
    display: flex;
    flex-direction: row-reverse;
    margin: 10px;
  }
`;

const RatingStatisticsOfAgeContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  border-bottom: 1px solid ${Colors.WHITE_GRAY};

  h3 {
    margin: 0;
    padding: 0;
  }

  .RatingDataSection {
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      width: 25%;
      margin-right: 10px;
    }

    p:after {
      content: ":";
    }
  }
`;

const RatingStatisticsOfLocationContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  border-bottom: 1px solid ${Colors.WHITE_GRAY};

  h3 {
    margin: 10px 0;
    padding: 0;
  }

  .RatingDataSection {
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      width: 25%;
      margin-right: 10px;
    }

    p:after {
      content: ":";
    }
  }
`;

const RatingStatisticsGenderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  border-bottom: 1px solid ${Colors.WHITE_GRAY};

  h3 {
    margin: 0;
    padding: 0;
  }

  .RatingDataSection {
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      width: 25%;
      margin-right: 10px;
    }

    p:after {
      content: ":";
    }
  }
`;
