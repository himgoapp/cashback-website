import BlogMain from "./Blogmain";

const BlogContainer = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {isMobile && <MobileSideBar active={0} />}
      <BlogMain />
      {isMobile && <DashboardFooter active={0} />}
    </div>
  );
};

export default BlogContainer;
