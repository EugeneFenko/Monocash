const gh = require('gh-pages');

gh.publish('dist/ng-monoCash', {
  repo: 'git@github.com:EugeneFenko/Monocash.git',
}, (err) => {
  if (err === undefined) {
    console.log('Success!');
  } else console.log(`Err: ${err}`);
});
