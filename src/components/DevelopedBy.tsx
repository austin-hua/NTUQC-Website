const DevelopedBy = () => {
  return (
    <div className="mb-8 font-mono text-neutral-10 text-xs text-center flex flex-col gap-3">
      <div>
        <span className="i18n-en">Contact us: </span>
        <span className="i18n-zh">聯絡我們：</span>
        <a
          href="mailto:ntuquantum@gmail.com"
          className="inline-block transition duration-300 hover:-translate-y-px outline-none hover:text-primary-10 focus-visible:text-primary-10"
          aria-label="Email"
        >
          ntuquantum@gmail.com
        </a>
      </div>
      <span>
        <span className="i18n-en">Developed by </span>
        <span className="i18n-zh">開發者：</span>
        <a
          href="https://github.com/austin-hua/NTUQC-Website"
          className="inline-block transition duration-300 hover:-translate-y-px outline-none hover:text-primary-10 focus-visible:text-primary-10"
          target="_blank"
          aria-label="Developer"
        >
          NTU Quantum Club
        </a>
      </span>
    </div>
  );
};

export default DevelopedBy;
