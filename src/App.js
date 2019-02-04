import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [owner, setOwner] = useState('florauml');
  const [repo, setRepo] = useState('florauml');
  const [contributors, setContributors] = useState();

  useEffect(() => {
    getContributors(owner, repo).then(setContributors);
  }, []);

  if (!contributors) {
    return 'fetching...';
  }

  console.log(contributors);

  return (
    <div className="App">
      <input onChange={setOwner} value={owner}/>
      <ul>
        {contributors.map(contributor => (
          <li key="{contributor.id}">{contributor.login}</li>
        ))}
      </ul>
    </div>
  );
}

function getContributors(owner, repo) {
  return githubApi(`repos/${owner}/${repo}/contributors`);
}

function githubApi(path) {
  return fetch(`https://api.github.com/${path}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'succcubbus',
    },
  }).then(response => response.json())
    .catch(console.error);
}

export default App;
