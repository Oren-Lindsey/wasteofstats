import { Wasteof3 } from 'wasteof-client'
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    const wasteof3 = new Wasteof3()
    let user
    try {
      user = await wasteof3.getUser(params.name)
    } catch (error) {
      return {
        status: 404
      }
    }
    return {
      status: 200,
      body: user
    };
  }