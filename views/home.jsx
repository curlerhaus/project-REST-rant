const React = require('react');
const Def = require('./default');

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/bacon.jpg" alt="bacon" />
                    <div>
                        Photo by <a href="https://unsplash.com/es/@israelalbornoz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Israel Albornoz</a> on <a href="https://unsplash.com/s/photos/bacon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    );
};

module.exports = home
