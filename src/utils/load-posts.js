export const loadPosts = async () => {
  const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
  const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");
  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  const postsJson = await posts.json(); // essa requisição retorna 100 posts
  const photosJson = await photos.json(); // essa requisiçao retorna 5000 photos

  // Pra pegar apenas 100 fotos:
  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url };
  });
  return postsAndPhotos;
};
