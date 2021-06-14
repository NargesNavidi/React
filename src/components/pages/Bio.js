import React from 'react';
import '../../App.css';

export default function Bio() {
    return (
    <main className='text__container' >
        <h1 className="bio">Bio</h1>
        
        <div className="row">
        <p>Hey, Howdy?
        The name is Narges ( Hmmm! like Nar+Guess! 😉 ), and guess what? This is my website, a great medium of today to say to the world that “I’m Here…!!!”
        Skim through my works of passion. They are representing my way to relate to you in a dazzling fashion. I hope you relate to them as well!
        I’ve never figured out if I loved my different hobbies equally or which I love more than the others. As the argument goes, adding a general “Good” with a deeper implication of it here, would be helpful! So…, good films, good picture, good photography, good music, good books, and good YouTube stuff, and good food, just to name a few. I mean, Duh! Who is not in love with these?!</p>
            <address id='contact' >
                <h2>Contact Me</h2>
                <a href="callto:7146844576">
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                    <p>Phone: 714.684.4576</p>
                </a>
                
                <a href="mailto:navidi_graphist@yahoo.com">
                <i class="fas fa-envelope-square" aria-hidden="true"></i>
                    <p>e-mail: navidi_graphist@yahoo.com</p>
                </a>
                <a href="https://www.linkedin.com/in/narges-navidi">
                    <i class="fab fa-linkedin" aria-hidden="true"></i>
                    <p>linkedin.com/in/narges-navidi</p>
                </a>
            </address>
        </div>

    </main>
    )
}