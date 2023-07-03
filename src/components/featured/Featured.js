import React from 'react';
import './featured.scss';
import { InfoOutlined, PlayArrow } from '@mui/icons-material';

export default function Featured({type}) {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}
      <img className='mainImg' src="https://staticg.sportskeeda.com/editor/2022/11/a402f-16694231050443-1920.jpg" alt="" />
      <div className="info">
        <img src="https://www.pngmart.com/files/8/Matrix-Transparent-PNG-1.png" alt="" />
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fuga, sunt deleniti earum hic molestiae aliquid quas distinctio non sapiente delectus similique, obcaecati nihil harum laborum, eum rerum qui totam sequi nam iusto fugit cupiditate aspernatur! Sit blanditiis non, eligendi esse error iure dignissimos voluptates nostrum possimus ullam vel atque quaerat minima sapiente.</span>
        <div className="buttons">
            <button><PlayArrow className='icon'/>Play</button>
            <button><InfoOutlined className='icon'/>Info</button>
        </div>
      </div>
    </div>
  )
}
