import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img
                    src='https://p4.wallpaperbetter.com/wallpaper/254/557/165/aces-cards-spades-heart-wallpaper-preview.jpg'/>
            </header>
            <nav className='nav'>
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className='content'><
                div>
                <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_PokerChampionTexasHoldEm_image1600w.jpg"/>
            </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>New posts</div>
                    <div>
                        <div>post 1</div>
                        <div>post 2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
