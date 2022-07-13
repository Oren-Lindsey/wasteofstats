import { Wasteof3 } from 'wasteof-client'
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(event) {
    const wasteof3 = new Wasteof3()
    let post
    try {
      post = await wasteof3.getPost(event.params.id)
    } catch (error) {
      return {
        status: 404
      }
    }
    return {
      status: 200,
      body: post
    };
  }