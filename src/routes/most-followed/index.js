import { Wasteof3 } from 'wasteof-client'
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
    const wasteof3 = new Wasteof3()
    const trending = await wasteof3.getTrending()
    const mostFollowed = trending.users
    return {
      status: 200,
      body: {
        mostFollowed: mostFollowed
      }
    };
  }