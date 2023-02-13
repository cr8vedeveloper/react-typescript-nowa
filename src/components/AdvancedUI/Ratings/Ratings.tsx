import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import CircleIcon from "@material-ui/icons/Circle";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import StarRateIcon from "@material-ui/icons/StarRate";
import Stack from "@mui/material/Stack";
import StarsIcon from "@material-ui/icons/Stars";
import { styled } from "@mui/material/styles";


const Ratings = () => {
  const StyledRating = styled(Rating)({ color: "#F1C40F" });
  const StyledStarRating = styled(Rating)({ color: "#E74C3C" });
  const StyledheartRating = styled(Rating)({ color: "#E74C3C" });
  const onChange = (value:any) => {
    window.alert(`rating is ${value}`);
  };
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">RATINGS</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Advanced UI
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Ratings
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Row className="row-cards">
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Star Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block" id="rating-1" data-stars="2">
                <div className="rating-stars block">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating name="no-value" size="large" value={3} max={5} />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Heart Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block" id="rating-2" data-stars="2">
                <div className="rating-stars block">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <StyledRating
                      name="customized-color"
                      defaultValue={2}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Multi Star Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block" id="rating-3" data-stars="2">
                <div className="rating-stars block">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <StyledStarRating name="no-value" size="large" value={3} max={10} />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Multi Heart Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block" id="rating-6" data-stars="2">
                <div className="rating-stars block">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <StyledheartRating
                      name="no-value"
                      size="large"
                      value={3}
                      max={10}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Thumbs-up Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block" id="rating-5" data-stars="2">
                <div className="rating-stars block">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating
                      name="no-value"
                      size="large"
                      value={3}
                      max={5}
                      icon={<ThumbUpIcon fontSize="inherit" />}
                      emptyIcon={<ThumbUpIcon fontSize="inherit" />}
                    />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Basic Star Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block my-rating">
                <Stack spacing={1} className="rating-stars block my-rating ratingcenter">
                  <Rating
                    name="half-rating"
                    value={3}
                    precision={0.5}
                    size="large"
                    icon={<StarRateIcon fontSize="inherit" />}
                    emptyIcon={<StarRateIcon fontSize="inherit" />}
                  />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Rounded star Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block my-rating-4" data-stars="2">
                <Stack spacing={1} className="rating-stars  block my-rating-4 ratingcenter">
                  <Rating
                    name="half-rating"
                    value={3}
                    precision={0.5}
                    size="large"
                    icon={<StarsIcon fontSize="inherit" />}
                    emptyIcon={<StarsIcon fontSize="inherit" />}
                  />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>gradients Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block my-rating-5" data-stars="2">
                <Stack spacing={1} className="rating-stars block my-rating-5 ratingcenter">
                  <Rating
                    name="half-rating"
                    value={3}
                    precision={0.5}
                    size="large"
                    icon={<StarRateIcon fontSize="inherit" />}
                    emptyIcon={<StarRateIcon fontSize="inherit" />}
                  />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Execute callback when rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block my-rating-6" data-stars="2">
                <Stack spacing={1} className="rating-stars block my-rating-6 ratingcenter">
                  <Rating
                    name="half-rating"
                    value={3}
                    precision={0.5}
                    size="large"
                    onChange={onChange}
                    icon={<StarRateIcon fontSize="inherit" />}
                    emptyIcon={<StarRateIcon fontSize="inherit" />}
                  />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>read only mode</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block my-rating-7" data-stars="2">
                <Stack spacing={1} className="rating-stars block my-rating-7 ratingcenter">
                  <Rating name="half-rating-read" value={3} max={5} size="large" readOnly />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Use fullstars</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block my-rating-8" data-stars="2">
                <div className="rating-stars block">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating name="no-value" size="large" max={5} />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      {/* <!-- row closed --> */}
    </div>
  );
}

Ratings.propTypes = {};

Ratings.defaultProps = {};

export default Ratings;
