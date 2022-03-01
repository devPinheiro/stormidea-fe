import moment from 'moment';
import React from 'react';

import './card.scss';
interface CardProps {
  featured?: boolean;
  title?: string;
  content?: string;
  author?: string;
  description?: string;
  urlToImage?: string;
  publishedAt?: string;
  even?: boolean;
  url?: string;
}

const Card: React.FC<CardProps> = ({
  featured,
  title,
  publishedAt,
  content,
  author,
  description,
  urlToImage,
  even,
  url
}) => {
  return (
    <div className='card'>
      {featured ? (
        <>
          <div className='card-label'>
            <span>Breaking News</span>
          </div>
          <div className='card-image'>
            <img
              loading='lazy'
              alt={title}
              src={
                urlToImage
                  ? urlToImage
                  : 'https://loremflickr.com/540/240/headshot,portrait,girl/all'
              }
            />
          </div>

          <section className='card-description'>
            <p className='category'>Top Story</p>
            <a href={url} target='_blank' rel='noreferrer' className='title'>
              {title}
            </a>
            <p className='short-description'>{description}</p>
            <span className='duration'>
              {moment(publishedAt).startOf('hour').fromNow()}
            </span>
          </section>
        </>
      ) : (
        <>
          <div className={`card-news ${even ? 'even' : ''}`}>
            <section className='card-description'>
              <p className='category'>Top Story</p>
              <a href={url} target='_blank' rel='noreferrer' className='title'>
                {title}
              </a>
              <div className='card-details'>
                <span className='author'>{author}</span>
                {''} • {''}
                <span className='date'>
                  {moment(publishedAt).format('MMMM DD , YYYY')}
                </span>
              </div>
            </section>

            <div className='card-image'>
              <img
                loading='lazy'
                alt={title}
                src={
                  urlToImage
                    ? urlToImage
                    : 'https://loremflickr.com/540/240/headshot,portrait,girl/all'
                }
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
