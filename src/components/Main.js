function Home() {
    return (
        <main className="main">
            {/* Highlights section */}
            <div className="highlights-header">
                <div>
                    Specials
                </div>
                <div>
                    <button>On the menu</button>
                </div>
            </div>
            <div className="highlights-content">
                <div>
                    <img src="https://picsum.photos/240/180" alt=""/>
                    <div>
                        <div>
                            Dish title
                        </div>
                        <div>
                            Dish price
                        </div>
                    </div>
                    <p>
                        Dish description
                    </p>
                    <h3>
                        Order a delivery
                    </h3>
                </div>
                <div>
                    <img src="https://picsum.photos/240/180" alt=""/>
                    <div>
                        <div>
                            Dish title
                        </div>
                        <div>
                            Dish price
                        </div>
                    </div>
                    <p>
                        Dish description
                    </p>
                    <h3>
                        Order a delivery
                    </h3>
                </div>
                <div>
                    <img src="https://picsum.photos/240/180" alt=""/>
                    <div>
                        <div>
                            Dish title
                        </div>
                        <div>
                            Dish price
                        </div>
                    </div>
                    <p>
                        Dish description
                    </p>
                    <h3>
                        Order a delivery
                    </h3>
                </div>
            </div>
            {/* Testimonials section */}
            <div className="tesimonials">
                <h2>Testimonials</h2>
                <div>
                    <p>
                        Start rating
                    </p>
                    <img src="https://picsum.photos/80/80" alt="User profile"/>
                    <h3>
                        Name
                    </h3>
                    <p>User review</p>
                </div>
                <div>
                    <p>
                        Start rating
                    </p>
                    <img src="https://picsum.photos/80/80" alt="User profile"/>
                    <h3>
                        Name
                    </h3>
                    <p>User review</p>
                </div>
                <div>
                    <p>
                        Start rating
                    </p>
                    <img src="https://picsum.photos/80/80" alt="User profile"/>
                    <h3>
                        Name
                    </h3>
                    <p>User review</p>
                </div>
                <div>
                    <p>
                        Start rating
                    </p>
                    <img src="https://picsum." alt="User profile"/>
                    <h3>
                        Name
                    </h3>
                    <p>User review</p>
                </div>
            </div>
            {/* About */}
            <div className="about">
                <div className="about-content">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        Donec a ante a sem dapibus pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean posuere lobortis risus at pellentesque. Vestibulum lacinia nunc ligula, in ornare velit aliquet et. Nulla iaculis justo vitae dignissim tempus.
                    </p>
                </div>
                <div className="about-picture">
                    <img src="https://picsum.photos/360/240" alt="Little Lemon"/>
                </div>
            </div>
        </main>
    );
}

export default Home;