function Navbar() {
    return (
        <div id="navbar">
            <a href="./index.html">About Me</a>
            <a href="./web.html">Web</a>
            <a href="./gamedev.html">Game Dev</a>
            <a href="./featured.html">Featured</a>
        </div>
    )
}

function Infocard(props) {
    return (
        <div class="card mb-3 blend-in card-space" style="max-width: 75%;">
            <div class="row no-gutters">
                <div class="justify-content-center">
                    <div class="card-body border-primary">
                        <div class="row justify-content-center title-styling">
                            <h5>{props.title}</h5>
                        </div>
                        <div class="row justify-content-center title-styling">
                            <p>
                                {props.content}
                            </p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

function Skills(props) {
    return (
    <div>
        <div class="row justify-content-center title-styling">
            <h5>{props.title}</h5>
        </div>
        <div class="row justify-content-center">
            <span class="badge badge-pill badge-primary skills-pills">C</span>
            <span class="badge badge-pill badge-primary skills-pills">C++</span>
            <span class="badge badge-pill badge-primary skills-pills">C#</span>
            <span class="badge badge-pill badge-primary skills-pills">Ruby</span>
        </div>
    </div>
    );
}

var introduction = (
    <div>
        <Infocard title="About me" content="Hi there! My name is Adam Tunkiewicz 
        and I'm a software engineering student. I enjoy making projects that involve 
        my personal interests and improve my lifestyle. Currently this website under 
        construction as different projects are being updated and added." />
    </div>
);

var gameDevIntro = (
    <div>
        <Infocard title="Background" content="Welcome to my game development page! Here
         you can find some background information about my interests and the games I've made.
        I've gotten into game development after playing aroundon Blender in high school, since 
        then, I've been learning about the industry while mixing in my interests whenever I can." />
    </div>
);

var cultIntro = (
    <div>
        <Infocard title="Cult" content ="Cult began as a summer project and it's purpose was to
         experiment by wearing as many hats as I could in the game development industry. The idea
          spawned from my morbid fascination of the horror genre and all-things-scary. Below I've 
          included some of the different features. &#128679;" />
    </div>
)

ReactDOM.render(<Navbar />, document.querySelector('#nav'));
ReactDOM.render(introduction, document.querySelector('#intro'));
ReactDOM.render(gameDevIntro, document.querySelector('#gameDevIntro'));
ReactDOM.render(cultIntro, document.querySelector("#cultIntro"));