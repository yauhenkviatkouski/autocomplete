import style from "./style.module.scss";

const DevelopmentPage = () => {
  return (
    <main className={style.main}>
      <section>
        <textarea id="prompt-textarea" />
      </section>
    </main>
  );
};

export default DevelopmentPage;
