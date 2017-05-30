const root = IS_PROD && IS_GITHUB_PROJECT ? `/${window.location.pathname.split('/')[1]}` : '';
export default root;
