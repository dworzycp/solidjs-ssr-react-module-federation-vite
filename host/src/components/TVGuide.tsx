import { Component } from "solid-js";

import './TVGuide.css';

export { TVGuide }

const TVGuide: Component = () => {
    return (
        <section>
            <h1>TV Guide</h1>
            <div class="row">
                <div class="channel">
                    <h2>Channel 1</h2>
                </div>
                <div class="programme">
                    <span class="programme__time">All day</span>
                    <p>Love Island</p>
                </div>
            </div>
            <div class="row">
                <div class="channel">
                    <h2>Channel 2</h2>
                </div>
                <div class="programme">
                    <span class="programme__time">All day</span>
                    <p>Love Island</p>
                </div>
            </div>
            <div class="row">
                <div class="channel">
                    <h2>Channel 3</h2>
                </div>
                <div class="programme">
                    <span class="programme__time">All day</span>
                    <p>Love Island</p>
                </div>
            </div>
        </section >
    )
}