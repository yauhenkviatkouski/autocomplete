import style from "./style.module.scss";

const DevelopmentPage = () => {
  return (
    <main class={style.main}>
      <section>
        <textarea id="prompt-textarea"></textarea>
      </section>
    </main>
  );
};

export default DevelopmentPage;