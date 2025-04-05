import { Routes, Route } from "react-router-dom"
import { MovieList } from "../pages"
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import AddMovies from "../pages/AddMovies";

const AllRoutes = () => {
  return <>
    <Routes>
        <Route path="/" element={<MovieList title= "Best Movies here" apiPath="movie/now_playing"/>}/>
        <Route path="movies/SignUpPage" element={<SignUpPage />}/>
        <Route path="movies/LoginPage" element={<LoginPage />} /> 
        <Route path="/movies/AddMovies" element={<AddMovies />} /> {/**Routes created and title is the tab txt , but for the title to reflect have to insert useeffect into the MovieList code inside export */}
    </Routes>
  </>
}

export default AllRoutes