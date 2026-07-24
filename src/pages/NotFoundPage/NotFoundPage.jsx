import classes from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={classes.notFound}>
      <h1 className={classes.title}>404</h1>
      <p className={classes.message}>Page not found</p>
    </div>
  );
};

export default NotFoundPage;
