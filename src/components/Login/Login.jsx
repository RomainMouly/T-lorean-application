import React from 'react';

const Login = ({ history }) => {
  const password = process.env.REACT_APP_MDP;
  const adminPath = process.env.REACT_APP_ADMIN_URL;
  let mdp = prompt('entrez votre mdp');
  return (
    <div>
      {mdp === { password } ? history.push(`/${adminPath}`) : history.push('/')}
    </div>
  );
};

export default Login;
