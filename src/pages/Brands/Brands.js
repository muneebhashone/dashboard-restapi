import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import Results from 'src/components/brands/Results';
import Toolbar from 'src/components/brands/Toolbar';
import { useQuery } from 'react-query';
import { getBrands } from 'src/requests';

const Brands = () => {
  const { data, loading, error, refetch } = useQuery('getBrands', getBrands);

  return (
    <>
      <Helmet>
        <title>Brands | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Toolbar />
          <Box sx={{ pt: 3 }}>
            {data && <Results refetchData={refetch} data={data.data.data} />}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Brands;
