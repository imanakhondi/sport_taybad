const UsersLayout = ({ children, title, subTitle }) => {
  return (
    <div className="container overflow-hidden">
      <div className="flex min-h-screen max-w-7xl mx-auto font-IRANSansWeb">
        <div className="flex-[2] flex flex-col p-5 relative">
          <div className="xl:max-w-2xl mx-auto bg-white rounded-2xl p-5 mt-10 dark:bg-navBgColorDark">
            <h2 className=" mb-2 text-black  dark:text-white">{title}</h2>
            <span className="text-xs mb-5">{subTitle}</span>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersLayout;
