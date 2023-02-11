import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import ArticleIcon from "@mui/icons-material/Article";
import ImageIcon from "@mui/icons-material/Image";
import RoomIcon from "@mui/icons-material/Room";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // Live API Call
  const { data } = useGoogleSearch(term);

  // Mock API Call
  //const data = Response;

  console.log(data);

  return (
    <div className="searchPage">
      <header className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
            className="searchPage__logo"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/all">Maps</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div className="searchPage__option">
                <ArticleIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="searchPage__option">
                <SlideshowIcon />
                <Link to="/all">Videos</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/all">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {term && (
      <main 
      className="searchPage__results">
        <p className="searchPage__resultCount">About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>
        {
            data?.items.map(item => (
                <div className="searchPage__result">
                    <a href={item.link}>
{/*                         {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                            <img className="searchPage__resultImage"
                            src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}></img>
                        )} */}
                        {item.displayLink}
                    </a>
                    <a href={item.link} className="searchPage__resultTitle">
                        <h2>{item.title}</h2>
                    </a>
                    <p className="searchPage__resultSnippet">
                        {item.snippet}
                    </p>
                </div>
            ))
        }
      </main>)}
    </div>
  );
}

export default SearchPage;
