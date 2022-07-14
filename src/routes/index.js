import { Wasteof3 } from 'wasteof-client'
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
    const wasteof3 = new Wasteof3()
    const trending = await wasteof3.getTrending()
    const mostFollowed = trending.users.slice(0, -48)
    let users = shuffle(trending.users)
    users = users.slice(0, -48)
    return {
      status: 200,
      body: {
        users: users,
        mostFollowed: mostFollowed
      }
    };
  }
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}