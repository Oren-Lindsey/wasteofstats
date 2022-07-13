import { Wasteof2 } from 'wasteof-client'
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(event) {
    const wasteof = new Wasteof2()
    let user
    let page = 1
    let last = true
    try {
      page = event.url.searchParams.get('page')
      if (!page) page = 1
      user = await wasteof.getFollowersOfUser(event.params.name,event.url.searchParams.get('page'))
      last = user.last
    } catch (error) {
      return {
        status: 404
      }
    }
    return {
      status: 200,
      body: {followers: user.followers, num: page, last: last}
    };
  }