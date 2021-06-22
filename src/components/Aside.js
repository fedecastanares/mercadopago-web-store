import React, { useState } from 'react';

import useCategory from "../hooks/useCategory";

import {
  Button,
  Typography,
  Grid,
  Breadcrumbs,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Aside = () => {
  const { categoryInfo, selectedCategory, setSelectedCategory } = useCategory();
  const [expanded, setExpanded] = useState(false);

  const handlerCategoryBreadcrums = index => {
    let selectedCategoryCopy = [...selectedCategory];
    selectedCategoryCopy.splice(index + 1);
    setSelectedCategory(selectedCategoryCopy);
  }

  return (
    <>
      <br/>
      <br/>
      <br/>
      <Breadcrumbs aria-label="breadcrumb" style={{margin: 15}}>
        {selectedCategory.map((category, index) => 
          <Button key={category.id} onClick={() => handlerCategoryBreadcrums(index)}>{category.name}</Button>
        )}
      </Breadcrumbs>

      <Accordion
        expanded={expanded}
        onChange={() =>setExpanded(!expanded)}
        style={{margin: 15}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography variant="h3" component="h3" align="center">
            Categorias
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            {categoryInfo &&
              categoryInfo.category.children_categories.map((subcategory) => (
                <Grid item key={subcategory.id} xs={12}>
                  <Button
                    fullWidth
                    onClick={() => setSelectedCategory([...selectedCategory, {id: subcategory.id, name: subcategory.name}])}
                  >
                    {subcategory.name}
                  </Button>
                </Grid>
              ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Aside;
