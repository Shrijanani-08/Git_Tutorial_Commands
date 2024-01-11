import "./App.css";
import AddFileOne from "./components/AddFileOne";
import DevComponent from "./components/DevComponent";
import Filefour from "./components/Filefour";
import Fileone from "./components/Fileone";
import Filethree from "./components/Filethree";
import Filetwo from "./components/Filetwo";

function App() {
  return (
    <div className="App">
      <h4>Git Learning App</h4>
      <p>
        Initializing GIT <b>git init</b>
      </p>
      <p>
        To create Main branch <b>git branch -M main</b>
      </p>
      <AddFileOne />
      <Fileone />
      <div className="d-flex">
        <Filetwo />,
        <Filethree />,
        <Filefour /> - Multiple files added at a same time - <b>git add src/components/Filetwo.js src/components/Filethree.js src/components/Filefour.js</b>
      </div>
      <p>
        If we are Editing mutiples files means we can add all at a time by using <b>git add .</b>
      </p>
      <p>
        Commit the process before push in to branch <b>commit -m "msg abt that commit"</b>
      </p>
      <p>
        To check which are modified, added, removed - <b>git status</b>
      </p>
      <p>
        To check which branch name <b>git branch</b>
      </p>
      <p>
        To remove Filefour - <b>rm src/components/Filefour.js</b>
      </p>
      <p>
        To restore Filefour - <b>git restore .</b>
      </p>
      <p>
        To create new branch - <b>git branch dev</b>
      </p>
      <p>
        To checkout to the another branch - <b>git checkout main</b>
      </p>
      <DevComponent />
    </div>
  );
}

export default App;
