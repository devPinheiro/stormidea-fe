import React, { MouseEventHandler } from 'react'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchNewsRequest } from '../../store/actions/fetch-news';

// styles
import './categorylist.scss';

interface CategoryListProps {
  label?: string;

}

const CategoryList: React.FC<CategoryListProps> = ({ label }) => {
   const dispatch = useDispatch();
  const handleFetchNews = (category: string | undefined) => {
    dispatch(fetchNewsRequest(category));
  };

  const categories = [
    'business', 'entertainment', 'general', 'health', 'science', 'sport', 'technology'
  ]
  return (
    <nav className='secondary-header'>
      <ul className='secondary-header-nav'>
        {categories.map((category, key) => {
          return (
            <li className='nav-item' onClick={() => handleFetchNews(category)} key={key}  >
              {category}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};


export default CategoryList