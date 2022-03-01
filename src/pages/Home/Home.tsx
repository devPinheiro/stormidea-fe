import React, { useState, useEffect, FormEvent } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';

// components
import { fetchNewsRequest } from '../../store/actions/fetch-news';


// styles
import './home.scss';
import { Link, Redirect } from 'react-router-dom';
import Card from '../../components/Card';
import CategoryList from '../../components/CategoryList';
import Button from '../../components/Button';



const Login = () => {
  // manage state
  const { addToast } = useToasts();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const defaultState = useSelector((s: any) => s);
  const { fetchNews } = defaultState;
  const [news, setNews] = useState<any>([]);


  const loadMore = () => {
    dispatch(fetchNewsRequest());
  }
  

  // useEffect for
  useEffect(() => {
   dispatch(fetchNewsRequest())
  }, []);

  useEffect(() => {
    if(fetchNews.error){
      setError(fetchNews.error);
    }
    if (fetchNews.data && fetchNews.data.articles) {
      setNews(fetchNews.data.articles);
 
    }
  }, [fetchNews]);

  

  return (
    <main className='main'>
      <CategoryList />
      {!fetchNews.isloading ? (
        news.map(
          (
            {
              featured,
              title,
              publishedAt,
              content,
              author,
              description,
              urlToImage,
              url,
            }: any,
            key: React.Key | any
          ) => {
            return (
              <Card
                title={title}
                content={content}
                key={key}
                author={author}
                description={description}
                urlToImage={urlToImage}
                publishedAt={publishedAt}
                featured={key === 0}
                even={key % 2 === 0}
                url={url}
              />
            );
          }
        )
      ) : (
        <small>Loading...</small>
      )}
   
   {/* API documentation  */}
      {/* {news.length !== 0 && news.length < 20 && (
        <div className='loadmore-btn'>
          <Button name='Load More' type='hollow' onClick={loadMore} />
        </div>
      )} */}

      {error && <small>{error}</small>}
    </main>
  );
};

export default Login;
