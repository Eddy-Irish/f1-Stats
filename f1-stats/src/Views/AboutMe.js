import React from 'react';

const AboutMe = () => {
    return (
        <div
            style={{
                display: 'inline-list-item',
                justifyContent: 'normal',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            <h2>My name is Keegan</h2>
                <p class="about">I've been a fan and avid follower of Formula 1 since
                    the beginning of 2014 (I've only seen Mercedes win :/). <br></br> 
                    As much as I love to peruse the Wikipedia pages of various historical seasons, I thought I could create some interesting new ways
                    to visualize and view the data, along with including a few datapoints that most F1 data sites don't have.
                <br></br>
                    I used to be a professional software developer, but have been out of the industry for a few years.
                    I'm currently looking to re-enter the industry and so I'm always looking to create independent projects as a way to practice my coding, learn new languages, frameworks and/or stacks.
                    I've been learning and practicing React for a while now, really like it, and want to get more and more comfortable 
                    using it, so this site is made using React, along with Rechart for the graphs data visualizations
                </p>
        </div>
    );
};

export default AboutMe;

