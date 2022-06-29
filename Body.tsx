import React from "react";
import { Card, CardSubtitle, CardText, CardTitle, CardBody, CardImg } from 'reactstrap';

function Body({
    firstName,
    lastName,
    profilePic,
    stars,
    comment,
    timestamp,
  }: {
    firstName?: string;
    lastName?: string;
    profilePic?: string;
    stars?: number;
    comment?: string;
    timestamp?: number;
  }) {
    return (
      <Card>
        <CardBody>
          <CardTitle tag = 'h1'>Faustus Reviews</CardTitle>
          <div className = 'reviews-top'>
            <div className = 'user-details'>
              <CardImg
                className = 'avatar'
                src = {
                  profilePic ||
                  'https://cdn2.rsc.org.uk/sitefinity/images/productions/2016-shows/doctor-faustus/production-photos/doctor-faustus-production-photos_-february-2016_2016_photo-by-helen-maybanks-_c_-rsc_183335.tmb-gal-670.jpg?sfvrsn=e14a2121_2'
                }
                alt = 'user avatar'
              />
  
              <CardSubtitle className = 'mb-2 text-muted' tag = 'h6'>
                {firstName || 'Doctor'} {lastName || 'Faustus'}
              </CardSubtitle>
              {[...Array(stars || 5)].map((star) => {
                return <CardSubtitle tag = 'h5'>⭐ </CardSubtitle>;
              })}
            </div>
            <div className = 'reviews-body'>
              <CardText>
                {comment ||
                  'I stayed at the Holiday Inn and it is by far the best experience I have had while staying at the many places Mephistophilis has taken me. I did not have to please anyone by conjuring up Alexander the Great from the dead, I was able to go to bed every night without the possibility of some lunatic hourse-courser taking my leg, and, best of all, I even walked into the hotel without the worry of being ambushed and decapitated by that vengeful Benvolio! I hope to come back here before my time runs out.'}
              </CardText>
            </div>
            <CardText>
              <small className = 'text-muted text-bold'>
                {timestamp || '430 years ago'}
              </small>
            </CardText>
          </div>
        </CardBody>
      </Card>
    );
  }
  
  export default Body;