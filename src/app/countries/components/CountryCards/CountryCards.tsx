import { Box, Pagination, Typography } from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import mediaCardsStyles from "./CountryCards.styles";
import ICountryPreviewEntity from "@entities/countryPreview.entity";

const CountryCards: FC<{ cards: ICountryPreviewEntity[] }> = ({ cards }) => {
  const length = cards.length;
  const hasCards = length > 0;
  const itemPerPage = 8;
  const pages = Math.ceil(length / itemPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const offsetMin = (currentPage - 1) * itemPerPage;
  const prevMax = offsetMin + itemPerPage;
  const offsetMax = length > prevMax ? prevMax : length;
  const filteredCard = cards.slice(offsetMin, offsetMax);

  useEffect(() => {
    setCurrentPage(1);
  }, [cards]);

  const onChangePage = (_: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return hasCards ? (
    <>
      <Box sx={mediaCardsStyles.container}>
        {filteredCard.map((props, index) => (
          <CountryCard
            key={index}
            image={props.flag.src}
            alt={props.flag.alt}
            name={props.name.common}
            officialName={props.name.official}
            id={props.id}
            population={props.population}
            region={props.region}
            capital={props.capital}
          />
        ))}
      </Box>
      <Pagination
        count={pages}
        page={currentPage}
        onChange={onChangePage}
        siblingCount={0}
      />
    </>
  ) : (
    <Typography variant={"body1"} sx={mediaCardsStyles.notFound}>
      No matches found...
    </Typography>
  );
};

export default CountryCards;
