const navbar = () =>{
    return `<div class="parentNav">
        <nav class="nav container">
            <div class="navLogo">
                <img src="https://www.jiocinema.com/images/jc_logo_v2.svg" class="img-fluid" width="120px" alt="">
            </div>
            <div class="navlinks">
                <a href="/index.html" class="NavbarLinks">Home</a>
                <a href="/pages/sports.html" class="NavbarLinks">Sports</a>
                <a href="/pages/movies.html" class="NavbarLinks">Movies</a>
                <a href="/pages/tvshows.html" class="NavbarLinks">TV Shows</a>
                <a href="/pages/more.html" class="NavbarLinks">More</a>
            </div>
            <div class="navsearch">
                <div class="navSearchParent"><input type="text" placeholder="Search for movies, shows, or people"
                        class="inputNav"></div>
                <div class="userParent"><i class="fa-solid fa-user iconUser"></i></div>
            </div>
        </nav>
    </div>`
}

export default navbar()