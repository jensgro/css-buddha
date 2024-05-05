/** Returns all blog posts as a collection. */
const getAllPosts = collection => {
    const projects = collection.getFilteredByGlob('./src/content/posts/*.md');
    return projects.reverse();
};

const getAllNotes = collection => {
    const projects = collection.getFilteredByGlob('./src/content/notes/*.md');
    return projects.reverse();
};


module.exports = {
    getAllPosts,
    getAllNotes
};
